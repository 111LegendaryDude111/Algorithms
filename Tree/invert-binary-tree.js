/*
     function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
*/

let test = {
  val: 4,
  left: {
    val: 2,
    left: { val: 1 },
    right: { val: 3 },
  },
  right: {
    val: 7,
    left: {
      val: 6,
    },
    right: {
      val: 9,
    },
  },
};

// https://leetcode.com/problems/invert-binary-tree/description/
function invertTree(tree, result = {}) {
  if (!tree) {
    return null;
  }

  result.val = tree.val;
  result.left = invertTree(tree.right) 
  result.right = invertTree(tree.left) 

  return result
}

const inverted = invertTree(test);

console.log(inverted);
