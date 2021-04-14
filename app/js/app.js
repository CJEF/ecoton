const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
  },
  autoplay: {
    delay: 3000,
  },
});

AOS.init();
