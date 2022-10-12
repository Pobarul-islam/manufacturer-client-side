// https://swiperjs.com/
// ===================== -->

import { Swiper } from "swiper/react";

var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  speed: 1200,
  grabCursor: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  on: {
    slideChangeTransitionStart: function () {
      // Slide captions
      var swiper = this;
      var slideTitle = (swiper.slides[swiper.activeIndex]).attr("data-title");
      var slideSubtitle = (swiper.slides[swiper.activeIndex]).attr(
        "data-subtitle"
      );
      (".slide-captions").html(function () {
        return (
          "<h2 class='current-title'>" +
          slideTitle +
          "</h2>" +
          "<h4 class='current-subtitle'>" +
          slideSubtitle +
          "</h4>"
        );
      });
    },
  },
});

// Slide captions on load
var sizes1 = (mySwiper.slides[mySwiper.activeIndex]).attr("data-title");
var sizes2 = (mySwiper.slides[mySwiper.activeIndex]).attr("data-subtitle");
(".slide-captions").html(function () {
  return (
    "<h2 class='current-title'>" +
    sizes1 +
    "</h2>" +
    "<h3 class='current-subtitle'>" +
    sizes2 +
    "</h3>"
  );
});
