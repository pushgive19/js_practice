const slideContents = document.querySelectorAll(".slide__content"),
  slideList = document.querySelector(".slide__list"),
  btnPrev = document.querySelector(".slide__btn-prev"),
  btnNext = document.querySelector(".slide__btn-next"),
  pagination = document.querySelector(".slide__pagination");
const slideLen = slideContents.length;
const slideWidth = 400,
  slideSpeed = 300;
const startNum = 0;
slideList.style.width = `${slideWidth * (slideLen + 2)}px`;
const firstChild = slideList.firstElementChild,
  lastChild = slideList.lastElementChild;
const clonedFirst = firstChild.cloneNode(true),
  clonedLast = lastChild.cloneNode(true);
const SLIDEACTIVE_CN = "slide__active",
  DOTACTIVE_CN = "dot__active";

slideList.appendChild(clonedFirst);
slideList.insertBefore(clonedLast, firstChild);
slideList.style.transform = `translateX(-${slideWidth}px)`;

let curIndex = startNum;
let curSlide = slideContents[curIndex];
curSlide.classList.add(SLIDEACTIVE_CN);
// console.log(curSlide, curIndex);

let pageChild = "";
for (let i = 0; i < slideLen; i++) {
  pageChild += '<li class="dot ';
  pageChild += i === startNum ? DOTACTIVE_CN : "";
  pageChild += `" data-index="${i}"><a href="#"></a></li>`;
}
pagination.innerHTML = pageChild;
const pageDots = document.querySelectorAll(".dot");
console.log(pageDots);
function clickNext() {
  if (curIndex <= slideLen - 1) {
    slideList.style.transform = `translateX(-${slideWidth * (curIndex + 2)}px)`;
    slideList.style.transition = `${slideSpeed}ms ease-in-out`;
    // console.log(curIndex);
  }
  // console.log(curSlide, curIndex);
  if (curIndex === slideLen - 1) {
    setTimeout(function () {
      slideList.style.transition = "0s";
      slideList.style.transform = `translateX(-${slideWidth}px)`;
    }, slideSpeed);
    curIndex = -1;
    // console.log(curSlide);
  }
  // console.log(curSlide);
  curSlide.classList.remove(SLIDEACTIVE_CN);
  pageDots[curIndex === -1 ? slideLen - 1 : curIndex].classList.remove(
    DOTACTIVE_CN
  );
  // console.log(curSlide, curIndex);
  curSlide = slideContents[++curIndex];
  // console.log(curSlide, curIndex);
  curSlide.classList.add(SLIDEACTIVE_CN);
  pageDots[curIndex].classList.add(DOTACTIVE_CN);
  // console.log(curSlide);S
}
function clickPrev() {
  if (curIndex >= 0) {
    slideList.style.transform = `translateX(-${slideWidth * curIndex}px)`;
    slideList.style.transition = `${slideSpeed}ms`;
  }
  if (curIndex === 0) {
    setTimeout(function () {
      slideList.style.transform = `translateX(-${slideWidth * slideLen}px)`;
      slideList.style.transition = "0ms";
    }, slideSpeed);
    curIndex = 5;
  }
  curSlide.classList.remove(SLIDEACTIVE_CN);
  pageDots[curIndex === 5 ? 0 : curIndex].classList.remove(DOTACTIVE_CN);
  curSlide = slideContents[--curIndex];
  pageDots[curIndex].classList.add(DOTACTIVE_CN);
  curSlide.classList.add(SLIDEACTIVE_CN);
}
let curDot;
Array.prototype.forEach.call(pageDots, function (dot, i) {
  dot.addEventListener("click", function (e) {
    e.preventDefault();
    curDot = document.querySelector(".dot__active");

    curDot = this;
    this.classList.add("dot__active");

    curSlide.classList.remove("slide_active");
    curIndex = Number(this.getAttribute("data-index"));
    curSlide = slideContents[curIndex];
    curSlide.classList.add("slide__active");
    slideList.style.transition = slideSpeed + "ms";
    slideList.style.transform =
      "translate3d(-" + slideWidth * (curIndex + 1) + "px,0px,0px)";
  });
});
function init() {
  btnNext.addEventListener("click", clickNext);
  btnPrev.addEventListener("click", clickPrev);
}
init();
