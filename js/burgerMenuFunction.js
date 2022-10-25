export function openMenu() {
  console.log('burger Menu');
  document.querySelector('.hamburger-menu-icon').classList.toggle('open');
  document.querySelector('header').classList.toggle('open');
  document.querySelector('.dropdown-wrapper').classList.toggle('open');
}
