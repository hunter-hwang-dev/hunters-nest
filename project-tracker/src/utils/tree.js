//n-ary tree: 첫째를 대장으로 내세우면 이진 트리로 표현 가능!

let rootNode = { data: "ROOT", parent: null, child: [] };

let node00 = {
  data: "parent 1",
  parent: rootNode,
  child: [],
};
rootNode.child.push(node00);

let node01 = {
  data: "parent 2",
  parent: rootNode,
  child: [],
};
rootNode.child.push(node01);

let node02 = {
  data: "parent 2",
  parent: rootNode,
  child: [],
};
rootNode.child.push(node02);

console.log(rootNode);
