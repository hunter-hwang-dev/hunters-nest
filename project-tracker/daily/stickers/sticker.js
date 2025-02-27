import { dummySketch } from "./dummy.js"; //vanilla js에서 확장자명 주의!
import { appendStickerOnBody } from "./stickerpack.js";

let draft = [];

initSketch(dummySketch);
syncDraftText();
syncDraftPosition();

function initSketch() {
  const saveBtn = document.getElementById("save");
  const savedData = JSON.parse(localStorage.getItem("sketch"));
  savedData.forEach((sticker) => {
    appendStickerOnBody(sticker);
    draft.push(sticker);
  });
  saveBtn.addEventListener("click", (e) => {
    localStorage.setItem("sketch", JSON.stringify(draft));
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
  document.addEventListener("dragstart", (e) => {
    console.log(e.target.id);
  });

  document.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  document.addEventListener("drop", (e) => {
    e.preventDefault();
    let mouseX = e.clientX;
    let mouseY = e.clientY;

    console.log("dropped at:", mouseX, mouseY);
  });
}
