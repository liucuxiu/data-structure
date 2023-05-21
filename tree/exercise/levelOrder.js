function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

var levelOrder = function (root) {
  const queue = [];
  const list = [];
  if (!root) {
    return [];
  }
  queue.push(root);

  while (queue.length) {
    const length = queue.length;
    const listByLevel = [];
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      listByLevel.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    list.push(listByLevel);
  }

  return list;
};

const tree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3
    },
    right: {
      val: 5
    }
  },
  right: {
    val: 3,
    left: {
      val: 4,
      left: {
        val: 6
      }
    },
    right: {
      val: 5,
      left: {
        val: 7
      },
      right: {
        val: 8
      }
    }
  }
};
console.log(levelOrder(tree))