function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

var increaseOrder = function (root) {
  if (!root) {
    return null;
  }
  const result = new TreeNode();
  let currentP = result; // !!!

  function traverseInOrder(node) {
    if (node.left) {
      traverseInOrder(node.left);
    }

    currentP.right = new TreeNode(node.val);
    currentP = currentP.right;

    if (node.right) {
      traverseInOrder(node.right);
    }
  }

  traverseInOrder(root);

  return result.right;

};

const root = new TreeNode(5,
  new TreeNode(3, new TreeNode(2, new TreeNode(1)), new TreeNode(4)),
  new TreeNode(6, null, new TreeNode(8, new TreeNode(7), new TreeNode(9))))

console.log(increaseOrder(root))
