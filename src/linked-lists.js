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

  const logLinkedList = () => headNode;

  return {
    append,
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
list.append("snake");
list.append("turtle");
console.log(list.logLinkedList());
