import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
const slider1 = new Swiper('.slider-1', {
  modules: [Navigation],

  slidesPerView: 1.15,
  centeredSlides: true,
  spaceBetween: 16,
  loop: true,

  navigation: {
    nextEl: '.btn-next-1',
    prevEl: '.btn-prev-1',
  },

  breakpoints: {
    1440: {
      slidesPerView: 3.8,
      spaceBetween: 24,
    }
  }
});
const slider2 = new Swiper('.slider-2', {
  modules: [Navigation],

  slidesPerView: 1.2,
  centeredSlides: true,
  spaceBetween: 16,
  loop: true,

  navigation: {
    nextEl: '.btn-next-2',
    prevEl: '.btn-prev-2',
  },

  breakpoints: {
    1440: {
      slidesPerView: 3.2,
      spaceBetween: 24,
    }
  },

  on: {
    init(swiper) {
      updateScale(swiper);
    },
    slideChangeTransitionEnd(swiper) {
      updateScale(swiper);
    }
  }
});

function updateScale(swiper) {
  swiper.slides.forEach(slide => {
    slide.style.transform = 'scale(1)';
  });

  const active = swiper.slides[swiper.activeIndex];
  if (active) active.style.transform = 'scale(1.1)';
}