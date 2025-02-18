//n-ary tree: 첫째를 대장으로 내세우면 이진 트리로 표현 가능!

class TreeNode {
  constructor(data) {
    this.data = data;
    this.parent = null;
    this.child = [];
  }
}

function Tree(data = "ROOT") {
  var node = new TreeNode(data);
  this.root = node;
}

var tree = new Tree();
console.log(tree);

// 참고:
// https://www.geeksforgeeks.org/generic-treesn-array-trees/
// https://medium.com/@khushboo.taneja_61450/implementing-binary-search-tree-and-n-ary-tree-in-javascript-ba3e2081d345
