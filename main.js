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

// Handle scrolling when tapping on the navbar menu
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
  navbarMenu.classList.remove('open');

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
})

// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toogle-btn');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
})

// Handle click on "contact me" button on home
const homeContactBtn = document.querySelector('.home__contact');
const contact = document.querySelector('#contact');

homeContactBtn.addEventListener('click',(event) => {
  contact.scrollIntoView({behavior: 'smooth'});
})

// Make "home" slowly fade to transparent as the window scrolls down
const home = document.querySelector('#home');
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
   home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Show "arrow up" botton when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
})
const returnHome = document.querySelector('.return__home');


// Handle click on the "aroow up" button
arrowUp.addEventListener('click',(event) => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// projects filtered
const workBtnContainer = document.querySelector('.work__categories')
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

workBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if(filter == null) {
    return;
  }

  // Remove selection from the previous item and select the new one
  const active = document.querySelector('.category__btn.selected');
  active.classList.remove('selected');
  const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
  target.classList.add('selected');

  projectContainer.classList.add('anim-out');
  setTimeout(() => {
    projects.forEach((project) => {
      if(filter === '*' || filter === project.dataset.type) {
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('anim-out');
  },300);
});