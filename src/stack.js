const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
 class Stack {

  constructor() {
    this.head = []
  }


  push(element) {
    this.head.push(element)
  }

  pop() {
    let pos = [this.head.length - 1]
    let last = this.head.splice(pos, 1)
    return last[0]
  }

  peek() {
    return this.head[this.head.length - 1]
  }
}


module.exports = {
  Stack
};
