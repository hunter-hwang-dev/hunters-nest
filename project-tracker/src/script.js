import { EMBED_CLOSED, EMBED_OPEN } from "./config/assetPaths.js";

//처음 상태는 모두 노란색(닫힘)이나, subtree 있는 folder만 파란색(닫힘)으로 아이콘 변경
const folders = document.querySelectorAll(".folder");
folders.forEach((folder) => {
  const subtree = folder.nextElementSibling;
  if (subtree && subtree.classList.contains("sub-tree")) {
    folder.style.setProperty("--icon", ` url(${EMBED_CLOSED})`);
  }
});

//클릭하면 변하는 것들
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("folder")) {
    const subtree = event.target.nextElementSibling;
    if (subtree && subtree.classList.contains("sub-tree")) {
      const currentIcon = getComputedStyle(event.target).getPropertyValue(
        "--icon"
      );

      //아이콘 토글
      if (currentIcon.includes(EMBED_CLOSED)) {
        event.target.style.setProperty("--icon", `url(${EMBED_OPEN})`);
      } else {
        event.target.style.setProperty("--icon", `url(${EMBED_CLOSED})`);
      }

      //sub-tree 토글
      subtree.classList.toggle("display-block");
    }
  }
});
