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
    console.log(this.tail);
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
listOne.append("e");
listOne.append("f");
listOne.append("g");
console.log(listOne);
console.log(listOne.size());
