const slideList = document.querySelector(".slide_list"),
  slideContents = document.querySelectorAll(".slide_content"),
  slideBtnNext = document.querySelector(".slide_btn_next"),
  slideBtnPrev = document.querySelector(".slide_btn_prev"),
  pagination = document.querySelector(".slide_pagination");
const slideLen = slideContents.length;
const slideWidth = 500;
const slideSpeed = 1000;
const startNum = 0;

slideList.style.width = slideWidth * (slideLen + 2) + "px"; //

let firstChild = slideList.firstElementChild;
let lastChild = slideList.lastElementChild; // 이것도 뭐야?
let clonedFirst = firstChild.cloneNode(true); //뭐야?
let clonedLast = lastChild.cloneNode(true);

//Add copied Slides
slideList.appendChild(clonedFirst);
slideList.insertBefore(clonedLast, slideList.firstElementChild);

slideList.style.transform = `translate3d(-${
  slideWidth * (startNum + 1)
}px,0px,0px)`;

let curIndex = startNum; // current slide index(except copied slide)
let curSlide = slideContents[curIndex];
curSlide.classList.add("slide_active");

function clickNext() {
  if (curIndex <= slideLen - 1) {
    const passWidth = slideWidth * (curIndex + 2);
    // 왜 2일까? 5가 1앞에 붙었잖아 그래서 1부터 보여지고 2로 넘길라고 그런가봐

    slideList.style.transition = slideSpeed + "ms";
    slideList.style.transform = `translate3d(-${passWidth}px,0px,0px)`;
    console.log(passWidth); //이것도 5번 안보이게 가져오는거야
  }
  if (curIndex === slideLen - 1) {
    setTimeout(function () {
      slideList.style.transition = "0ms";
      slideList.style.transform = `translate3d(-${slideWidth}px,0px,0px)`;
    }, slideSpeed);
    curIndex = -1;
  }
  curSlide.classList.remove("slide_active");
  curSlide = slideContents[++curIndex];
  curSlide.classList.add("slide_active");
}
// function clickPrev() {
//   if (curIndex >= slideLen - 5) {
//     const passWidth = slideWidth * (curIndex + 2) - slideWidth;
//     slideList.style.transition = `${slideSpeed}ms`;
//     slideList.style.transform = `translate3d(-${passWidth}px, 0px, 0px)`;
//   }
//   if (curIndex === slideLen - 5) {
//     setTimeout(function () {
//       slideList.style.transition = "0ms";
//       slideList.style.transform = `translate3d(${slideWidth}px, 0px,0px)`;
//     }, slideSpeed);
//     curIndex = 4;
//   }
//   curSlide.classList.remove("slide_active");
//   curSlide = slideContents[--curIndex];
//   curSlide.classList.add("slide_active");

//   // if (curIndex )
// }
function clickPrev() {
  console.log(curIndex);
  if (curIndex >= 0) {
    slideList.style.transition = `${slideSpeed}ms`;
    slideList.style.transform = `translate3d(-${
      slideWidth * curIndex
    }px,0px,0px)`;
  }
  if (curIndex === 0) {
    console.log("hi");
    const passWidth = slideWidth * slideLen;
    setTimeout(function () {
      slideList.style.transition = "0ms";
      slideList.style.transform = `translate3d(-${passWidth}px,0px,0px)`;
    }, slideSpeed);
    curIndex = slideLen;
  }
  curSlide.classList.remove("slide_active");
  curSlide = slideContents[--curIndex];
  curSlide.classList.add("slide_active");
}
function init() {
  slideBtnNext.addEventListener("click", clickNext);
  slideBtnPrev.addEventListener("click", clickPrev);
}
init();
