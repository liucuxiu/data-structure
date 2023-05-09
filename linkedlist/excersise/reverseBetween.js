const ListNode = require('./common/ListNode');
const reverseBetween = function (head, left, right) {
  let currentNode = head;
  let count = 1;
  let beforeLeftNode = head;
  let leftNode = null;
  let rightNode = null;

  console.log(left, right);
  if (left === right) {
    return head;
  }
  while (currentNode) {
    if (left - 1 === count) {
      beforeLeftNode = currentNode;
    }
    if (left === count) {
      leftNode = currentNode;
    }
    if (right === count) {
      rightNode = currentNode;
    }
    count++;
    currentNode = currentNode.next;
  }
  const afterRight = rightNode.next;
  rightNode.next = null;

  console.log(leftNode);  // 1
  console.log(rightNode);  // 2
  console.log(beforeLeftNode); // 1
  console.log(afterRight); // 3

  const newhead = reverse(leftNode);
  console.log('new', newhead);  // [2 , 1]    3
                               //  [1, 2]    3
  if (beforeLeftNode !== leftNode) {
    console.log('a');
    beforeLeftNode.next = newhead;
    leftNode.next = afterRight;
  }
  else {
    beforeLeftNode.next = afterRight;
    head = newhead;
  }
  console.log('return', head);
  return head;

};

function reverse(head) {
  if (!head.next) {
    return head;
  }
  let first = head;
  let second = first.next;
  while (second) {
    const temp = second.next;
    second.next = first;
    first = second;
    second = temp;
  }
  head.next = null;
  head = first;
  return head;

}

const l2 = new ListNode(1, new ListNode(2, new ListNode(3)));
// const l2 = new ListNode(3, new ListNode(5));

reverseBetween(l2, 1, 2);