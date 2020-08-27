const btnToggle = document.querySelector(".btn__toggle");
const container = document.querySelector(".container");
// const btnDown = document.querySelector(".btn__down");
// const btnUp = document.querySelector(".btn__up");
// function clickUp(e) {
//   console.log("continer.dir :>> ", container.style);
//   container.style.height = "0";
//   container.style.transition =
//     "height 0.2s cubic-bezier(.17,.67,.62,.97)";

function init() {
  btnToggle.addEventListener("mouseenter", (e) => {
    //slideDown
    // e.preventDefault();
    if (!container.classList.contains("active")) {
      container.classList.add("active");

      container.style.height = "auto";
      const height = container.clientHeight + "px";
      container.style.height = "0px";

      setTimeout(() => {
        container.style.height = height;
      }, 0);
    }
  });

  btnToggle.addEventListener("mouseout", (e) => {
    //slideup
    e.preventDefault();
    container.style.height = "0px";
    container.addEventListener(
      "transitionend",
      () => {
        container.classList.remove("active");
      }
      // { once: true }
    );
  });
  // btnUp.addEventListener("click", clickUp);
}
init();
