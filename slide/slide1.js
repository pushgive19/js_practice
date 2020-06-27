const slideContents = document.querySelectorAll(".slide__content"),
  slideList = document.querySelector(".slide__list"),
  btnPrev = document.querySelector(".slide__btn-prev"),
  btnNext = document.querySelector(".slide__btn-next");
const slideLen = slideContents.length;
const slideWidth = 100,
  slideSpeed = 300;
let boxIndex = 0;
slideList.style.width = `${slideWidth * (slideLen + 2)}px`;
const firstChild = slideList.firstElementChild,
  lastChild = slideList.lastElementChild;
const clonedFirst = firstChild.cloneNode(true),
  clonedLast = lastChild.cloneNode(true);

slideList.appendChild(clonedFirst);
slideList.insertBefore(clonedLast, firstChild);
slideList.style.transform = `translateX(-${slideWidth}px)`;

function clickNext() {
  if (boxIndex <= slideLen - 1) {
    slideList.style.transform = `translateX(-${slideWidth * (boxIndex + 2)}px)`;
    slideList.style.transition = `${slideSpeed}ms ease-in-out`;
    console.log(boxIndex);
  }
  if (boxIndex === slideLen - 1) {
    setTimeout(function () {
      slideList.style.transition = "0s";
      slideList.style.transform = `translateX(-${slideWidth}px)`;
      boxIndex = 0;
    }, slideSpeed);
  }
  boxIndex++;
}
function clickPrev() {
  if (boxIndex >= 0) {
    slideList.style.transform = `translateX(-${slideWidth * boxIndex}px)`;
    slideList.style.transition = `${slideSpeed}ms`;
    boxIndex--;
  }
  if (boxIndex === 0) {
    slideList.style.transform = `translateX(-${slideWidth * slideLen}px)`;
  }
}

function init() {
  btnNext.addEventListener("click", clickNext);
  btnPrev.addEventListener("click", clickPrev);
}
init();
