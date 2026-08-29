const menuButton = document.querySelector('.menu-button');
const mobileNav = document.querySelector('.mobile-nav');

function closeMenu() {
  menuButton?.setAttribute('aria-expanded', 'false');
  mobileNav?.setAttribute('hidden', '');
  document.body.classList.remove('menu-open');
  const label = menuButton?.querySelector('.sr-only');
  if (label) label.textContent = 'Open menu';
}

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  if (isOpen) {
    closeMenu();
  } else {
    menuButton.setAttribute('aria-expanded', 'true');
    mobileNav?.removeAttribute('hidden');
    document.body.classList.add('menu-open');
    const label = menuButton.querySelector('.sr-only');
    if (label) label.textContent = 'Close menu';
  }
});

mobileNav
  ?.querySelectorAll('a')
  .forEach(link => link.addEventListener('click', closeMenu));

document.querySelectorAll('[data-year]').forEach(node => {
  node.textContent = new Date().getFullYear();
});

document.querySelectorAll('[data-year]').forEach(node => {
  node.textContent = new Date().getFullYear();
});

const emailLink = document.querySelector('[data-email-link]');
const emailAddress = document.querySelector('[data-email-address]');

if (emailLink && emailAddress) {
  const emailCodes = [
    104, 101, 108, 108, 111, 64, 115, 104, 111, 114, 101, 108, 105, 110, 101,
    100, 117, 110, 101, 46, 99, 111, 109
  ];

  const email = String.fromCharCode(...emailCodes);

  emailLink.href = `mailto:${email}`;
  emailAddress.textContent = email;
}

const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;
if (prefersReducedMotion || !('IntersectionObserver' in window)) {
  document
    .querySelectorAll('.reveal')
    .forEach(element => element.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document
    .querySelectorAll('.reveal')
    .forEach(element => observer.observe(element));
}
