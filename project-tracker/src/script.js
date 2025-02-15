import { EMBED_CLOSED, EMBED_OPEN } from "./paths.js";

// import { Tree } from "./tree.js";

const folders = document.querySelectorAll(".folder");
folders.forEach((folder) => {
  const subtree = folder.nextElementSibling;
  if (subtree && subtree.classList.contains("sub-tree")) {
    folder.style.setProperty("--icon", ` url(${EMBED_CLOSED})`);
    //subtree 있는 folder만 파란색(닫힘)으로 기본
  }
});

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

      subtree.classList.toggle("display-block"); //sub-tree 토글
    }
  }
});

//folder 클래스 맨 앞에 들어간 child 찾기

// const tree = new Tree(1, "ROOT");

// tree.insert(1, 11, "parent 1");
// tree.insert(1, 12, "parent 2");
// tree.insert(1, 13, "parent 3");

// tree.insert(1, 111, "child 1");
// tree.insert(1, 112, "child 2");
// tree.insert(1, 121, "child 1");
// tree.insert(1, 122, "child 2");
// tree.insert(1, 123, "child 3");
// tree.insert(1, 131, "child 1");

// tree.insert(1, 1221, "grandchild 1");
// tree.insert(1, 1222, "grandchild 2");
// tree.insert(1, 1223, "grandchild 3");

// tree.insert(1, 12221, "grand-grandchild 1");

// console.log([...tree.preOrderTraversal()].map((x) => x.value));
