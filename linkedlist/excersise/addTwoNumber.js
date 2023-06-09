const ListNode = require('./common/ListNode')

const addTwoNumber = function (l1, l2) {
  const dummyHead = new ListNode(0);
  let currentNode = dummyHead;
  let carry = 0;
  while (l1 !== null || l2 !== null) {
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;

    let sum = val1 + val2 + carry;
    let num = sum < 10 ? sum : sum % 10;
    carry = sum < 10 ? 0 : 1;

    currentNode.next = new ListNode(num);

    currentNode = currentNode.next;

    if (l1 !== null) {
      l1 = l1.next;
    }

    if (l2 !== null) {
      l2 = l2.next;
    }
  }
  if (carry) {
    currentNode.next = new ListNode(carry)
  }

  return dummyHead.next;
};


const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

console.log(addTwoNumber(l1, l2));