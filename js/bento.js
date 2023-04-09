const swiper = new Swiper('.swiper-container', {
    spaceBetween: 25,
    slidesPerGroup: 1,
    loop: true,
    centerSlide: 'true',
    centeredSlides: true,
    slidesPerView: 'auto',
    speed: 500,
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 1,
        },
        950: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        }
    },
});