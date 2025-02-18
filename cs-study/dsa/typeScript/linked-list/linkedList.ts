class ListNode {
  val: any;
  next: ListNode;

  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  head: ListNode;
  constructor(head = null) {
    this.head = head;
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  clear() {
    this.head = null;
  }

  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }

    return lastNode;
  }

  getFirst() {
    return this.head;
  }
}

let node1 = new ListNode(2);
let node2 = new ListNode(5);
node1.next = node2;
let list = new LinkedList(node1);

console.log(list);
console.log(list.head);
console.log(list.head.next);
console.log(list.head.next.val); //returns 5
console.log(list.size());

//https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/
