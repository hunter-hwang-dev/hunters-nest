import { dummySketch } from "./dummy.js"; //vanilla js에서 확장자명 주의!
import { appendStickerOnBody } from "./stickerpack.js";

const saveBtn = document.getElementById("save");
let draft = [];

initSketch(dummySketch);

function initSketch() {
  const savedData = JSON.parse(localStorage.getItem("sketch"));
  savedData.forEach((sticker) => {
    appendStickerOnBody(sticker);
    draft.push(sticker);
  });
}

saveBtn.addEventListener("click", (e) => {
  localStorage.setItem("sketch", JSON.stringify(draft));
});

document.body.addEventListener("focusout", (e) => {
  if (e.target.classList.contains("sticker-memo")) {
    const id = e.target.parentElement.parentElement.id;
    const text = e.target.innerText;
    draft[id].text = text;
    console.log(draft);
  }
});
