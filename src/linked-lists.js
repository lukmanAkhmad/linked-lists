function LinkedList() {
  let headNode = null;

  const append = (value) => {
    if (headNode === null) {
      headNode = createNode(value);
    } else {
      let tempNode = headNode;
      while (tempNode.nextNode !== null) {
        tempNode = tempNode.nextNode;
      }
      tempNode.nextNode = createNode(value);
    }
  };

  const prepend = (value) => (headNode = createNode(value, headNode));

  const size = () => {
    let count = 0;
    let tempNode = headNode;
    while (tempNode !== null) {
      count++;
      tempNode = tempNode.nextNode;
    }
    return count;
  };

  const head = () => {
    if (headNode === null) return null;

    return headNode.value;
  };

  const tail = () => {
    if (headNode === null) return null;

    let tempNode = headNode;
    while (tempNode.nextNode !== null) {
      tempNode = tempNode.nextNode;
    }
    return tempNode.value;
  };

  const at = (index) => {
    if (headNode === null) return null;

    const sizeLinkedList = size();
    const sizeLinkedListMinusOne = sizeLinkedList - 1;
    let tempNode = headNode;

    if (index < 0 || index > sizeLinkedListMinusOne) {
      return "Index start at 0, and the index must be within the bounds of the linked list size.";
    }

    for (let i = 0; i < index; i++) {
      tempNode = tempNode.nextNode;
    }
    return tempNode.value;
  };

  const pop = () => {
    if (headNode === null) return "Cannot delete, linked list is empty";

    let cur = headNode;
    let prev = null;

    while (cur.nextNode !== null) {
      prev = cur;
      cur = cur.nextNode;
    }

    if (prev === null) {
      return (headNode = null), cur.value;
    }
    prev.nextNode = null;
    return cur.value;
  };

  const contains = (value) => {
    if (headNode === null) return "Linked list is empty";

    let tempNode = headNode;

    while (tempNode !== null) {
      if (tempNode.value === value) return true;
      tempNode = tempNode.nextNode;
    }

    if (tempNode === null) return false;
  };

  const find = (value) => {
    if (headNode === null) return "Linked list is empty";

    let tempNode = headNode;
    let indxNode = 0;

    while (tempNode !== null) {
      indxNode++;
      if (tempNode.value === value) return indxNode;
      tempNode = tempNode.nextNode;
    }

    if (tempNode === null) return null;
  };

  const toString = () => {
    let tempNode = headNode;
    let str = "";
    while (tempNode !== null) {
      str += `( ${tempNode.value} ) -> `;
      tempNode = tempNode.nextNode;
    }
    str += tempNode;
    return str;
  };

  const insertAt = (val, index) => {
    if (headNode === null) return null;

    const valAtIndex = at(index);
    const sizeLinkedList = size();
    const sizeLinkedListMinusOne = sizeLinkedList - 1;
    let cur = headNode;
    let prev = null;

    if (index < 0 || index > sizeLinkedListMinusOne) {
      return console.log(
        "Index start at 0, " +
          "and the index must be within " +
          "the bounds of the linked list size.",
      );
    }

    if (cur.value === valAtIndex) {
      prepend(val);
      return;
    }

    while (cur !== null && cur.value !== valAtIndex) {
      prev = cur;
      cur = cur.nextNode;
    }

    if (cur !== null) {
      prev.nextNode = createNode(val, cur);
    }
  };

  const logLinkedList = () => headNode;

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    logLinkedList,
  };
}

function createNode(valueNode = null, valueNextNode = null) {
  let value = valueNode;
  let nextNode = valueNextNode;
  return {
    value,
    nextNode,
  };
}

const list = LinkedList();
const indx = 0;
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");

list.prepend("first");

list.append("snake");
list.append("turtle");
console.log(list.logLinkedList());
console.log(`size list: ${list.size()}`);
console.log(`first node: ${list.head()}`);
console.log(`last node: ${list.tail()}`);
console.log(`node at index ${indx}: ${list.at(indx)}`);
console.log(`pop: ${list.pop()}`);
console.log(`last node: ${list.tail()}`);
console.log(`contains: ${list.contains("first")}`);
console.log(`find: ${list.find("first")}`);
list.insertAt("Book", 2);
console.log(`to string: ${list.toString()}`);
