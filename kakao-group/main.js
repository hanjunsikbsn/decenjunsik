'use strict';


// navbar 
const menuBars = document.querySelector('#menu_bars');
const navBar = document.querySelector('.navbar');

menuBars.onclick = () => {
    menuBars.classList.toggle('fa-times');
    navBar.classList.toggle('active');
}

window.onscroll = () => {
  menuBars.classList.remove('fa-times');
  navBar.classList.remove('active');
}

const searchIcon = document.querySelector('#search-icons');
const searchForm = document.querySelector('#search-form');

searchIcon.onclick = () => {
    searchForm.classList.toggle('active');
}

const Close = document.querySelector('#close');
Close.addEventListener('click', () => {
    searchForm.classList.remove('active');
})

//navbar click scollintoview
const header = document.querySelector('header');
header.addEventListener('click', (e) => {
  const target = e.target;
  const link = target.dataset.link;
  if(link === null) {
    return;
  } 

  const scrollTo = document.querySelector(link);
  console.log(scrollTo);
  scrollTo.scrollIntoView({behavior: "smooth"});
})


// home section
let swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });


  //mobile section
const navbarBtn = document.querySelector('.navbar-btn');
const fieldContainer = document.querySelector('.field-container');
const fieldBoxAll = document.querySelectorAll('.field-box');
navbarBtn.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter;

  if(filter === null) {
    return;
  }
  fieldBoxAll.forEach((ele) => {
    if(filter === '*' || filter === ele.dataset.type) {
      ele.classList.remove('invisible');
    } else {
      ele.classList.add('invisible');
    }
  })

})
