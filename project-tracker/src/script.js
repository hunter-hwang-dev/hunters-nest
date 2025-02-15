import { EMBED_CLOSED, EMBED_OPEN } from "./config/assetPaths.js";
// import generateTreeHTML from "./utils/treeHTMLgenerator.js";
import { Tree, TreeNode } from "./utils/tree.js";

function generateTreeHTML(node) {
  //이렇게 하면 안되고 1세대, 2세대, 3세대 순으로 그려야겠음.
  if (!node) return ""; // 노드가 없으면 빈 문자열 반환

  // 현재 노드가 최상위 ROOT 노드라면 내부 자식만 렌더링
  if (node.value === "ROOT") {
    return `<ul class="tree">${node.children
      .map(generateTreeHTML)
      .join("")}</ul>`;
  }

  // 자식 노드가 있다면 하위 <ul>을 추가하여 트리 구조 생성
  const childrenHTML =
    node.children.length > 0
      ? `<ul class="sub-tree">${node.children
          .map(generateTreeHTML)
          .join("")}</ul>`
      : "";

  return `
    <li>
      <div class="folder">${node.value}</div>
      ${childrenHTML}
    </li>
  `;
}

const tree = new Tree(1, "ROOT");

tree.insert(1, 11, "parent 1");
tree.insert(1, 12, "parent 2");
tree.insert(1, 13, "parent 3");

tree.insert(1, 111, "child 1");
tree.insert(1, 112, "child 2");
tree.insert(1, 121, "child 1");
tree.insert(1, 122, "child 2");
tree.insert(1, 123, "child 3");
tree.insert(1, 131, "child 1");

tree.insert(1, 1221, "grandchild 1");
tree.insert(1, 1222, "grandchild 2");
tree.insert(1, 1223, "grandchild 3");

tree.insert(1, 12221, "grand-grandchild 1");

console.log([...tree.preOrderTraversal()].map((x) => x.value));
console.log(tree.root);
const treeHTML = generateTreeHTML(tree.root); // 트리 데이터를 HTML로 변환
console.log(treeHTML);
document.getElementById("tree-container").innerHTML = treeHTML; // HTML 문서에 삽입

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
