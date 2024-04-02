// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';
import { initSliderReviews } from './modules/slider-reviews';
import { initSliderJuri } from './modules/slider-juri';
import { initAcordion } from './modules/accordion';
import { initTabs } from './modules/tabs-faq';
import { initTabsPrice } from './modules/tabs-price';

//import {initSliderReviews} from './modules/slider-reviews';


window.addEventListener('DOMContentLoaded', () => {
  initSliderReviews();
  initSliderJuri();
  initAcordion();
  initTabs();
  initTabsPrice();
});
