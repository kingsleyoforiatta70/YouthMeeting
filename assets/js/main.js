/**
 * Main Site JavaScript
 * The Apostolic Church - Ghana | Central Region Zone 1
 * Youth & Children's Camp Meeting 2026
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const primaryNav = document.getElementById('primary-nav');

    if (mobileToggle && primaryNav) {
      mobileToggle.addEventListener('click', () => {
        const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
        mobileToggle.setAttribute('aria-expanded', String(!isExpanded));
        primaryNav.classList.toggle('nav-open', !isExpanded);
        mobileToggle.classList.toggle('is-active', !isExpanded);
      });

      // Close nav when clicking outside
      document.addEventListener('click', (e) => {
        if (!primaryNav.contains(e.target) && !mobileToggle.contains(e.target) && primaryNav.classList.contains('nav-open')) {
          primaryNav.classList.remove('nav-open');
          mobileToggle.setAttribute('aria-expanded', 'false');
          mobileToggle.classList.remove('is-active');
        }
      });
    }

    // 2. Highlight active navigation link
    const currentPath = window.location.pathname.replace(/\\/g, '/');
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href) {
        const cleanHref = href.replace('../', '').replace('./', '');
        if (currentPath.endsWith(cleanHref) || (cleanHref === 'index.html' && (currentPath.endsWith('/') || currentPath.endsWith('/Youth/') || currentPath === ''))) {
          link.classList.add('active');
          link.setAttribute('aria-current', 'page');
        }
      }
    });

    // 3. Smooth scrolling for internal anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href').substring(1);
        if (!targetId) return;
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          if (history.pushState) {
            history.pushState(null, null, '#' + targetId);
          }
        }
      });
    });

    // 4. Quick FAQ / Accordion collapsible toggles (if present)
    document.querySelectorAll('.accordion-header').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.parentElement;
        const isOpen = item.classList.contains('is-open');
        // Close others
        document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('is-open'));
        if (!isOpen) {
          item.classList.add('is-open');
        }
      });
    });
  });
})();
