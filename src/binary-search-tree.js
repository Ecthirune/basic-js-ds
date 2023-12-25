const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;  
  }
}
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    let newNode = new Node(data);

    if (!this.rootNode) {
      this.rootNode = newNode;
    } else {
      this.insertNode(this.rootNode, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  has(data) {
    return this.searchNode(this.rootNode, data) !== null;
  }

  searchNode(node, data) {
    if (!node) {
      return null;
    }
    if (data < node.data) {
      return this.searchNode(node.left, data);
    } else if (data > node.data) {
      return this.searchNode(node.right, data);
    } else {
      return node;
    }
  }

  find(data) {
    let node = this.searchNode(this.rootNode, data);
    if (node) {
      return node;
    } else {
      return null;
    }
  }

  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
  }

  removeNode(node, data) {
    if (!node) {
      return null;
    }

    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (!node.left && !node.right) {
        node = null;
        return node;
      }

      if (!node.left) {
        node = node.right;
        return node;
      }

      if (!node.right) {
        node = node.left;
        return node;
      }

      let minNode = this.findMinNode(node.right);
      node.data = minNode.data;
      node.right = this.removeNode(node.right, minNode.data);
      return node;
    }
  }

  findMinNode(node) {
    if (!node.left) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  min() {
    if (!this.rootNode) {
      return null;
    }

    let currentNode = this.rootNode;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode.data;
  }

  max() {
    if (!this.rootNode) {
      return null;
    }

    let currentNode = this.rootNode;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }

    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
}; 