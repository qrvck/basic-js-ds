const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');






class BinarySearchTree {

  constructor() {
    this.head = null;
  }

  root() {
    return this.head;
  }

  add(data) {
    this.head = add(this.head, data);

    function add(node, data) {
      if (!node) {
        return new Node(data)
      }

      if (node.data > data) {
        node.left = add(node.left, data)
      } else {
        node.right = add(node.right, data)
      }

      return node;
    }
  }

  has(data) {
    function has(node, data) {
      if (node === null) {
        return false
      }

      if (node.data === data) {
        return true
      }

      if (node.data > data) {
        return has(node.left, data)
      } else {
        return has(node.right, data)
      }
    }

    return has(this.head, data)
  }

  find(data) {
    function find(node, data) {
      if (node === null) {
        return node
      }

      if (node.data === data) {
        return node
      }

      if (node.data > data) {
        return find(node.left, data)
      } else {
        return find(node.right, data)
      }
    }

    return find(this.head, data)
  }

  remove(data) {

    function remove(node, data) {
      if (!node) {
        return null;
      }

      if (node.data > data) {
        node.left = remove(node.left, data)
      } else if (node.data < data) {
        node.right = remove(node.right, data)
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          return node.right
        } else if (!node.right) {
          return node.left
        } else {
          let minRight = node.right;

          while (minRight.left) {
            minRight = minRight.left;
          }

          node.data = minRight.data;
          node.right = remove(node.right, minRight.data)
        }
      }

      return node
    }

    this.head = remove(this.head, data)
  }

  min() {
    let node = this.head;
    let min;

    while (node) {
      min = node.data;
      node = node.left;
    }

    return min;
  }

  max() {
    let node = this.head;
    let max;

    while (node) {
      max = node.data;
      node = node.right;
    }

    return max;
  }
}

module.exports = {
  BinarySearchTree
};