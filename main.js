'use strict';

const menu = document.querySelector('.navbar__menu');
const menuItem = document.querySelector('.navbar__menu__item');
const toogleBtn = document.querySelector('.navbar__toogle-btn');

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
    navbar.classList.remove('section__container');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});


menu.classList.toggle("active");

toogleBtn.addEventListener('click',() => {
    menu.classList.toggle('active');
});
