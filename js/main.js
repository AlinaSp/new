var sliderHero = new Swiper ('.slider-hero', {
    autoplay: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

  })

var sliderPhoto = new Swiper(".slider-photo", {
  spaceBetween: 0,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  loopedSlides: 5,
  slideToClickedSlide: true
});

var sliderQuotes = new Swiper(".slider-quotes", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  loop: true,
  loopedSlides: 5
});

sliderQuotes.controller.control = sliderPhoto;
sliderPhoto.controller.control = sliderQuotes;