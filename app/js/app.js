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
let hoverBlock1 = document.querySelector("#hoverblock1");
let hoverBlock2 = document.querySelector(".card-item__mockup--hover");
let hoverBlock1Before = window.getComputedStyle(
  document.querySelector("#hoverblock1"),
  ":before"
).transform;

console.log(hoverBlock1Before);


hoverBlock1.addEventListener("mouseenter", function (e) {
  aspro.classList.add("scale")
  hoverBlock1Before.value = "scale(1.2)";
});

hoverBlock1.addEventListener("mouseleave", function (e) {
  aspro.classList.remove("scale");
});
