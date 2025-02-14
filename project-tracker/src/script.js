import { Tree } from "./tree";

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("folder")) {
    const subtree = event.target.nextElementSibling;
    if (subtree && subtree.classList.contains("sub-tree")) {
      subtree.classList.toggle("display-none");
    }
  }
});
