/* ================================================================
   Moleqyn – shared-nav.js
   Handles: theme persistence, mobile menu, active nav link
   Used by ALL pages (index, learn, experiments, quiz, dashboard, about)
================================================================ */
(function () {
  'use strict';

  /* ── Unified Theme synchronization (sets BOTH data-theme="day" & class="light-mode") ── */
  function applyTheme(isLight) {
    if (isLight) {
      document.documentElement.classList.add('light-mode');
      document.documentElement.setAttribute('data-theme', 'day');
    } else {
      document.documentElement.classList.remove('light-mode');
      document.documentElement.removeAttribute('data-theme');
    }
  }

  const savedTheme = localStorage.getItem('mlab-theme') || localStorage.getItem('ml-theme');
  if (savedTheme === 'light') {
    applyTheme(true);
  }

  function setupThemeToggles() {
    const themeBtns = document.querySelectorAll('#mlabThemeBtn, #themeBtn, #btn-theme, .mlab-theme-btn, .theme-toggle');
    const isLightNow = document.documentElement.classList.contains('light-mode') || document.documentElement.getAttribute('data-theme') === 'day';
    themeBtns.forEach(function (btn) {
      btn.textContent = isLightNow ? '🌙' : '☀️';
      if (btn._hasSharedThemeListener) return;
      btn._hasSharedThemeListener = true;
      btn.addEventListener('click', function (e) {
        if (e) e.preventDefault();
        const currentlyLight = document.documentElement.classList.contains('light-mode') || document.documentElement.getAttribute('data-theme') === 'day';
        const willBeLight = !currentlyLight;
        applyTheme(willBeLight);
        themeBtns.forEach(function (b) { b.textContent = willBeLight ? '🌙' : '☀️'; });
        localStorage.setItem('ml-theme', willBeLight ? 'light' : 'dark');
        localStorage.setItem('mlab-theme', willBeLight ? 'light' : 'dark');
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupThemeToggles);
  } else {
    setupThemeToggles();
  }

  document.addEventListener('DOMContentLoaded', function () {

    /* Mobile hamburger */
    const ham = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    if (ham && mobileMenu) {
      ham.addEventListener('click', function () {
        mobileMenu.classList.toggle('open');
        ham.textContent = mobileMenu.classList.contains('open') ? '✕' : '☰';
      });
      /* Close on link click */
      mobileMenu.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          mobileMenu.classList.remove('open');
          ham.textContent = '☰';
        });
      });
    }

    /* Student progress helpers (localStorage) */
    window.MLProgress = {
      get: function (key, def) {
        try { return JSON.parse(localStorage.getItem('ml-' + key)) ?? def; }
        catch (e) { return def; }
      },
      set: function (key, val) {
        try { localStorage.setItem('ml-' + key, JSON.stringify(val)); }
        catch (e) { /* storage full */ }
      },
      increment: function (key) {
        const v = this.get(key, 0);
        this.set(key, v + 1);
        return v + 1;
      }
    };

    /* Global Navbar Auth State Sync */
    try {
      var userStr = localStorage.getItem('mlab_user');
      var user = null;
      if (userStr) user = JSON.parse(userStr);
      var isDash = window.location.pathname.toLowerCase().indexOf('dashboard.html') !== -1;
      var isLog = window.location.pathname.toLowerCase().indexOf('login.html') !== -1;

      document.querySelectorAll('.mlab-login-btn').forEach(function(btn) {
        if (!isDash && !isLog) {
          if (user && user.isLoggedIn) {
            btn.textContent = '🧑‍🔬 ' + (user.name ? user.name.split(' ')[0] : 'Profile');
            btn.href = 'dashboard.html';
            btn.title = 'Open Student Dashboard';
          } else {
            btn.textContent = 'Login';
            btn.href = 'login.html';
          }
        }
      });
    } catch(err) {}

    /* Progressive Web App (PWA) Service Worker Registration */
    if ('serviceWorker' in navigator && (window.location.protocol === 'https:' || window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
      window.addEventListener('load', function() {
        navigator.serviceWorker.register('sw.js').catch(function(err) {
          console.log('[PWA] Service worker registration ignored in local file context:', err);
        });
      });
    }

  });
})();
