const Node = require('./Node')

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value)
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode
    this.length++
    return this
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value)
    }
    if (index <= 0) {
      return this.prepend(value)
    }
    const nodeAtIndex = this.traverseToIndex(index)
    const newNode = new Node(value)
    newNode.next = nodeAtIndex.next
    nodeAtIndex.next = newNode

    this.length++
  }

  remove(index) {
    const nodeBefore = this.traverseToIndex(index - 1)
    const unwantedNode = nodeBefore.next
    nodeBefore.next = unwantedNode.next

    this.length--
  }

  traverseToIndex(index) {
    let currentNode = this.head
    let count = 0;
    while (currentNode !== null) {
      if (count === index) {
        return currentNode
      }
      count++
      currentNode = currentNode.next
    }
  }

  printList() {
    const array = []
    let currentNode = this.head
    while (currentNode !== null) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return array
  }
}

module.exports = LinkedList;