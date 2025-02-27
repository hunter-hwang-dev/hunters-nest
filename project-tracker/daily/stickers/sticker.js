import { stickerpack, svg, stickerContainerHTML } from "./stickerpack.js";

let stickers = [];

initSketch();
// refreshStickerText();

let offsetX = 0;
let offsetY = 0;

const saveBtn = document.getElementById("save");

saveBtn.addEventListener("click", (e) => {
  localStorage.setItem("sketch", JSON.stringify(stickers));
});

function drag(event) {
  offsetX = event.offsetX;
  offsetY = event.offsetY;
  event.dataTransfer.setData("text", event.target.id);
}

window.drag = drag;

window.stickerpackDrag = stickerpackDrag;

// function refreshStickerText() {
//   document.body.addEventListener(
//     "blur",
//     (event) => {
//       if (event.target.classList.contains("sticker-memo")) {
//         const container = event.target.closest(".sticker-container");
//         if (container) {
//           const id = parseInt(container.id); // id 추출
//           const sticker = stickers.find((s) => s.id === id); // 해당 sticker 찾기
//           if (sticker) {
//             sticker.text = event.target.innerText; // 내용 업데이트
//             console.log(`Sticker ${id} updated:`, sticker.text); // 디버깅 로그
//           }
//         }
//       }
//     },
//     true
//   );
// }

function initSketch() {
  //시작 시
  const savedStickers = JSON.parse(localStorage.getItem("sketch"));

  savedStickers.forEach((savedSticker) => {
    console.log(savedSticker);

    var draggedElementHTML = stickerContainerHTML(savedSticker.id, svg[0]);

    // 문자열을 DOM 요소로 변환
    var tempDiv = document.createElement("div");
    tempDiv.innerHTML = draggedElementHTML;
    var stickerElement = tempDiv.firstElementChild;

    // 마우스 위치에 맞게 요소 위치 설정
    stickerElement.style.left = savedSticker.left;
    stickerElement.style.top = savedSticker.top;

    document.body.appendChild(stickerElement);
  });
}

function stickerpackDrag(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
}

document.addEventListener("dragover", function (event) {
  event.preventDefault();
});

document.addEventListener("drop", function (event) {
  event.preventDefault();
  console.log(event);

  let dragged = event.dataTransfer.getData("text/plain"); // 드래그된 요소의 ID 가져오기
  if (!stickerpack.includes(dragged)) {
    var draggedElement = document.getElementById(dragged); // ID를 사용하여 드래그된 요소 가져오기

    // 마우스 좌표 가져오기
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    // 드래그된 요소를 마우스 좌표에 위치시키기
    draggedElement.style.left = mouseX - offsetX + "px";
    draggedElement.style.top = mouseY - offsetY + "px";

    // 드래그된 요소를 body에 추가하기
    document.body.appendChild(draggedElement);
  } else {
    const index = stickerpack.indexOf(dragged);

    const sticker = {
      id: stickers.length,
      text: "여기에 입력",
      left: `${event.clientX}px`,
      top: `${event.clientY}px`,
    };

    var draggedElementHTML = stickerContainerHTML(sticker.id, svg[index]);

    // 문자열을 DOM 요소로 변환
    var tempDiv = document.createElement("div");
    tempDiv.innerHTML = draggedElementHTML;
    var draggedElement = tempDiv.firstElementChild;

    // 마우스 위치에 맞게 요소 위치 설정
    draggedElement.style.left = sticker.left;
    draggedElement.style.top = sticker.top;

    document.body.appendChild(draggedElement);
    stickers.push(sticker);
  }
});
