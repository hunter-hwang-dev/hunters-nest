class TreeNode {
  val: any;
  left: TreeNode;
  right: TreeNode;
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class binarySearchTree {
  root: TreeNode;
  constructor() {
    this.root = null;
  }
}

let tree = new binarySearchTree();

// 참고: https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/
