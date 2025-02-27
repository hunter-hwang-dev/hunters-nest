import { dummySketch } from "./dummy.js"; //vanilla js에서 확장자명 주의!

initSketch(dummySketch);

function initSketch(savedData) {
  savedData.forEach((sticker) => {
    console.log(sticker);
    appendSticker(sticker);
  });
}

function appendSticker(sticker) {
  const stickerElement = document.createElement("div");
  stickerElement.id = sticker.id;
  stickerElement.className = "sticker-container";
  stickerElement.draggable = true;
  stickerElement.ondragstart = drag;

  stickerElement.style.left = sticker.left;
  stickerElement.style.top = sticker.top;

  stickerElement.innerHTML = `
    <div class="sticker" draggable="false">
      <div class="sticker-memo" draggable="false" contenteditable="true">
        ${sticker.text}
      </div>
      <img
        class="sticker-image"
        style="position: absolute"
        src="${sticker.src}"
        draggable="false"
      />
    </div>
  `;

  document.body.appendChild(stickerElement);
}
