/**
 * Happy Minds Tuitions - Main JavaScript
 * Lightweight: smooth scroll, scroll reveal, navbar state, footer year.
 */

(function () {
  'use strict';

  // ----- Footer year -----
  var yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ----- Smooth scroll for anchor links (same page) -----
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    var href = anchor.getAttribute('href');
    if (href === '#') return;
    var target = document.querySelector(href);
    if (target) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  });

  // ----- Sticky navbar: add .scrolled when page is scrolled -----
  var header = document.querySelector('.site-header');
  if (header) {
    function updateNavbarScroll() {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
    updateNavbarScroll();
    window.addEventListener('scroll', function () {
      requestAnimationFrame(updateNavbarScroll);
    }, { passive: true });
  }

  // ----- Scroll reveal: add .in-view when element enters viewport -----
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealEls = document.querySelectorAll('.animate-on-scroll');
  if (!prefersReducedMotion && revealEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { rootMargin: '0px 0px -40px 0px', threshold: 0 }
    );
    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else if (revealEls.length) {
    revealEls.forEach(function (el) {
      el.classList.add('in-view');
    });
  }
})();
