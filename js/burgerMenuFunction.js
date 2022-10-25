export function openMenu() {
  document.querySelector('.hamburger-menu-icon').classList.toggle('open');
  document.querySelector('header').classList.toggle('open');
  document.querySelector('.dropdown-wrapper').classList.toggle('open');
}
