class Queue {
  constructor() {
    this.firstStack = []
    this.secondStack = []
  }

  pop() {
    this.prepare()
    return this.secondStack.pop()
  }

  peek() {
    this.prepare()
    return this.secondStack[this.secondStack.length - 1]

  }

  push(value) {
    this.firstStack.push(value)
  }

  prepare() {
    if (this.secondStack.length === 0) {
      while (this.firstStack.length) {
        this.secondStack.push(this.firstStack.pop())
      }
    }
  }
}


const queue = new Queue()
queue.push(1)
queue.push(2)
queue.push(3)

queue.pop()
console.log(queue)