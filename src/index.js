import "./reset.css";
import "./styles.css";
import { Node } from "./node";

const nodeOne = new Node();
console.log(nodeOne);
nodeOne.nextNode = nodeOne;
console.log(nodeOne);
