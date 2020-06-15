const modal = document.querySelector(".js-modal"), 
    button = document.getElementById("btn"),
    close = modal.querySelector(".js-close");

const BLANK_CN = "blank"

function btnClick(){
    console.dir(modal);
    modal.style.display="block";
}

function closeClick(){
    modal.style.display="none";
}

function init(){
    button.addEventListener("click",btnClick);
    close.addEventListener("click", closeClick);
}
init();