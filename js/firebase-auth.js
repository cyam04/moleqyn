/**
 * MOLEQYN FIREBASE AUTHENTICATION ENGINE
 * Official Google Firebase Cellular Phone Authentication & reCAPTCHA Integration.
 * 
 * Provides:
 * - 100% real cellular SMS OTP delivery to Indian (+91) and international numbers
 * - Invisible & visual Google reCAPTCHA bot defense
 * - Zero on-screen OTP code leakage (ensures only physical phone owner can authenticate)
 * - Safe admin configuration storage with live connection verification
 */

(function (window) {
  'use strict';

  const STORAGE_KEY_CONFIG = 'moleqyn_firebase_config';

  let _app = null;
  let _auth = null;
  let _recaptchaVerifier = null;
  let _confirmationResult = null;

  /**
   * Retrieve active Firebase configuration from storage or window defaults
   */
  function getConfig() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_CONFIG);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.apiKey && parsed.projectId) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('[MoleqynAuth] Could not parse stored Firebase config:', e);
    }

    // Check window-level fallback if set
    if (window.MOLEQYN_FIREBASE_CONFIG && window.MOLEQYN_FIREBASE_CONFIG.apiKey) {
      return window.MOLEQYN_FIREBASE_CONFIG;
    }

    return null;
  }

  /**
   * Check if Firebase credentials are fully configured
   */
  function isConfigured() {
    const config = getConfig();
    return !!(config && config.apiKey && config.projectId && config.apiKey.length > 10);
  }

  /**
   * Initialize or retrieve Firebase App instance
   */
  function getApp() {
    if (!window.firebase) {
      console.warn('[MoleqynAuth] Firebase SDK scripts not loaded yet.');
      return null;
    }

    if (_app) return _app;

    const config = getConfig();
    if (!config) return null;

    try {
      if (window.firebase.apps && window.firebase.apps.length > 0) {
        _app = window.firebase.apps[0];
      } else {
        _app = window.firebase.initializeApp(config);
      }
      return _app;
    } catch (err) {
      console.error('[MoleqynAuth] Failed to initialize Firebase:', err);
      return null;
    }
  }

  /**
   * Get Firebase Auth instance
   */
  function getAuth() {
    const app = getApp();
    if (!app) return null;
    if (!_auth) {
      _auth = window.firebase.auth();
      // Optional: Set language to user's device or Hindi/English
      _auth.useDeviceLanguage();
    }
    return _auth;
  }

  /**
   * Initialize or retrieve Google reCAPTCHA Verifier
   * @param {string} containerId - DOM ID of container element
   * @param {string} size - 'invisible' or 'normal'
   */
  /**
   * Initialize or retrieve Google reCAPTCHA Verifier
   * @param {string} containerId - DOM ID of container element
   * @param {string} size - 'invisible' or 'normal'
   */
  function getRecaptchaVerifier(containerId = 'recaptcha-container', size = 'invisible') {
    const auth = getAuth();
    if (!auth) return null;

    const container = document.getElementById(containerId);
    if (!container) {
      console.warn(`[MoleqynAuth] Container #${containerId} not found in DOM`);
      return null;
    }

    // 1. If active verifier already exists, reuse it directly!
    if (_recaptchaVerifier) {
      return _recaptchaVerifier;
    }

    // 2. Clear any lingering DOM children to prevent "already rendered" conflicts
    container.innerHTML = '';

    try {
      _recaptchaVerifier = new window.firebase.auth.RecaptchaVerifier(containerId, {
        size: size,
        callback: function (response) {
          console.log('[MoleqynAuth] reCAPTCHA passed successfully');
        },
        'expired-callback': function () {
          console.warn('[MoleqynAuth] reCAPTCHA token expired. Resetting widget.');
          resetRecaptchaWidget();
        }
      }, auth);
      return _recaptchaVerifier;
    } catch (err) {
      console.warn('[MoleqynAuth] RecaptchaVerifier construction notice:', err);
      // If error mentions already rendered, clear container and try with clean inner element
      if (err.message && err.message.includes('already been rendered')) {
        try {
          container.innerHTML = '';
          const freshDiv = document.createElement('div');
          freshDiv.id = containerId + '-inner-' + Date.now();
          container.appendChild(freshDiv);
          _recaptchaVerifier = new window.firebase.auth.RecaptchaVerifier(freshDiv.id, {
            size: size
          }, auth);
          return _recaptchaVerifier;
        } catch (innerErr) {
          console.error('[MoleqynAuth] Re-try reCAPTCHA failed:', innerErr);
        }
      }
      return _recaptchaVerifier || null;
    }
  }

  function resetRecaptchaWidget() {
    if (_recaptchaVerifier) {
      try {
        if (typeof grecaptcha !== 'undefined' && _recaptchaVerifier.recaptchaWidgetId !== undefined) {
          grecaptcha.reset(_recaptchaVerifier.recaptchaWidgetId);
        }
      } catch (e) {
        console.warn('reCAPTCHA widget reset notice:', e);
      }
    }
  }

  /**
   * Format phone number to E.164 (+91XXXXXXXXXX)
   */
  function formatE164Phone(rawPhone) {
    if (!rawPhone) return '';
    const clean = String(rawPhone).trim();
    if (clean.startsWith('+')) {
      return clean.replace(/[^\d+]/g, '');
    }
    const digitsOnly = clean.replace(/\D/g, '');
    if (digitsOnly.length === 10) {
      return '+91' + digitsOnly;
    }
    if (digitsOnly.length === 12 && digitsOnly.startsWith('91')) {
      return '+' + digitsOnly;
    }
    return '+' + digitsOnly;
  }

  /**
   * Send Genuine Cellular SMS OTP via Google Firebase Auth
   * @param {string} rawPhone - 10 digit Indian number or full international format
   * @param {string} containerId - Element ID for reCAPTCHA
   * @returns {Promise<{success: boolean, message?: string, formattedPhone?: string, error?: string}>}
   */
  async function sendSmsOtp(rawPhone, containerId = 'recaptcha-container') {
    const formatted = formatE164Phone(rawPhone);
    if (!formatted || formatted.length < 11) {
      return {
        success: false,
        error: 'Please enter a valid 10-digit mobile number.'
      };
    }

    if (!isConfigured()) {
      return {
        success: false,
        notConfigured: true,
        error: 'Google Firebase Phone Authentication credentials are not configured yet. Please set your Firebase Project configuration in the Admin Hub > SMS Gateway.'
      };
    }

    const auth = getAuth();
    if (!auth) {
      return {
        success: false,
        error: 'Firebase Auth service is unavailable or failed to initialize.'
      };
    }

    try {
      const verifier = getRecaptchaVerifier(containerId, 'invisible');
      if (!verifier) {
        return {
          success: false,
          error: 'Could not create Google reCAPTCHA security verifier.'
        };
      }

      // Dispatch genuine cellular SMS via Google Firebase
      const confirmationResult = await auth.signInWithPhoneNumber(formatted, verifier);
      _confirmationResult = confirmationResult;

      return {
        success: true,
        formattedPhone: formatted,
        message: `Real Cellular SMS OTP dispatched to ${formatted}!`
      };
    } catch (err) {
      console.error('[MoleqynAuth] Firebase Phone OTP Send Error:', err);
      
      // Reset reCAPTCHA widget token on error so user can retry smoothly without destroying verifier
      resetRecaptchaWidget();

      let userMsg = err.message || 'SMS delivery failed.';
      if (err.code === 'auth/invalid-phone-number') {
        userMsg = 'Invalid phone number format. Please check your 10-digit mobile number.';
      } else if (err.code === 'auth/too-many-requests') {
        userMsg = 'Too many requests sent from this device. Please wait a few moments before trying again.';
      } else if (err.code === 'auth/quota-exceeded') {
        userMsg = 'Daily SMS quota limit reached. Please check Firebase console or add test phone number.';
      } else if (err.code === 'auth/captcha-check-failed') {
        userMsg = 'reCAPTCHA bot verification failed. Please try again.';
      }

      return {
        success: false,
        code: err.code,
        error: userMsg
      };
    }
  }

  /**
   * Verify the 6-digit OTP code entered by the user
   * @param {string} otpCode - 6 digit verification code
   * @returns {Promise<{success: boolean, user?: object, error?: string}>}
   */
  async function verifySmsOtp(otpCode) {
    if (!otpCode || String(otpCode).trim().length !== 6) {
      return {
        success: false,
        error: 'Please enter all 6 digits of the SMS verification code.'
      };
    }

    if (!_confirmationResult) {
      return {
        success: false,
        error: 'No active SMS verification session found. Please request a new OTP.'
      };
    }

    try {
      const result = await _confirmationResult.confirm(String(otpCode).trim());
      const firebaseUser = result.user;

      return {
        success: true,
        user: {
          uid: firebaseUser.uid,
          phone: firebaseUser.phoneNumber,
          loginMethod: 'firebase_phone_otp',
          isAnonymous: firebaseUser.isAnonymous
        }
      };
    } catch (err) {
      console.error('[MoleqynAuth] Firebase OTP Verification Error:', err);
      let userMsg = 'Invalid OTP code. Please re-check the SMS sent to your phone.';
      if (err.code === 'auth/invalid-verification-code') {
        userMsg = 'Incorrect verification code. Please check your SMS and try again.';
      } else if (err.code === 'auth/code-expired') {
        userMsg = 'This verification code has expired. Please click "Resend Code".';
      }

      return {
        success: false,
        code: err.code,
        error: userMsg
      };
    }
  }

  /**
   * Save configuration to localStorage and re-initialize
   * @param {object} configObj - { apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId }
   */
  function saveConfig(configObj) {
    if (!configObj || typeof configObj !== 'object') {
      throw new Error('Config must be a valid JSON object');
    }
    localStorage.setItem(STORAGE_KEY_CONFIG, JSON.stringify(configObj));
    _app = null;
    _auth = null;
    _recaptchaVerifier = null;
    _confirmationResult = null;
    return getApp();
  }

  /**
   * Clear active confirmation and verifier
   */
  function reset() {
    _confirmationResult = null;
    if (_recaptchaVerifier) {
      try { _recaptchaVerifier.clear(); } catch(e){}
      _recaptchaVerifier = null;
    }
  }

  // Export public interface
  window.MoleqynFirebase = {
    getConfig,
    setConfig: saveConfig,
    isConfigured,
    getApp,
    getAuth,
    getRecaptchaVerifier,
    sendSmsOtp,
    verifySmsOtp,
    formatE164Phone,
    reset
  };

  // Alias for generic auth namespace
  window.MoleqynAuth = window.MoleqynFirebase;

})(window);
