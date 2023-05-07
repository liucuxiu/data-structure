const mergeNodes = function(head) {
  let currentNode = head.next

  let meetZero = true
  while (currentNode != null) {
    let sum = 0
    const firstNode = currentNode
    while (meetZero) {
      sum = sum + currentNode.val
      if (currentNode.val === 0) {
        meetZero = false
        firstNode.val = sum
      }
      currentNode = currentNode.next
    }
    firstNode.next = currentNode
    meetZero = true
  }

  return head.next
};