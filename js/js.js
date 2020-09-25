$('.carousel').carousel({
  interval: 3000
})

$(function () {
  new WOW().init();
})


$(document).ready(function () {
  $(".nav-list").on("click", "a", function (event) {
    event.preventDefault();
    let id = $(this).attr('href'),
      top = $(id).offset().top;
    $("body, html").animate({ scrollTop: top }, 800)
  });

  $(".btn_bottom").on("click", function (event) {
    event.preventDefault();
    let id = $(this).attr('href'),
      top = $(id).offset().top;
    $("body, html").animate({ scrollTop: top }, 1000)
  })

})




let navBtn = document.getElementById('nav-button');
let listClose = document.querySelector('.list_close')
let listWrap = document.getElementById('list-wrap');
let navList = document.querySelector('.nav-list');
let navLinks = document.querySelectorAll('.nav-links');

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', () => {
    listWrap.classList.remove('show');
    listWrap.classList.add('hide');
    document.body.style.overflow = 'scroll';
  })
}


navBtn.onclick = function () {
  listWrap.classList.add('show')
  document.body.style.overflow = 'hidden'
  if (listWrap.classList.contains('hide')) {
    listWrap.classList.remove('hide')
  }
  navList.classList.add('listShow')
}

listClose.onclick = function () {
  if (listWrap.classList.contains('show')) {
    listWrap.classList.remove('show')
    listWrap.classList.add('hide')
    document.body.style.overflow = 'scroll'
  }
}

window.onclick = function (event) {
  if (event.target == listWrap && listWrap.classList.contains('show')) {
    listWrap.classList.remove('show')
    listWrap.classList.add('hide')
    document.body.style.overflow = 'scroll'
  }
}