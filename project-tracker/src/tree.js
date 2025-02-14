//https://www.30secondsofcode.org/js/s/data-structures-tree/

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

export class Tree {
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

/*

The main operations of a tree data structure are:

insert: Inserts a node as a child of the given parent node
remove: Removes a node and its children from the tree
find: Retrieves a given node
preOrderTraversal: Traverses the tree by recursively traversing each node followed by its children
postOrderTraversal: Traverses the tree by recursively traversing each node's children followed by the node

tree 구조가 좋은 점이 서치가 빠르다는 건데, 자식/부모 쪽으로 쭉 훑어서 찾기 함수를 만들어 주는 거임.
js의 class 선언 안에서 constructor 뒤에 나오는 건 다 claas 내장 함수 선언인 것은 이미 많이 해보아 알고 있을 것이다.
그럼 요놈의 * 와 yield는 무엇이냐?
*/
