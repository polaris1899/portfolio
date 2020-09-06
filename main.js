'use strict';


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

// Handle scrolling when tapping on the navbarw menu
const navbarMenu = document.querySelector('.navbar__menu');

navbarMenu.addEventListener('click',(event) => {
  const target = event.target;
  const link = event.target.dataset.link;
  const scroll = document.querySelector(link);
  const navbarOffset = 45;
  const bodyRect = document.body.getBoundingClientRect().top;
  const linkRect = scroll.getBoundingClientRect().top;
  const scrollPosition = linkRect - bodyRect;
  const offsetPosition = scrollPosition - navbarOffset;

  if (link == null) {
    return;
  } 

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
})


