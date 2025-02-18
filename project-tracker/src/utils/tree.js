//n-ary tree: 첫째를 대장으로 내세우면 이진 트리로 표현 가능!

let rootNode = { data: "ROOT", parent: null, child: [] };

function addNode(data = "New Folder", parent = rootNode, child = []) {
  let node = newNode(data, parent, child);
  parent.child.push(node);
  return node;
}

function newNode(data, parent, child) {
  return { data: data, parent: parent, child: child };
}

addNode("parent 1");
let parent2 = addNode("parent 2");
addNode("parent 3");

addNode("child 1", parent2);
let child2 = addNode("child 2", parent2);
addNode("child 3", parent2);

addNode("grandchild 1", child2);
let grandchild2 = addNode("grandchild 2", child2);
addNode("grandchild 3", child2);

addNode("grand-grandchild 1", grandchild2);
console.log(rootNode);
