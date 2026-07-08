/**
 * Portfolio site — accessible interactions
 * Vanilla JavaScript only
 */

(function () {
  'use strict';

  /* --------------------------------------------------------------------------
     Mobile navigation toggle
     -------------------------------------------------------------------------- */
  function initMobileNav() {
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.site-nav');

    if (!toggle || !nav) {
      return;
    }

    function setMenuState(isOpen) {
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
      nav.classList.toggle('is-open', isOpen);

      const main = document.getElementById('main-content');
      const footer = document.querySelector('.site-footer');
      if (main) {
        main.inert = isOpen;
      }
      if (footer) {
        footer.inert = isOpen;
      }
    }

    toggle.addEventListener('click', function () {
      const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
      setMenuState(!isExpanded);
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        if (window.matchMedia('(max-width: 48rem)').matches) {
          setMenuState(false);
        }
      });
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && nav.classList.contains('is-open')) {
        setMenuState(false);
        toggle.focus();
      }
    });
  }

  /* --------------------------------------------------------------------------
     Skip link — move focus to main for consistent screen reader support
     -------------------------------------------------------------------------- */
  function initSkipLink() {
    const skipLink = document.querySelector('.skip-link');
    const main = document.getElementById('main-content');

    if (!skipLink || !main) {
      return;
    }

    skipLink.addEventListener('click', function () {
      main.focus({ preventScroll: false });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    initMobileNav();
    initSkipLink();
  }
})();
