import Swiper from "swiper";
import { Keyboard, Navigation, } from "swiper/modules";

const projectSections = document.querySelectorAll(".projects");

projectSections.forEach(projectSection => {
  const slider = projectSection.querySelector(".projects-slider");
  const prevArrow = projectSection.querySelector(".slider-arrows__button--prev");
  const nextArrow = projectSection.querySelector(".slider-arrows__button--next");

  const swiper = new Swiper(slider, {
    modules: [Keyboard, Navigation],
    keyboard: {
      enabled: true,
      pageUpDown: false,
    },
    navigation: {
      enabled: true,
      nextEl: nextArrow,
      prevEl: prevArrow,
    },
    breakpoints: {
      "480.1": {
        slidesPerView: 1.72,
      },
      "768.1": {
        slidesPerView: 2.832,
      },
      "1024.1": {
        slidesPerView: 3.816,
      },
      "1200.1": {
        slidesPerView: 4.04,
      },
      "1440.1": {
        slidesPerView: 4.64,
      },
    },
    slidesPerView: 1.28,
    spaceBetween: 10,
    rewind: true,
  });
});
