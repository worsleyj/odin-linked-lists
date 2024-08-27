import "./reset.css";
import "./styles.css";
import { Node } from "./node";
import { LinkedList } from "./linkedList";

const nodeOne = new Node();
console.log(nodeOne);
nodeOne.nextNode = nodeOne;
console.log(nodeOne);

// const listOne = new LinkedList();
// listOne.append("e");
// listOne.append("f");
// listOne.append("g");
// console.log(listOne);
// console.log(listOne.size());
// // console.log(listOne.contains("f"));
// // console.log(listOne.find("f"));
// console.log(listOne.toString());

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.toString());
