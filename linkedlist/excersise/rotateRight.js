function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

const countLength = (head) => {
  let currentNode = head
  let count = 0
  while (currentNode != null) {
    count++
    currentNode = currentNode.next
  }
  return count
}


const rotateRight = function(head, k) {
  let currentNode = head
  let currentHead = head
  let count = 0

  const length = countLength(head)

  if (length === 0) return head

  const num = k % length

  while (count < num) {
    count++
    while(currentNode != null) {
      if (currentNode.next != null && currentNode.next.next == null)  {
        currentNode.next.next = currentHead
        currentHead = currentNode.next
        currentNode.next = null
      }
      currentNode = currentNode.next
    }
    currentNode = currentHead
  }
  return currentNode
};

const l1 = new ListNode(0, new ListNode(1, new ListNode(2)));
console.log(rotateRight(l1, 4))

//
// const l1 = new ListNode(null);
// console.log(rotateRight(l1, 1))