//n-ary tree: 첫째를 대장으로 내세우면 이진 트리로 표현 가능!

let rootNode = { data: "ROOT", parent: null, child: [] };

function newNode(data = "New Folder", parent = rootNode, child = []) {
  parent.child.push({ data: data, parent: parent, child: child });
}

newNode("parent 1", rootNode);
newNode("parent 2", rootNode);
newNode("parent 3", rootNode);

console.log(rootNode);
