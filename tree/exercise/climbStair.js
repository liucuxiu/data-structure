function Node(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const climbStairs = function(n) {
  if (n === 1) return 1

  const root = new Node(0)
  let result = {}
  function travel(node) {
    if (result[node.val]) {
      return result[node.val]
    }
    if (node.val === n) {
      return 1
    }
    if (node.val < n) {
      if (node.val + 1 <= n) node.left = new Node(node.val + 1)
      if (node.val + 2 <= n) node.right = new Node(node.val + 2)
    }
    let left, right = 0
    if (node.left) {
      left = travel(node.left)
    }
    if (node.right) {
      right = travel(node.right)
    }
    result[node.val] = left + right
    return result[node.val]
  }

  travel(root)
  return result[0]
}

const n = 45
console.log(climbStairs(n))