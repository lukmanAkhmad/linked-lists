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

  const logLinkedList = () => headNode;

  return {
    append,
    prepend,
    size,
    head,
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
