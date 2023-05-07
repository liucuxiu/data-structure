const ListNode = require('../excersise/common/ListNode');
const removeElements = require('../excersise/removeElements');

describe('203. Remove Linked List Elements', () => {
  it('[1,2,6,3,4,5,6] val = 6 ', function () {
    const head = new ListNode(1,
      new ListNode(2,
        new ListNode(6,
          new ListNode(3,
            new ListNode(4,
              new ListNode(5,
                new ListNode(6)))))));
    const val = 6;

    const expectResult = new ListNode(1,
      new ListNode(2,
        new ListNode(3,
          new ListNode(4,
            new ListNode(5)))));

    const result = removeElements(head, val);

    expect(result).toEqual(expectResult);
  });

  it('[7,7,7] val = 7 ', function () {
    const head = new ListNode(7, new ListNode(7, new ListNode(7)));
    const val = 7;

    const expectResult = null;

    const result = removeElements(head, val);

    expect(result).toEqual(expectResult);
  });
});