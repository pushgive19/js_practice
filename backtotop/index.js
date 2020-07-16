// const backToTop = document.querySelector("button");

// function handleScroll() {
//   const scrolled = window.scrollY;
//   const coords = document.documentElement.clientHeight;
//   console.log(coords, scrolled);
//   if (scrolled > coords) {
//     backToTop.classList.add("showing");
//   }
//   if (scrolled < coords) {
//     backToTop.classList.remove("showing");
//   }
// }
// function handleClick() {
//   if (window.scrollY > 0) {
//     window.scrollBy(0, -50);
//     setTimeout(handleClick, 0);
//   }
// }

// function init() {
//   window.addEventListener("scroll", handleScroll);
//   backToTop.addEventListener("click", handleClick);
//   // console.log(1);
// }
// init();

//
/* begin begin Back to Top button  */
// (function () {
//   "use strict";

//   function trackScroll() {
//     var scrolled = window.pageYOffset;
//     var coords = document.documentElement.clientHeight;

//     if (scrolled > coords) {
//       goTopBtn.classList.add("back_to_top-show");
//     }
//     if (scrolled < coords) {
//       goTopBtn.classList.remove("back_to_top-show");
//     }
//   }

//   function backToTop() {
//     if (window.pageYOffset > 0) {
//       window.scrollBy(0, -80);
//       setTimeout(backToTop, 0);
//     }
//   }

//   var goTopBtn = document.querySelector(".back_to_top");

//   window.addEventListener("scroll", trackScroll);
//   goTopBtn.addEventListener("click", backToTop);
// })();
/* end begin Back to Top button  */
const button = document.querySelector("button");
const scroll = window.scrollY;
// or pageYOffset;

function handleScroll() {
  const scrolled = window.scrollY;
  const coords = document.documentElement.clientHeight;
  if (scrolled > coords) {
    button.classList.add("showing");
  }
  if (scrolled < coords) {
    button.classList.remove("showing");
  }
}
function handleClick() {
  const scrollOptions = {
    top: 0,
    behavior: smooth,
  };

  if (window.scrollY > 0) {
    // window.scrollBy(0, -30);
    // setTimeout(handleClick, 0);
    window.scrollTo(scrollOptions);
  }
}
function init() {
  button.addEventListener("click", handleClick);
  window.addEventListener("scroll", handleScroll);
}
init();
