const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.head = null
  }

  getUnderlyingList() {
    return this.head
  }

  enqueue(value) {
    // this.head = f(this.head, value);

    // function f(node, value) {
    //   if (!node) {
    //     return new ListNode(value);
    //   } else {
    //     node.next = f(node.next, value)
    //   }
    //   return node
    // }

    if (this.head === null) return this.head = new ListNode(value);

    let current = this.head

    while(current.next) {
      current = current.next
    }

    current.next = new ListNode(value);
  }

  dequeue() {
    let x = this.head;
    this.head = this.head.next
    return x.value
  }
}

module.exports = {
  Queue
};
