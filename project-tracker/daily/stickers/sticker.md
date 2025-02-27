    <!-- <div
      id="0"
      class="sticker-container"
      draggable="true"
      ondragstart="drag(event)"
    >
      <div class="sticker" draggable="false">
        <div class="sticker-memo" draggable="false" contenteditable="true">
          여기에 입력
        </div>
        <img class="sticker-img" src="svg/sticker00.svg" draggable="false" />
      </div>
    </div>

    <div
      id="1"
      class="sticker-container"
      draggable="true"
      ondragstart="drag(event)"
    >
      <div class="sticker" draggable="false">
        <div class="sticker-memo" draggable="false" contenteditable="true">
          여기에 입력
        </div>
        <img
          class="sticker-image"
          style="position: absolute"
          src="svg/sticker01.svg"
          draggable="false"
        />
      </div>
    </div>

    <div
      id="2"
      class="sticker-container"
      draggable="true"
      ondragstart="drag(event)"
    >
      <div class="sticker" draggable="false">
        <div class="sticker-memo" draggable="false" contenteditable="true">
          여기에 입력
        </div>
        <img
          class="sticker-image"
          style="position: absolute"
          src="svg/sticker02.svg"
          draggable="false"
        />
      </div>
    </div> -->

 <!-- <div id="hover" class="hover">
      <img
        id="stickerpack-blue-00"
        class="sticker-sample"
        src="svg/sticker00.svg"
        draggable="true"
        ondragstart="stickerpackDrag(event)"
      />
      <img
        id="stickerpack-blue-01"
        class="sticker-sample"
        src="svg/sticker01.svg"
        draggable="true"
        ondragstart="stickerpackDrag(event)"
      />
      <img
        id="stickerpack-blue-02"
        class="sticker-sample"
        src="svg/sticker02.svg"
        draggable="true"
        ondragstart="stickerpackDrag(event)"
      />
    </div> -->

    let stickers = [

{
id: 0,
text: "여기에 입력",
stickerpack: stickerpack[0],
left: "237px",
top: "892.5px",
}, //좌표, 이미지 경로 또는 이미지 일련번호 같은 값이 들어가야 됨
{
id: 1,
text: "여기에 입력",
stickerpack: stickerpack[1],
left: "237px",
top: "892.5px",
},
{
id: 2,
text: "여기에 입력",
stickerpack: stickerpack[2],
left: "237px",
top: "892.5px",
},
]; //기존에 있던 스티커들 id

// const xy = document.getElementById("xy");
// xy.addEventListener("click", (e) => {
// const computedStyle = window.getComputedStyle(id0);
// console.log(computedStyle.left, computedStyle.top);
// });
