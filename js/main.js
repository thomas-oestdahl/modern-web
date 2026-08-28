// Shared, dependency-free JavaScript used across every page.
// Keep this framework-free: it only relies on standard browser APIs.

document.addEventListener('DOMContentLoaded', () => {
  highlightCurrentNavLink();
});

/**
 * Adds an `aria-current="page"` attribute (and matching class) to the
 * navigation link that points to the page currently being viewed.
 */
function highlightCurrentNavLink() {
  const currentPath = window.location.pathname.replace(/\/index\.html$/, '/');
  const navLinks = document.querySelectorAll('.site-nav__links a[href]');

  navLinks.forEach((link) => {
    const linkPath = new URL(link.getAttribute('href'), window.location.href)
      .pathname.replace(/\/index\.html$/, '/');

    if (linkPath === currentPath) {
      link.setAttribute('aria-current', 'page');
      link.classList.add('is-active');
    }
  });
}
