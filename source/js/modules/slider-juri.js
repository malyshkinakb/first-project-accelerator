import {Swiper} from '../vendor/swiper';

const initSliderJuri = () => {
  new Swiper('.juri__slider', {
  // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,

    // Navigation arrows
    navigation: {
      nextEl: '.juri__button--prev',
      prevEl: '.juri__button--next',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        initialSlide: 2,
        slidesPerView: 2,
        spaceBetween: 32,
      },
      1366: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    }
  });
};

export {initSliderJuri};
