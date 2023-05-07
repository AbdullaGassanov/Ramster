'use strict';

const header = document.querySelector('.header');
const headerHamburger = document.querySelector('.header__hamburger');
const navClose = document.querySelector('.nav__close');
const page = document.querySelector('.page');
const nav = document.querySelector('.nav');
const boxImg1 = document.querySelector('.box-img1');
const boxImg2 = document.querySelector('.box-img2');

boxImg1.addEventListener('click', e => {
  boxImg2.style.transform = 'translateX(-100%)';
  boxImg1.style.transform = 'translateX(-100%)';
  console.log('clicked');
});
boxImg2.addEventListener('click', e => {
  boxImg1.style.transform = 'translateX(0%)';
  boxImg2.style.transform = 'translateX(0%)';
  console.log('clicked');
});

const movingBanner = setInterval(() => {
  boxImg2.style.transform = 'translateX(-100%)';
  boxImg1.style.transform = 'translateX(-100%)';
}, 4000);

const movingBanner2 = setInterval(() => {
  boxImg1.style.transform = 'translateX(0%)';
  boxImg2.style.transform = 'translateX(0%)';
}, 8000);

headerHamburger.addEventListener('click', e => {
  console.log(e.target);
  nav.classList.toggle('nav__hide');
  page.classList.add('shadow');
  header.classList.add('shadow');
});

navClose.addEventListener('click', e => {
  nav.classList.toggle('nav__hide');
  page.classList.remove('shadow');
  header.classList.remove('shadow');
});

/* 
const headerMenu = document.querySelector('.header__menu');
const headerMenuContent = document.querySelectorAll('.header__menu-content');

headerMenu.addEventListener('mouseover', e => {
  const event = e.target;
  if (event.dataset.brand != null) {
    const brand = event.dataset.brand;
    console.log(brand);
    if (event.dataset.brand == brand) {
      const content = event.nextElementSibling;
      console.log(content);
      content.style.opacity = '1';
      content.style.display = 'block';
    }
  }
});

headerMenu.addEventListener('mouseout', e => {
  const event = e.target;
  if (event.dataset.brand != null) {
    const brand = event.dataset.brand;
    console.log(brand);
    if (event.dataset.brand == brand) {
      const content = event.nextElementSibling;
      console.log(content);
      content.style.opacity = '0';
      content.style.display = 'none';
    }
  }
});

headerMenuContent.forEach(cont => {
  cont.addEventListener('mouseover', e => {
    e.target.style.opacity = '1';
    e.target.display = 'block';
  });
});

headerMenuContent.forEach(cont => {
  cont.addEventListener('mouseout', e => {
    e.target.style.opacity = '0';
    e.target.display = 'none';
  });
}); */

/* headerMenu.addEventListener('mouseout', e => {
  const event = e.target;
  if (event.classList.contains('header__menu-link')) {
    headerMenuContent.style.opacity = 0;
    headerMenuContent.style.display = 'none';
  }
}); */

/* headerMenuContent.addEventListener('mouseover', e => {
  headerMenuContent.style.display = 'block';
  headerMenuContent.style.opacity = 1;
});

headerMenuContent.addEventListener('mouseout', e => {
  headerMenuContent.style.display = 'none';
  headerMenuContent.style.opacity = 0;
}); */
