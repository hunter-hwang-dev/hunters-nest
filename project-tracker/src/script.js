import { EMBED_CLOSED, EMBED_OPEN } from "./config/assetPaths.js";

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
