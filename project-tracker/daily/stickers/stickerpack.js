export const stickerpack = [
  "stickerpack-blue-00",
  "stickerpack-blue-01",
  "stickerpack-blue-02",
];

export const svg = [
  "svg/sticker00.svg",
  "svg/sticker01.svg",
  "svg/sticker02.svg",
];

export function generateStickerElement(sticker) {
  const canvas = document.getElementById("canvas");
  const stickerElement = document.createElement("div");
  stickerElement.id = sticker.id;
  stickerElement.className = "sticker-container";
  stickerElement.draggable = true;

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

  return stickerElement;
}
