class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.last
  }

  enqueue(value) {
    const newNode = new Node(value)
    if (this.length === 0) {
      this.first = newNode
      this.last = newNode
    }
    else {
      this.last.next = newNode
      this.last = newNode
    }
    this.length++

    return this
  }

  dequeue() {
    this.length--

    if (!this.first) {
      return null
    }
    if (this.first === this.last) {
      this.first = null
      this.last = null
    }
    else {
      this.first = this.first.next
      return this
    }
  }
}


const myQueue = new Queue()
myQueue.enqueue("1")
myQueue.enqueue("2")
myQueue.enqueue("3")
myQueue.dequeue("1")

myQueue.peek()

console.log(myQueue)