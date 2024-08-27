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
    }
    console.log(this.head);
  }
}

const listOne = new LinkedList();
listOne.append("e");
