const fileIcons = document.querySelectorAll(".file-icon");

fileIcons.forEach((fileIcon) => {
  fileIcon.addEventListener("click", () => {
    fileIcon.src = fileIcon.src.includes("folder-closed.svg")
      ? "assets/icons/folder-open.svg"
      : "assets/icons/folder-closed.svg";
  });
});
