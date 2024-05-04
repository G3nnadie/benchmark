$(document).ready(function () {

  // Header height
  function headerHieght() {
    var headerHieght = $('.header').outerHeight(true);
    $('.main').css('padding-top', headerHieght);
  }
  headerHieght();
  
  $(window).resize(function() {
    headerHieght();
  });

  // Show menu mobail
  $('.navbar-toggle').on('click', function () {
    $(this).toggleClass('active');
    $('.nav').fadeToggle(200);
  });

  if($(window).width() < 1200) {
    $('.nav__item--drop .nav__link').on('click', function(e) {
      e.preventDefault();
      $(this).next('.drop').slideToggle(200);
      $(this).parent().toggleClass('nav__item--drop-active');
    });
  }

  // Header add class
  $(window).scroll(function() { 
    var top = $(document).scrollTop();
    if (top > 0) {
      $('.header').addClass('header--scroll');
    }
    else {
      $('.header').removeClass('header--scroll');
    }
  });

  // Modal
  $('.open-modal-order').on('click', function(e) {
    e.preventDefault();
    $('.modal--order').fadeIn(200);
  });

   $('.open-modal-thank').on('click', function(e) {
    e.preventDefault();
    $('.modal--thank').fadeIn(200);
  });

  $('.modal__close').on('click', function() {
    $('.modal').fadeOut(200);
  });

  $('.modal').mouseup(function (e) {
    let modalContent = $(".modal__box");
    if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
      $(this).fadeOut(200);
    }
  });

  // Maskedinput
  $(function($){
    $('.phone-mask').mask(('+7 ') + '(999) 999-99-99');
  });

  // Clients sl
  var swiper = new Swiper(".clients__sl", {
    slidesPerView: 2,
    slidesPerColumn: 2,
    spaceBetween: 10,
    slidesPerColumnFill: 'column',
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        spaceBetween: 20,
        slidesPerView: 5,
      },
      1200: {
        spaceBetween: 20,
        slidesPerView: 6,
      },
    },
  });

  // News sl
  var swiper = new Swiper(".news__sl", {
    spaceBetween: 10,
    slidesPerView: 'auto',
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    breakpoints: {
      992: {
        spaceBetween: 20,
        slidesPerView: 3,
      },
    },
  });

});