class TreeNode {
  data: any;
  left: TreeNode;
  right: TreeNode;
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class binarySearchTree {
  root: TreeNode;
  constructor() {
    this.root = null;
  }

  insert(data) {}
}

let tree = new binarySearchTree();

// 참고: https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/
