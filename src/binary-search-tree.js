const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {

  constructor() {
    this.rootTree = null;
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (!this.rootTree ) {
      return null;
    }
    return this.rootTree;
  }

  add(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    this.rootTree = addNew(this.rootTree, data);

    function addNew(currentNode, data) {
      if (!currentNode) {
        return new Node(data);
      }

      if (currentNode.data === data) {
        return currentNode;
      }

      if (data < currentNode.data) {
        currentNode.left = addNew(currentNode.left, data);
      } else {
        currentNode.right = addNew(currentNode.right, data);
      }
      return currentNode;
    }
  }

  findNode(currentNode, data){
    if (currentNode === null) {
      return null;
    }
    if (data === currentNode.data) {
      return currentNode;
    } else if (data < currentNode.data) {
      return this.findNode(currentNode.left, data);
    } else {
      return this.findNode(currentNode.right, data);
    }
  }

  has(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    return this.findNode(this.rootTree, data) !== null;
  }

  find(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    return this.findNode(this.rootTree, data);
  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    this.rootTree = removeItem(this.rootTree, data);

    function removeItem(currentNode, data) {
      if (!currentNode) {
        return null;  
      } 

      if (data < currentNode.data) {
        currentNode.left = removeItem(currentNode.left, data);
        return currentNode;
      } else if (currentNode.data < data) {
        currentNode.right = removeItem(currentNode.right, data);
        return currentNode;
      } else {
        if (!currentNode.left && !currentNode.right) {
          return null;
        }
        if (!currentNode.left) {
          currentNode = currentNode.right;
          return currentNode;
        }
        if (!currentNode.right) {
          currentNode = currentNode.left;
          return currentNode;
        }

        let rightMin = currentNode.right;
        while (rightMin.left) {
          rightMin = rightMin.left;
        }
        currentNode.data = rightMin.data;
        currentNode.right = removeItem(currentNode.right, rightMin.data);
        return currentNode;
      }
    }
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (!this.rootTree) {
      return;
    }

    let currentNode = this.rootTree;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (!this.rootTree) {
      return;
    }
    
    let currentNode = this.rootTree;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
};