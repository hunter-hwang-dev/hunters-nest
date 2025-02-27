import { dummySketch } from "./dummy.js"; //vanilla js에서 확장자명 주의!
import { generateStickerElement } from "./stickerpack.js";

let draft = [];
const canvas = document.getElementById("canvas");

initSketch(dummySketch);
syncDraftText();
syncDraftPosition();

function initSketch() {
  const savedData = JSON.parse(localStorage.getItem("sketch"));
  savedData.forEach((sticker) => {
    let stickerElement = generateStickerElement(sticker);
    canvas.appendChild(stickerElement);
    draft.push(sticker);
  });

  const saveBtn = document.getElementById("save");
  const loadBtn = document.getElementById("load");

  saveBtn.addEventListener("click", (e) => {
    localStorage.setItem("sketch", JSON.stringify(draft));
    console.log(draft);
  });
  loadBtn.addEventListener("click", (e) => {
    draft = dummySketch;
    console.log(draft);
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
  let draggedElementId;
  let offsetX;
  let offsetY;

  document.addEventListener("dragstart", (e) => {
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

    draft[draggedElementId].left = `${e.clientX - offsetX}px`;
    draft[draggedElementId].top = `${e.clientY - offsetY}px`;
    console.log(draft[draggedElementId]);

    if (document.getElementById()) canvas.innerHTML = "";
    draft.forEach((sticker) => {
      let stickerElement = generateStickerElement(sticker);
      canvas.appendChild(stickerElement);
    });
  });
}
