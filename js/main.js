/* ============================================
   Taylor Family Website — JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  // ---- Mobile Navigation Toggle ----
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      mainNav.classList.toggle('open');
      // Animate hamburger to X
      navToggle.classList.toggle('active');
    });

    // Close nav when clicking a link (mobile)
    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('open');
        navToggle.classList.remove('active');
      });
    });
  }

  // ---- Set Active Nav Link ----
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

});
