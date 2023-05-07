const ListNode = require('./common/ListNode')

function removeDuplicate(head) {
  let currentNode = head

  while (currentNode && currentNode.next) {
    if (currentNode.val === currentNode.next.val) {
      //remove
      currentNode.next = currentNode.next.next
      console.log(currentNode)
    }
    else {
      currentNode = currentNode.next
    }
  }

  return head
}
// 1  1  1
const l1 = new ListNode(1, new ListNode(1, new ListNode(1)));
console.log(removeDuplicate(l1))