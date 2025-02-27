import { dummySketch } from "./dummy.js"; //vanilla js에서 확장자명 주의!
import { stickerpack, svg, generateStickerElement } from "./stickerpack.js";

let draft = [];
const canvas = document.getElementById("canvas");
const saveBtn = document.getElementById("save");
const loadBtn = document.getElementById("load");

initSketch();
syncDraftText();
syncDraftPosition();
syncNewSticker();

function initSketch() {
  const savedData = JSON.parse(localStorage.getItem("sketch"));
  savedData.forEach((sticker) => {
    let stickerElement = generateStickerElement(sticker);
    canvas.appendChild(stickerElement);
    draft.push(sticker);
  });

  saveBtn.addEventListener("click", (e) => {
    localStorage.setItem("sketch", JSON.stringify(draft));
  });
  loadBtn.addEventListener("click", (e) => {
    canvas.innerHTML = "";
    draft = dummySketch;
    draft.forEach((sticker) => {
      let stickerElement = generateStickerElement(sticker);
      canvas.appendChild(stickerElement);
    });
  });
}

function syncDraftText() {
  document.body.addEventListener("focusout", (e) => {
    if (e.target.classList.contains("sticker-memo")) {
      const id = e.target.parentElement.parentElement.id;
      const text = e.target.innerText;
      draft[id].text = text;
      console.log(draft);
    }
  });
}

function syncDraftPosition() {
  let draggedElement;
  let draggedElementId;
  let offsetX;
  let offsetY;

  document.addEventListener("dragstart", (e) => {
    draggedElement = e.target;
    draggedElementId = e.target.id;
    offsetX = e.offsetX;
    offsetY = e.offsetY;
    console.log(e.target.id);
  });

  document.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  document.addEventListener("drop", (e) => {
    e.preventDefault();

    console.log("drop:", e.target);
    if (e.target.id === "bin") {
      //삭제 버튼
      draggedElement.remove();
    } else {
      const existingStickerElement = document.getElementById(draggedElementId);
      if (existingStickerElement) {
        draft[draggedElementId].left = `${e.clientX - offsetX}px`;
        draft[draggedElementId].top = `${e.clientY - offsetY}px`;
        console.log(draft[draggedElementId]);

        const updatedStickerElement = generateStickerElement(
          draft[draggedElementId]
        );
        existingStickerElement.replaceWith(updatedStickerElement);
      }
    }
  });
}

function syncNewSticker() {
  const stickerBtns = Array.from(
    document.getElementsByClassName("sticker-btn")
  );

  stickerBtns.forEach((stickerBtn) => {
    stickerBtn.addEventListener("click", (e) => {
      let packId = stickerpack.findIndex((name) => name == stickerBtn.id);
      let left = Math.random() * window.innerWidth;
      let top = Math.random() * window.innerHeight;
      console.log(packId, left, top);

      let sticker = {
        id: draft.length,
        text: "여기에 입력",
        left: `${left}px`,
        top: `${top}px`,
        src: svg[packId],
      };

      let stickerElement = generateStickerElement(sticker);
      canvas.appendChild(stickerElement);
      draft.push(sticker);
    });
  });
}
