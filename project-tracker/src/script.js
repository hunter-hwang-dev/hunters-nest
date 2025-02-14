class TreeNode {
  //Tree 안에 들어갈 Node들이 어떤 형식일지를 만들어 두기.
  constructor(key, value = key, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.children = [];
  }

  get isLeaf() {
    // 가장 마지막 끝 단인지?
    return this.children.length === 0;
  }

  get hasChildren() {
    // 하나라도 이어져 있으면 나오겠죠
    return !this.isLeaf;
  }
}

class Tree {
  constructor(key, value = key) {
    this.root = new TreeNode(key, value); //이러면 Object 안에 순서 없이 중복 없이 TreeNode들이 쌓일 것임.
  }

  *preOrderTraversal(node = this.root) {
    yield node;
    if (node.children.length) {
      for (let child of node.children) {
        yield* this.preOrderTraversal(child);
      }
    }
  }

  *postOrderTraversal(node = this.root) {
    if (node.children.length) {
      for (let child of node.children) {
        yield* this.postOrderTraversal(child);
      }
    }
    yield node;
  }

  insert(parentNodeKey, key, value = key) {
    for (let node of this.preOrderTraversal()) {
      if (node.key === parentNodeKey) {
        node.children.push(new TreeNode(key, value, node));
        return true;
      }
    }
    return false;
  }

  remove(key) {
    for (let node of this.preOrderTraversal()) {
      const filtered = node.children.filter((c) => c.key !== key);
      if (filtered.length !== node.children.length) {
        node.children = filtered;
        return true;
      }
    }
    return false;
  }

  find(key) {
    for (let node of this.preOrderTraversal()) {
      if (node.key === key) return node;
    }
    return undefined;
  }
}

// import { Tree } from "./tree";

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

console.log([...tree.preOrderTraversal()].map((x) => x.value));
