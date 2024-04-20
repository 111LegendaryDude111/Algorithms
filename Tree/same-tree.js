// https://leetcode.com/problems/same-tree/description/
const test1 = {
  val: 1,
  left: {
    val: 2,
  },
  right: {
    val: 3,
  },
};

const test2 = {
  val: 1,
  left: {
    val: 2,
  },
  right: {
    val: 3,
  },
};

const test3 = {
  val: 10,
  left: {
    val: 5,
  },
  right: {
    val: 15,
  },
};

const test4 = {
  val: 10,
  left: {
    val: 5,
    left: null,
    right: {
      val: 15,
    },
  },
  right: {
    val: null,
  },
};

function isSameTree(firstTree, secondTree) {
  if (!firstTree && !secondTree) {
    return true;
  }

  if (!firstTree || !secondTree) {
    return false;
  }

  if (firstTree.val !== secondTree.val) {
    return false;
  }

  return (
    isSameTree(firstTree.left, secondTree.left) &&
    isSameTree(firstTree.right, secondTree.right)
  );
}

console.log(isSameTree(test1, test2));
console.log(isSameTree(test3, test4));
