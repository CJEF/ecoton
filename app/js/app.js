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

// TweenLite.to("#path", 1, {drawDVG:"50% 50%", delay: 3})
// TweenLite.to("#path2", 1, {drawDVG:"50% 50%", delay: 3})
// TweenLite.to("#path3", 1, {drawDVG:"50% 50%", delay: 3})
// TweenLite.to("#svg", { rotation: 27, x: 100, duration: 1 });

// new Vivus("svg", {
//   duration: 5000,
//   type: "oneByOne",
// });

// function fillPath(classname, color) {
//   const paths = document.querySelectorAll(`#svg-castle .${classname}`);
//   for (path of paths) {
//     path.style.fill = `${color}`;
//   }
// }

let aspro = document.querySelector("#aspro");
let prototype = document.querySelector("#prototype");
let hoverBlock1 = document.querySelector("#hoverblock1");
let hoverBlock2 = document.querySelector(".card-item__mockup--hover");


hoverBlock1.addEventListener("mouseenter", function (e) {
  aspro.classList.add("scale")
  let wrap = aspro.closest(".card-item");
  wrap.classList.add("card-item--hover");
});

hoverBlock1.addEventListener("mouseleave", function (e) {
  aspro.classList.remove("scale");
  let wrap = aspro.closest(".card-item");
  wrap.classList.remove("card-item--hover");
});


hoverBlock2.addEventListener("mouseenter", function (e) {
  prototype.classList.add("scale");
  let wrap = prototype.closest(".card-item");
  wrap.classList.add("card-item--hover");
});

hoverBlock2.addEventListener("mouseleave", function (e) {
  prototype.classList.remove("scale");
  let wrap = prototype.closest(".card-item");
  wrap.classList.remove("card-item--hover");
});
