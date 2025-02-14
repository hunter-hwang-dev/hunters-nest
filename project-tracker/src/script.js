import { Tree } from "./tree";

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("folder")) {
    const subtree = event.target.nextElementSibling;
    if (subtree && subtree.classList.contains("sub-tree")) {
      subtree.classList.toggle("display-none");
    }
  }
});

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
