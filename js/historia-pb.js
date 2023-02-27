const modalOpen = () => {
    const btnLink = document.querySelector(".js-historia-link");
    const modal = document.querySelector(".js-historia-modal");
    const scrollBody = document.querySelector(".js-scroll");
    const btnFechar = document.querySelector(".js-btn-fechar");

    btnLink.addEventListener("click", () => {
        modal.classList.add("open");
        scrollBody.classList.add("off");
    });

    btnFechar.addEventListener("click", () => {
        modal.classList.remove("open");
        scrollBody.classList.remove("off");
    });
};

modalOpen();



var swiper = new Swiper('.historiaPB', {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
      rotate: 1,
      stretch: 0,
      depth: 100,
      modifier: 9,
      slideShadows: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper('.historiaSlider2', {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
      rotate: 1,
      stretch: 0,
      depth: 100,
      modifier: 9,
      slideShadows: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper('.historiaSlider3', {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
      rotate: 1,
      stretch: 0,
      depth: 100,
      modifier: 9,
      slideShadows: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper('.caatinga', {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
      rotate: 1,
      stretch: 0,
      depth: 100,
      modifier: 9,
      slideShadows: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
  });