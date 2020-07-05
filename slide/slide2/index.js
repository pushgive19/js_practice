const slideList = document.querySelector(".slide__list"),
  slideContent = document.querySelectorAll(".slide__content"),
  slideBtnPrev = document.querySelector(".prev_btn"),
  slideBtnNext = document.querySelector(".next_btn"),
  slideLen = slideContent.length,
  pagination = document.querySelector(".pagination");

const slideWidth = 400;
const slideSpeed = 300;
const startNum = 0;

slideList.style.width = slideWidth * (slideLen + 2) + "px";
slideList.style.transform = `translateX(-${slideWidth}px)`;

const SLIDEACTIVE_CN = "slide_active",
  DOTACTIVE_CN = "dot_active";

// const cloneFirst = slideContent[0].cloneNode(true);
// const cloneLast = slideContent[slideLen - 1].cloneNode(true);
// 위의 방법도 좋지만 배열 많아졌을때 별로야

const firstChild = slideList.firstElementChild,
  lastChild = slideList.lastElementChild;
const cloneFirst = firstChild.cloneNode(true),
  cloneLast = lastChild.cloneNode(true);
slideList.append(cloneFirst);
slideList.insertBefore(cloneLast, slideList.firstElementChild);

// Array.from(slideContent).push(cloneFirst);
// slideContent.prepend(cloneLast);

let curIndex = 0;
let curSlide = slideContent[curIndex];
curSlide.classList.add(SLIDEACTIVE_CN);

let pageChild = "";

for (var i = 0; i < slideLen; i++) {
  pageChild += `<li class="dot ${
    i === startNum ? DOTACTIVE_CN : ""
  }" data-index="${i}"><a href="#"></a></li>`;
}
pagination.innerHTML = pageChild;

const pageDots = document.querySelectorAll(".dot");

function clickNext() {
  if (curIndex <= slideLen - 1) {
    slideList.style.transform = `translateX(-${slideWidth * (curIndex + 2)}px)`;
    slideList.style.transition = ` ${slideSpeed}ms ease-in-out `;
  }
  if (curIndex === slideLen - 1) {
    setTimeout(function () {
      slideList.style.transition = "0ms";
      slideList.style.transform = `translateX(-${slideWidth}px)`;
      //   console.log(slideList.style, slideList.style.transition);
    }, slideSpeed);
    curIndex = -1;
  }
  curSlide.classList.remove(SLIDEACTIVE_CN);
  pageDots[curIndex === -1 ? slideLen - 1 : curIndex].classList.remove(
    DOTACTIVE_CN
  );
  curSlide = slideContent[++curIndex];
  //   curDot.classList.remove(DOTACTIVE_CN);
  //   curDot = pageDots[curIndex];
  //   curDot.classList.add(DOTACTIVE_CN);
  // 이 과정을  다르게 표현하는 법
  pageDots[curIndex].classList.add(DOTACTIVE_CN);
  curSlide.classList.add(SLIDEACTIVE_CN);
}
function clickPrev() {
  if (curIndex >= 0) {
    slideList.style.transform = `translateX(-${slideWidth * curIndex}px)`;
    slideList.style.transition = `${slideSpeed}ms`;
  }
  if (curIndex === 0) {
    setTimeout(function () {
      slideList.style.transition = "0ms";
      slideList.style.transform = `translateX(-${slideWidth * slideLen}px)`;
    }, slideSpeed);
    curIndex = slideLen;
  }
  curSlide.classList.remove(SLIDEACTIVE_CN);
  pageDots[curIndex === slideLen ? startNum : curIndex].classList.remove(
    DOTACTIVE_CN
  );
  curSlide = slideContent[--curIndex];
  pageDots[curIndex].classList.add(DOTACTIVE_CN);
  //   curDot.classList.remove(DOTACTIVE_CN);
  //   curDot = pageDots[curIndex];
  //   curDot.classList.add(DOTACTIVE_CN);
  curSlide.classList.add(SLIDEACTIVE_CN);
}

let curDot;

Array.prototype.forEach.call(pageDots, function (dot) {
  dot.addEventListener("click", function () {
    curDot = document.querySelector(`.${DOTACTIVE_CN}`);
    curDot.classList.remove(DOTACTIVE_CN);

    curDot = this;
    curDot.classList.add(DOTACTIVE_CN);

    curSlide.classList.remove(SLIDEACTIVE_CN);
    curIndex = Number(this.getAttribute("data-index"));
    curSlide = slideContent[curIndex];
    curSlide.classList.add(SLIDEACTIVE_CN);
    slideList.style.transition = `${slideSpeed}ms`;
    slideList.style.transform = `translateX(-${slideWidth * (curIndex + 1)}px)`;
  });
});

function init() {
  slideBtnNext.addEventListener("click", clickNext);
  slideBtnPrev.addEventListener("click", clickPrev);
}
init();
