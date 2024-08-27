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
    if (index > this.size()) return null;
    let currNode = this.head;
    while (index > 0) {
      currNode = currNode.nextNode;
      index--;
    }
    return currNode;
  }
  pop() {
    const newTail = this.at(this.size() - 2);
    const oldTail = newTail.nextNode;
    this.tail = newTail;
    newTail.nextNode = null;
    return oldTail;
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
  contains(value) {
    let currNode = this.head;
    let index = this.size();
    while (index > 0) {
      if (currNode.value === value) {
        return true;
      }
      currNode = currNode.nextNode;
      index--;
    }
    return false;
  }
}

const listOne = new LinkedList();
listOne.append("e");
listOne.append("f");
listOne.append("g");
console.log(listOne);
console.log(listOne.size());
console.log(listOne.contains("e"));
