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

export function stickerContainerHTML(id, src) {
  return `<div
  id="${id}"
  class="sticker-container"
  draggable="true"
  ondragstart="drag(event)"
>
  <div class="sticker" draggable="false">
    <div class="sticker-memo" draggable="false" contenteditable="true">
      입력한 값이 들어가면 좋음
    </div>
    <img
      class="sticker-image"
      style="position: absolute"
      src="${src}"
      draggable="false"
    />
  </div>
</div>;`;
}
