class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class DoubleLinkedList {
  constructor(value) {
    this.head = new Node(value)
    this.tail = this.head
    this.length = 1
  }

  append(value) {
    const newNode = new Node(value)
    this.tail.next = newNode
    newNode.prev = this.tail

    this.tail = newNode
    this.length++
    return this
  }

  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head
    this.head.prev = newNode

    this.head = newNode
    this.length++
    return this
  }

  insert(index, value) {
    if (index >= this.length - 1 ) {
      return this.append(value)
    }
    if (index < 0) {
      return this.prepend(value)
    }
    const nodeAtIndex = this.traverseToIndex(index)
    const newNode = new Node(value)
    const nextNode = nodeAtIndex.next

    newNode.next = nextNode
    newNode.prev = nodeAtIndex

    nodeAtIndex.next = newNode
    nextNode.prev = newNode

    this.length++
  }

  remove(index) {
    const nodeAtIndex = this.traverseToIndex(index)
    const prevNode = nodeAtIndex.prev
    const nextNode = nodeAtIndex.next

    prevNode.next = nextNode
    nextNode.prev = prevNode
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
const linkedList = new DoubleLinkedList(1)
linkedList.append(2)
linkedList.append(3)
linkedList.append(4)

linkedList.prepend(0)

linkedList.insert(3, "a")
linkedList.remove(3)

console.log(linkedList)
console.log(linkedList.printList())