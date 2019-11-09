var sliderHero = new Swiper ('.slider-hero', {
    autoplay: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

  })

var sliderQuotes = new Swiper ('.slider-quotes', {
    loop: true,
  })

var sliderPhoto = new Swiper ('.slider-photo', {
    loop: true,
    spaceBetween: 0,
    centeredSlides: true,
    slidesPerView: 5,
    loopedSlides: 5,
    slideToClickedSlide: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

sliderQuotes.controller.control = sliderPhoto
sliderPhoto.controller.control = sliderQuotes