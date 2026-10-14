/* ================================================================
   Moleqyn – shared-nav.js
   Handles: theme persistence, mobile menu, active nav link
   Used by ALL pages (index, learn, experiments, quiz, dashboard, about)
================================================================ */
(function () {
  'use strict';

  /* ── Theme persistence (checks mlab-theme and ml-theme) ── */
  const savedTheme = localStorage.getItem('mlab-theme') || localStorage.getItem('ml-theme') || 'dark';
  if (savedTheme === 'light') document.documentElement.classList.add('light-mode');

  document.addEventListener('DOMContentLoaded', function () {

    /* Theme button */
    const themeBtn = document.getElementById('btn-theme') || document.getElementById('mlabThemeBtn');
    if (themeBtn) {
      themeBtn.textContent = document.documentElement.classList.contains('light-mode') ? '🌙' : '☀️';
      themeBtn.addEventListener('click', function () {
        document.documentElement.classList.toggle('light-mode');
        const isLight = document.documentElement.classList.contains('light-mode');
        themeBtn.textContent = isLight ? '🌙' : '☀️';
        localStorage.setItem('ml-theme', isLight ? 'light' : 'dark');
        localStorage.setItem('mlab-theme', isLight ? 'light' : 'dark');
      });
    }

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
