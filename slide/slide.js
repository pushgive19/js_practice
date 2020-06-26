const slideList = document.querySelector(".slide_list"),
  slideContents = document.querySelectorAll(".slide_content"),
  slideBtnNext = document.querySelector(".slide_btn_next"),
  slideBtnPrev = document.querySelector(".slide_btn_prev"),
  pagination = document.querySelector(".slide_pagination");
const slideLen = slideContents.length;
const slideWidth = 400;
const slideSpeed = 300;

slideList.style.width = slideWidth * slideLen + "px";

let curIndex = 0; // current slide index(except copied slide)

function handleClick() {
  if (curIndex <= slideLen - 1) {
    slideList.getElementsByClassName.transition = slideSpeed + "ms";
    slideList.style.transform =
      "translate3d(-" + slideWidth * (curIndex + 1) + "px,0px,0px)";
  }
  curSlide = slideContents[++curIndex];
}
function init() {
  console.log(slideContents);
  slideBtnNext.addEventListener("click", handleClick);
}
init();
