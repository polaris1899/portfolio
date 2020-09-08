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

// Make the arrow up icon when you scrolls down and click to the Scroll to Top 
const returnHome = document.querySelector('.return__home');

document.addEventListener('scroll', () => {
  const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  if (currentScroll >= 5) {
    returnHome.style.display = "block";
  } else {
    returnHome.style.display = "none";
  }
});
  
returnHome.addEventListener('click',(event) => {
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

