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

export function stickerContainerHTML(sticker) {
  return `<div
  id="${sticker.id}"
  class="sticker-container"
  draggable="true"
  ondragstart="drag(event)"
>
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
</div>;`;
}
