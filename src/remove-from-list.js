const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */


//* first desition

// function removeKFromList(l, k) {
//   l = f(l, k);

//   function f(l, k) {
//     if (!l) return l;

//     if (l.value === k) {
//       return f(l.next, k);
//     } else {
//       l.next = f(l.next, k);
//     }

//     return l
//   }

//   return l
// }


//* second desition

function removeKFromList(l, k) {
  let active = l;
  let pre = null;
  let result = null;

  while (active) {
    if (active.value === k) {
      if (pre) pre.next = active.next
      active = active.next
    } else {
      if (!result) result = active;
      pre = active;
      active = active.next
    }
  }

  return result
}


module.exports = {
  removeKFromList
};
