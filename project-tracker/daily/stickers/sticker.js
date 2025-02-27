import { dummySketch } from "./dummy.js"; //vanilla js에서 확장자명 주의!
import { appendStickerOnBody } from "./stickerpack.js";

const saveBtn = document.getElementById("save");
const loadBtn = document.getElementById("load");
const canvas = [];

initSketch(dummySketch);

function initSketch() {
  const savedData = JSON.parse(localStorage.getItem("sketch"));
  savedData.forEach((sticker) => {
    appendStickerOnBody(sticker);
    canvas.push(sticker);
  });
}

saveBtn.addEventListener("click", (e) => {
  localStorage.setItem("sketch", JSON.stringify(canvas));
});

loadBtn.addEventListener("click", (e) => {
  const savedData = JSON.parse(localStorage.getItem("sketch"));
  console.log(savedData);
});
