import { Tree } from "./tree.js";

const folders = document.getElementsByClassName("folder");
const folderIcon = document.createElement("img");
folderIcon.src = "assets/icons/folder-closed.svg";
folderIcon.style.width = "18px";
folderIcon.style.height = "18px";

for (const folder of folders) {
  //참고: getElementsByClassName은 HTMLCollection을 반환하기 때문에, forEach 메서드를 직접 사용할 수 없음. Array-like가 아니라 찐 Array여야.
  folder.prepend(folderIcon.cloneNode()); // cloneNode()로 각 폴더에 독립적인 이미지 생성
} //단, 이렇게 코드를 짜면 갱신할 때마다 깜빡거림. prepend로 끼워넣는데 시간 걸려서. 즉, 초기 세팅은 정적으로 stylesheet에서 처리해야 함.

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("folder")) {
    const subtree = event.target.nextElementSibling;
    if (subtree && subtree.classList.contains("sub-tree")) {
      subtree.classList.toggle("display-none");
    }
  }
});

//folder 클래스 맨 앞에 들어간 child 찾기

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
