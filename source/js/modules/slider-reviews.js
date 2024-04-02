import {Swiper} from '../vendor/swiper';

const initSliderReviews = () => {
  const swiper = new Swiper('.reviews__slider', {
    direction: 'horizontal',
    autoHeight: true,
    slidesPerView: 1,
    spaceBetween: 0,
    loop: false,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-prev',
      prevEl: '.swiper-button-next',
    },
  });
};

export {initSliderReviews};

