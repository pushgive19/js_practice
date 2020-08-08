const dropzone = document.getElementById("dropzone");

function onDragStart(event) {
  event.dataTransfer.setData("text/plain", event.currentTarget.dataset.table);
  console.log("object :>> ", event.currentTarget.dataset.table);
  event.currentTarget.style.backgroundColor = "#e9c46a";
}
function onDragEnd(event) {
  event.currentTarget.style.backgroundColor = "#2a9d8f";
}
function onDragOver(event) {
  event.preventDefault();
}
function onDrop(event) {
  let id = event.dataTransfer.getData("text");

  const draggableElement = document.getElementById(id);
  const clone = draggableElement.cloneNode(true);
  dropzone.appendChild(clone);
  event.dataTransfer.clearDate();
}
function init() {}
init();
