var swiper = new Swiper(".cronograma-swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: false,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});