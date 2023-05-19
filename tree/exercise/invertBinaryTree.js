function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

const invertBinaryTree = (root) => {
  if (!root) {
    return root
  }
  const queue = []
  queue.push(root)

  while (queue.length > 0) {
    const node = queue.shift()
    let left = node.left
    node.left = node.right
    node.right = left

    if (node.left) {
      queue.push(node.left)
    }
    if (node.right) {
      queue.push(node.right)
    }
  }
  return root
}


const root = new TreeNode(4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(7, new TreeNode(6), new TreeNode(9)))

console.log(invertBinaryTree(root))