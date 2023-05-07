const ListNode = require('./common/ListNode')


const removeNthNodeFromEnd = (head, n) => {
  const length = countLength(head)
  const index = length - n // 2 - 2 =0
  const nodeBefore = traverseToIndex(head, index - 1)
  if (nodeBefore) {
    const removeNode = nodeBefore.next
    nodeBefore.next = removeNode.next
  }
  else {
    return head.next
  }
  return head

}

const countLength = (head) => {
  console.log(head)
  let currentNode = head
  let count = 0
  while (currentNode != null) {
    count++
    currentNode = currentNode.next
  }
  return count
}

const traverseToIndex = (head, index) => {
  let currentNode = head
  let count = 0
  while (currentNode != null) {
    if (count === index) {
      return currentNode
    }
    count++
    currentNode = currentNode.next
  }
}

printList = (head) => {
  const array = []
  let currentNode = head
  while (currentNode !== null) {
    array.push(currentNode.val)
    currentNode = currentNode.next
  }
  return array
}

// const l2 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
// 1 2 3 4 5


const l2 = new ListNode(1, new ListNode(2));

const head = removeNthNodeFromEnd(l2, 2)
console.log(printList(head))