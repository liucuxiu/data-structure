class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value)

    if (this.root === null) {
      this.root = newNode
    }
    else {
      let currentNode = this.root
      while (true) {
        if (value < currentNode.value) {
          //left
          if (currentNode.left == null) {
            currentNode.left = newNode
            return this
          }
          currentNode = currentNode.left
        }
        else {
          //right
          if (currentNode.right == null) {
            currentNode.right = newNode
            return this
          }
          currentNode = currentNode.right
        }
      }
    }
  }

  lookup(value) {
    if (this.root === null) {
      return undefined
    }
    let currentNode = this.root
    while (currentNode) {
      if (value === currentNode.value) {
        return currentNode
      }
      if (value < currentNode.value) {
        //left
        currentNode = currentNode.left
      }
      else {
        //right
        currentNode = currentNode.right
      }
    }
  }

  remove(value) {
    if (!this.root) {
      return false
    }
    let currentNode = this.root
    let parentNode = null
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left
      }
      else if (value > currentNode.value) {
        currentNode = currentNode.right
      }
      else if (currentNode.value === value) {
        //find!
        if (currentNode.right === null) {

        }
        else if (currentNode.right.left === null) {

        }
        else {

        }

      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(JSON.stringify(traverse(tree.root)))

console.log(tree.lookup(4))

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left)

  tree.right = node.right === null ? null : traverse(node.right)

  return tree
}
