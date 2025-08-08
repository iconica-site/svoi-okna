import Swiper from "swiper";
import { Autoplay, EffectFade, Keyboard, Pagination, } from "swiper/modules";

const heroSlider = document.querySelector(".hero-slider");

if (heroSlider) {
  const pagination = heroSlider.querySelector(".slider-pagination");

  const swiper = new Swiper(heroSlider, {
    modules: [Autoplay, EffectFade, Keyboard, Pagination,],
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    fadeEffect: {
      crossFade: true,
    },
    keyboard: {
      enabled: true,
      pageUpDown: false,
    },
    pagination: {
      clickable: true,
      el: pagination,
      enabled: true,
    },
    effect: "fade",
    speed: 1000,
    rewind: true,
  });
}
