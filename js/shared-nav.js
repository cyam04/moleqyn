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

  const savedTheme = localStorage.getItem('mlab_theme') || localStorage.getItem('mlab-theme') || localStorage.getItem('ml-theme');
  if (savedTheme === 'light' || savedTheme === 'day') {
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
        localStorage.setItem('mlab_theme', willBeLight ? 'day' : 'dark');
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupThemeToggles);
  } else {
    setupThemeToggles();
  }

  document.addEventListener('DOMContentLoaded', function () {

    /* Simulator Quick-Switch Dropdown */
    const quickSwitchBtn = document.getElementById('mlabQuickSwitchBtn');
    const quickSwitchMenu = document.getElementById('mlabQuickSwitchMenu');
    if (quickSwitchBtn && quickSwitchMenu) {
      quickSwitchBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        const isOpen = quickSwitchMenu.classList.contains('show');
        quickSwitchMenu.classList.toggle('show');
        quickSwitchBtn.setAttribute('aria-expanded', !isOpen);
      });
      document.addEventListener('click', function (e) {
        if (!quickSwitchBtn.contains(e.target) && !quickSwitchMenu.contains(e.target)) {
          quickSwitchMenu.classList.remove('show');
          quickSwitchBtn.setAttribute('aria-expanded', 'false');
        }
      });
    }

    /* Mobile hamburger & responsive menu */
    (function initMobileNav() {
      // 1. Existing id-based hamburger
      const ham = document.getElementById('hamburger');
      const mobileMenu = document.getElementById('mobile-menu');
      if (ham && mobileMenu) {
        ham.addEventListener('click', function () {
          mobileMenu.classList.toggle('open');
          ham.textContent = mobileMenu.classList.contains('open') ? '✕' : '☰';
        });
        mobileMenu.querySelectorAll('a').forEach(function (a) {
          a.addEventListener('click', function () {
            mobileMenu.classList.remove('open');
            ham.textContent = '☰';
          });
        });
      }

      // 2. Class-based mlab-nav floating navigation support
      const mlabNavs = document.querySelectorAll('.mlab-nav');
      if (mlabNavs.length > 0) {
        // Inject essential mobile styles if not already present in page
        if (!document.getElementById('mlab-mobile-nav-styles')) {
          var style = document.createElement('style');
          style.id = 'mlab-mobile-nav-styles';
          style.textContent = `
            .mlab-hamburger {
              display: none;
              background: none;
              border: none;
              cursor: pointer;
              padding: 8px;
              flex-direction: column;
              gap: 5px;
              z-index: 1001;
            }
            .mlab-hamburger span {
              display: block;
              width: 22px;
              height: 2px;
              background: currentColor;
              border-radius: 2px;
              transition: all 0.3s ease;
            }
            .mlab-hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
            .mlab-hamburger.open span:nth-child(2) { opacity: 0; }
            .mlab-hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }

            .mlab-mobile-menu {
              display: none !important;
              position: fixed;
              top: 75px;
              left: 14px;
              right: 14px;
              background: rgba(12, 27, 51, 0.96);
              backdrop-filter: blur(24px);
              -webkit-backdrop-filter: blur(24px);
              border: 1px solid rgba(0, 240, 255, 0.25);
              border-radius: 18px;
              padding: 16px;
              z-index: 99999;
              flex-direction: column;
              gap: 6px;
              box-shadow: 0 15px 45px rgba(0,0,0,0.5);
              max-height: 80vh;
              overflow-y: auto;
            }
            :root[data-theme="day"] .mlab-mobile-menu,
            html.light-mode .mlab-mobile-menu {
              background: rgba(255, 255, 255, 0.98);
              border-color: rgba(2, 132, 199, 0.25);
              box-shadow: 0 15px 45px rgba(0,0,0,0.12);
              color: #0f172a;
            }
            .mlab-mobile-menu.open {
              display: flex !important;
            }
            .mlab-mobile-menu a {
              text-decoration: none;
              color: inherit;
              font-size: 0.92rem;
              font-weight: 600;
              padding: 10px 14px;
              border-radius: 12px;
              display: flex;
              align-items: center;
              gap: 12px;
              transition: all 0.2s ease;
            }
            .mlab-mobile-menu a:hover {
              background: rgba(0, 240, 255, 0.12);
              color: #00f0ff;
            }
            :root[data-theme="day"] .mlab-mobile-menu a:hover,
            html.light-mode .mlab-mobile-menu a:hover {
              background: rgba(2, 132, 199, 0.1);
              color: #0284c7;
            }
            @media (max-width: 900px) {
              .mlab-nav .mlab-links, .navbar .nav-links { display: none !important; }
              .mlab-hamburger { display: flex !important; }
            }
          `;
          document.head.appendChild(style);
        }

        mlabNavs.forEach(function (nav) {
          let btn = nav.querySelector('.mlab-hamburger');
          if (!btn) {
            btn = document.createElement('button');
            btn.className = 'mlab-hamburger';
            btn.setAttribute('aria-label', 'Toggle Navigation Menu');
            btn.innerHTML = '<span></span><span></span><span></span>';
            nav.appendChild(btn);
          }

          let mMenu = document.querySelector('.mlab-mobile-menu');
          if (!mMenu) {
            mMenu = document.createElement('div');
            mMenu.className = 'mlab-mobile-menu';
            mMenu.style.display = 'none'; // Guaranteed hidden on desktop
            var links = nav.querySelectorAll('.mlab-links > li > a, .mlab-dropdown-content a');
            var seen = {};
            links.forEach(function (link) {
              var href = link.getAttribute('href');
              if (href && !seen[href] && href !== '#' && !link.classList.contains('mlab-theme-btn')) {
                seen[href] = true;
                var a = document.createElement('a');
                a.href = href;
                // Get clean title text without overflowing subtitle
                var titleEl = link.querySelector('.mlab-drop-title, .drop-title');
                var iconEl = link.querySelector('.mlab-drop-icon, .drop-icon');
                if (titleEl) {
                  a.innerHTML = (iconEl ? iconEl.outerHTML + ' ' : '') + '<span>' + titleEl.textContent.trim() + '</span>';
                } else {
                  a.innerHTML = link.innerHTML;
                }
                mMenu.appendChild(a);
              }
            });
            document.body.appendChild(mMenu);
          }

          btn.addEventListener('click', function (e) {
            e.stopPropagation();
            var isOpen = mMenu.classList.toggle('open');
            btn.classList.toggle('open', isOpen);
            mMenu.style.display = isOpen ? 'flex' : 'none';
          });

          mMenu.querySelectorAll('a').forEach(function (a) {
            a.addEventListener('click', function () {
              btn.classList.remove('open');
              mMenu.classList.remove('open');
              mMenu.style.display = 'none';
            });
          });

          document.addEventListener('click', function (e) {
            if (!nav.contains(e.target) && !mMenu.contains(e.target)) {
              btn.classList.remove('open');
              mMenu.classList.remove('open');
              mMenu.style.display = 'none';
            }
          });
        });
      }
    })();

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
