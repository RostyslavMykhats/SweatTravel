const swiperCake = new Swiper('.swiper-container-cake', {
    spaceBetween: 25,
    slidesPerGroup: 1,
    loop: true,
    centeredSlides: true,
    speed: 500,
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
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