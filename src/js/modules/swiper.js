import Swiper, { Navigation, Pagination, Scrollbar, Keyboard, Mousewheel, FreeMode, Autoplay, EffectFade, EffectFlip, EffectCube, EffectCoverflow, Lazy, Zoom, Thumbs, Controller, Parallax, Virtual, A11y } from 'swiper';

export function swiperFunction() {

    let swiperDARKNESS = new Swiper('.swiper_list', {
        modules: [Pagination, FreeMode],
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        simulateTouch: true,
        grabCursor: true,
        freeMode: true,
        speed: 1500,
        spaceBetween: 50
    });
};