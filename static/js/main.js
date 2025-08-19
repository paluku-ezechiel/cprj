jQuery( document ).ready(function( $ ) {

"use strict";

// Initiate the wowjs
// new WOW().init();

// Header on Scroll
$(function () {
  $(window).scroll( function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 300) {
      $(".header-area").addClass("background-header");
    } 
    else {
      $(".header-area").removeClass("background-header");
    }
  }); 
});
window.addEventListener('load', function(){
    var scroll = $(window).scrollTop();
    if (scroll >= 300) {
      $(".header-area").addClass("background-header");
    }
});

// Menu Dropdown Toggle
if($('.menu-trigger').length){
  $(".menu-trigger").on('click', function() { 
    $(this).toggleClass('active');
    $('.header-area .nav').slideToggle(200);
  });
}

// Partners carousel
if ($('.partners-carousel').length) {
  $('.partners-carousel').owlCarousel({
    loop: true,
    margin: 24,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: false,
    nav: true,
    navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
    responsive: {
      0:   { items: 2 },
      576: { items: 3 },
      768: { items: 4 },
      992: { items: 5 },
      1200:{ items: 6 }
    }
  });
}

});

