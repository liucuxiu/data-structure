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
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    }
    else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          //left
          if (currentNode.left == null) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        }
        else {
          //right
          if (currentNode.right == null) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(value) {
    if (this.root === null) {
      return undefined;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value === currentNode.value) {
        return currentNode;
      }
      if (value < currentNode.value) {
        //left
        currentNode = currentNode.left;
      }
      else {
        //right
        currentNode = currentNode.right;
      }
    }
  }

  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      }
      else if (value > currentNode.value) {
        currentNode = currentNode.right;
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

  breadthFirstSearch() {
    let currentNode = this.root;
    let list = [];
    let queue = [];
    queue.push(currentNode);

    while (queue.length > 0) {
      currentNode = queue.shift(); //get the first element of array
      list.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return list;
  }

  breadthFirstSearchR(queue, list) {
    if (queue.length === 0) {
      return list;
    }
    let currentNode = queue.shift();
    list.push(currentNode.value);
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
    return this.breadthFirstSearchR(queue, list);
  }

  DFSInOrder(queue, list) {
    return traverseInOrder(queue, list);
  }

  DFSPostOrder(queue, list) {
    return traversePostOrder(queue, list);
  }

  DFSPreOrder(queue, list) {
    return traversePreOrder(queue, list);
  }
}
/**     9
    4      20
  1   6  15  170
 * */

// 1 4 6 9 15 20 170
function traverseInOrder(node, list) {
  if (node.left) {
    traverseInOrder(node.left, list)
  }
  list.push(node.value)
  if (node.right) {
    traverseInOrder(node.right, list)
  }
  return list
}

// 1 6 4 15 170 20 9
function traversePostOrder(node, list) {
  if (node.left) {
    traversePostOrder(node.left, list)
  }
  if (node.right) {
    traversePostOrder(node.right, list)
  }
  list.push(node.value)

  return list
}

// 9 4 1 6 20 15 170
function traversePreOrder(node, list) {
  list.push(node.value)
  if (node.left) {
    traversePreOrder(node.left, list)
  }
  if (node.right) {
    traversePreOrder(node.right, list)
  }
  return list
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

// console.log(JSON.stringify(traverse(tree.root)))
// console.log(tree.lookup(4))
// console.log(tree.breadthFirstSearch())
// console.log(tree.breadthFirstSearchR([tree.root], []))
function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);

  tree.right = node.right === null ? null : traverse(node.right);

  return tree;
}

//console.log('inOrder', tree.DFSInOrder(tree.root, []));
//console.log('postOrder', tree.DFSPostOrder(tree.root, []))
console.log('preOrder', tree.DFSPreOrder(tree.root, []));