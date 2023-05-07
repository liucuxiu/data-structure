const removeElements = function(head, val) {
  let currentNode = head

  while (currentNode != null) {
    if (head.val === val) {
      head = currentNode.next
    }
    else {
      if (currentNode.next == null) {
        return head
      }
      while (currentNode.next != null && currentNode.next.val === val) {
        currentNode.next = currentNode.next.next
      }
    }
    currentNode = currentNode.next

  }
  return head
};

module.exports =  removeElements