const LinkedList = require('./LinkedList');

let myLinkedList = {
  head: {
    value: 10,
    next: {
      value: 5,
      next: {
        value: 16,
        next: null
      }
    }
  }
};

let linkedList = new LinkedList(10);
linkedList.append(5)
linkedList.append(16)
linkedList.prepend(1)
// 1 - 10 - 5 -16
linkedList.insert(2, 99)
console.log(linkedList.printList())

linkedList.remove(3)

console.log(linkedList.printList())
console.log(linkedList);