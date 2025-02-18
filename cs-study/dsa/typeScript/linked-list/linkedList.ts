class ListNode {
  val: any;
  next: any;

  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  head: any;
  tail: any;
  length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newListNode = new ListNode(val);

    if (!this.head) {
      //처음 node 생성될 시 head가 없음
      this.head = newListNode;
      this.tail = this.head;
    } else {
      this.tail.next = newListNode;
      this.tail = newListNode;
    }
    this.length++;
    return this;
  }
}

let temp = new SinglyLinkedList();

temp.push(1);
console.log(temp);

temp.push("hello");
console.log(temp);

temp.push(true);
console.log(temp);

temp.push(1000);
console.log(temp);
