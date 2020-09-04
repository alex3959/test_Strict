$('.carousel').carousel({
  interval: 3000
})

$(function () {
  new WOW().init();
})

let headerSection = document.querySelector('.header-section');
let buttonTop = document.querySelector('.to-top');

headerSection.addEventListener('mouseleave', function () {
  if (buttonTop.classList.contains('hide')) {
    buttonTop.classList.remove('hide');
    buttonTop.classList.add('show');
  }
})

headerSection.addEventListener('mouseover', function () {
  if (buttonTop.classList.contains('show')) {
    buttonTop.classList.remove('show');
    buttonTop.classList.add('hide');
  }
})

var menuExit = document.querySelector('.menu-exit')
var collapse = document.querySelector('.collapse')

menuExit.addEventListener('click', function () {
  if (collapse.classList.contains('show')) {
    collapse.classList.remove('show');
  }
})