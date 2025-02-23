let stickers = [
  { id: 0, text: "여기에 입력", left: "237px", top: "892.5px" }, //좌표, 이미지 경로 또는 이미지 일련번호 같은 값이 들어가야 됨
  { id: 1, text: "여기에 입력", left: "237px", top: "892.5px" },
  { id: 2, text: "여기에 입력", left: "237px", top: "892.5px" },
]; //기존에 있던 스티커들 id

let offsetX = 0;
let offsetY = 0;

const id0 = document.getElementById("0");
// const xy = document.getElementById("xy");
// xy.addEventListener("click", (e) => {
//   const computedStyle = window.getComputedStyle(id0);
//   console.log(computedStyle.left, computedStyle.top);
// });

function stickerTextRefresh() {
  document.body.addEventListener(
    "blur",
    (e) => {
      if (e.target.classList.contains("sticker-memo")) {
        refreshSticker(e.target);
      }
    },
    true
  );
}

const saveBtn = document.getElementById("save");

saveBtn.addEventListener("click", (e) => {
  localStorage.setItem("sketch", JSON.stringify(stickers));
});

function initSketch() {
  //시작 시
  if (localStorage.getItem("sketch")) {
    let loaded = JSON.parse(localStorage.getItem("sketch"));
    console.log(loaded);
  }
}

initSketch();
stickerTextRefresh();

function refreshSticker(target) {
  const container = target.closest(".sticker-container"); // 상위 컨테이너 찾기
  if (container) {
    const id = parseInt(container.id); // id 추출
    const sticker = stickers.find((s) => s.id === id); // 해당 sticker 찾기
    if (sticker) {
      sticker.text = target.innerText; // 내용 업데이트
      console.log(`Sticker ${id} updated:`, sticker.text); // 디버깅 로그
    }
  }
}

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
          <img class="sticker-img" src="svg/sticker${code}.svg" draggable="false" />
        </div>
      </div>`;

    // 문자열을 DOM 요소로 변환
    var tempDiv = document.createElement("div");
    tempDiv.innerHTML = draggedElementHTML;
    var draggedElement = tempDiv.firstElementChild;

    // 마우스 위치에 맞게 요소 위치 설정
    sticker.left = event.clientX + "px";
    sticker.top = event.clientY + "px";
    draggedElement.style.left = sticker.left;
    draggedElement.style.top = sticker.top;

    document.body.appendChild(draggedElement);
    stickers.push(sticker);
  }
});

function findSample(data) {
  if (data === "sample00") return "00";
  else if (data === "sample01") return "01";
  else if (data === "sample02") return "02";
}
