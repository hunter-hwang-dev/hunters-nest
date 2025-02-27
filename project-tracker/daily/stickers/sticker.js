import { dummySketch } from "./dummy.js"; //vanilla js에서 확장자명 주의!
import { stickerpack, svg, stickerContainerHTML } from "./stickerpack.js";

initSketch(dummySketch);

function initSketch(savedData) {
  savedData.forEach((sticker) => {
    console.log(sticker);

    var tempDiv = document.createElement("div");
    tempDiv.innerHTML = stickerContainerHTML(sticker.id);
    var stickerElement = tempDiv.firstElementChild;

    stickerElement.style.left = sticker.left;
    stickerElement.style.top = sticker.top;

    document.body.appendChild(stickerElement);
  });
}
