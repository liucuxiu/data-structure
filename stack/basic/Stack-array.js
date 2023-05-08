class Stack {
  constructor() {
    this.array = []
  }

  pop() {
    this.array.pop()
    return this
  }

  push(value) {
    this.array.push(value)
    return this
  }

  peek() {
    return this.array[this.array.length - 1]
  }
}

const myStack = new Stack()
myStack.push('google')
myStack.push('udemy')
myStack.push('discord')
myStack.pop('discord')

console.log(myStack)
