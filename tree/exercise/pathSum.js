function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

const hasPathSum = function (root, targetSum) {
  if (!root) {
    return false;
  }
  let output = false;

  function check(node, sum) {
    if (output) {
      return true;
    }
    sum = sum + node.val;
    if (node.left) {
      check(node.left, sum);
    }
    if (node.right) {
      check(node.right, sum);
    }
    if (node.left == null && node.right == null) {
      if (sum === targetSum) {
        output = true;
        return output;
      }
    }

  }

  check(root, 0);
  return output;
};


//init tree root
const root = new TreeNode(4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(7, new TreeNode(6), new TreeNode(9)))
console.log(hasPathSum(root, 9))