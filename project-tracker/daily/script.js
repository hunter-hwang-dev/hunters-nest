function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

const dropZone = document.getElementById("drop-zone");
document.addEventListener("dragover", function (event) {
  event.preventDefault();
});

document.addEventListener("drop", function (event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text"); // 드래그된 요소의 ID 가져오기
  var draggedElement = document.getElementById(data); // ID를 사용하여 드래그된 요소 가져오기

  // 마우스 좌표 가져오기
  var mouseX = event.clientX;
  var mouseY = event.clientY;

  // 드래그된 요소를 마우스 좌표에 위치시키기
  draggedElement.style.left = mouseX - draggedElement.offsetWidth / 2 + "px";
  draggedElement.style.top = mouseY - draggedElement.offsetHeight / 2 + "px";

  // 드래그된 요소를 dropZone 추가하기
  document.body.appendChild(draggedElement);
});
