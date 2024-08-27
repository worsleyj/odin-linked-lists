import "./reset.css";
import "./styles.css";
import { Node } from "./node";

const nodeOne = new Node();
console.log(nodeOne);
nodeOne.nextNode = nodeOne;
console.log(nodeOne);

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  append(value) {
    const newNode = new Node();
    newNode.value = value;
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
  }
  prepend(value) {
    const newNode = new Node();
    newNode.value = value;
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
    }
  }
  at(index) {
    let currNode = this.head;
    while (index > 0) {
      currNode = currNode.nextNode;
      index--;
    }
    return currNode;
  }
  size() {
    if (this.head === null) return 0;
    let currNode = this.head;
    let size = 1;
    while (currNode.nextNode != null) {
      size++;
      currNode = currNode.nextNode;
    }
    return size;
  }
}

const listOne = new LinkedList();
listOne.prepend("e");
listOne.prepend("f");
listOne.prepend("g");
console.log(listOne);
console.log(listOne.size());
console.log(listOne.at(0));
