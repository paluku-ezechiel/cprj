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

// Testimonials carousel
if ($('.testimonials-carousel').length) {
  $('.testimonials-carousel').owlCarousel({
    loop: true,
    margin: 24,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    dots: true,
    nav: false,
    responsive: {
      0:   { items: 1 },
      768: { items: 2 }
    }
  });
}

// Impact / Metrics counters
(function(){
  var section = document.querySelector('.impact-metrics');
  if (!section) return;

  function animateValue(el, start, end, duration) {
    var range = end - start;
    var startTime = null;
    function frame(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var value = Math.floor(start + range * progress);
      el.textContent = value.toLocaleString('fr-FR');
      if (progress < 1) {
        window.requestAnimationFrame(frame);
      }
    }
    window.requestAnimationFrame(frame);
  }

  var started = false;
  function startCounters() {
    if (started) return;
    started = true;
    var counters = document.querySelectorAll('.impact-counter[data-target]');
    counters.forEach(function(el){
      var target = parseInt(el.getAttribute('data-target'), 10) || 0;
      animateValue(el, 0, target, 1500);
    });
  }

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries, obs){
      entries.forEach(function(entry){
        if (entry.isIntersecting) {
          startCounters();
          obs.disconnect();
        }
      });
    }, { threshold: 0.3 });
    observer.observe(section);
  } else {
    function onScroll() {
      var rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.7) {
        startCounters();
        window.removeEventListener('scroll', onScroll);
      }
    }
    window.addEventListener('scroll', onScroll);
    onScroll();
  }
})();

});

