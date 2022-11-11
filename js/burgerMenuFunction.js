import { $ } from './helpers/helpers';

export function openMenu() {
  $('.hamburger-menu-icon').classList.toggle('open');
  $('header').classList.toggle('open');
  $('.dropdown-wrapper').classList.toggle('open');
}
