
// https://leetcode.com/problems/diameter-of-binary-tree/description/

var diameterOfBinaryTree = function (root) {
  let count = 0;

  const getPathLength = (tree) => {
    if (!tree) {
      return 0;
    }

    const l = getPathLength(tree.left);
    const r = getPathLength(tree.right);
    count = Math.max(count, l + r);
    return Math.max(l, r) + 1;
  };

  const r = getPathLength(root.left) + getPathLength(root.right);

  return Math.max(count, r);
};
