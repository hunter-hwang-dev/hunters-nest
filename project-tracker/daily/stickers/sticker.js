let stickers = [
  { id: 0, text: "여기에 입력" },
  { id: 1, text: "여기에 입력" },
  { id: 2, text: "여기에 입력" },
]; //기존에 있던 스티커들 id
let offsetX = 0;
let offsetY = 0;

function drag(event) {
  offsetX = event.offsetX;
  offsetY = event.offsetY;
  event.dataTransfer.setData("text", event.target.id);
}

function dragSample(event) {
  event.dataTransfer.setData("text", event.target.id);
}

document.addEventListener("dragover", function (event) {
  event.preventDefault();
});

document.addEventListener("drop", function (event) {
  event.preventDefault();
  console.log(event);

  var data = event.dataTransfer.getData("text"); // 드래그된 요소의 ID 가져오기
  if (data !== "sample00" && data !== "sample01" && data !== "sample02") {
    var draggedElement = document.getElementById(data); // ID를 사용하여 드래그된 요소 가져오기

    // 마우스 좌표 가져오기
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    // 드래그된 요소를 마우스 좌표에 위치시키기
    draggedElement.style.left = mouseX - offsetX + "px";
    draggedElement.style.top = mouseY - offsetY + "px";

    // 드래그된 요소를 body에 추가하기
    document.body.appendChild(draggedElement);
  } else {
    let code = findSample(data);
    let sticker = {};
    sticker.id = stickers.length;
    sticker.text = "여기에 입력";

    var draggedElementHTML = `<div
        id="${sticker.id}"
        class="sticker-container"
        draggable="true"
        ondragstart="drag(event)"
      >
        <div class="sticker" draggable="false">
          <div class="sticker-memo" draggable="false" contenteditable="true">
            여기에 입력
          </div>
          <img class="sticker-img" src="sticker${code}.svg" draggable="false" />
        </div>
      </div>`;

    // 문자열을 DOM 요소로 변환
    var tempDiv = document.createElement("div");
    tempDiv.innerHTML = draggedElementHTML;
    var draggedElement = tempDiv.firstElementChild;

    // 마우스 위치에 맞게 요소 위치 설정
    draggedElement.style.left = event.clientX + "px";
    draggedElement.style.top = event.clientY + "px";

    document.body.appendChild(draggedElement);
    stickers.push(sticker);
  }
});

function findSample(data) {
  if (data === "sample00") return "00";
  else if (data === "sample01") return "01";
  else if (data === "sample02") return "02";
}
