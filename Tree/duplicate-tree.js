class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/*
    На вход бинарное дерево, элементы которого заглавные латинские буквы. Нужно понять, существуют ли два эквивалентных узла. 
Узлы эквивалетны, если поддерево от одного узла равно поддереву второго. 
Равенство определяется наличием одинаковых символов на вершинах. Частоты не важны.Пример:
           F
      /         \
    !D            !H
  /    \         /    \ 
H       G      D       G
                         \
                           D
Здесь ответ: вершины, с воскл знаками. То есть поддерево от D равно поддереву от H. Две D в вправом поддерреве - тоже ответ


; [h,d,g ] == [d,g,h] Ё

*/
let root = new TreeNode("F");
root.left = new TreeNode("D");
root.right = new TreeNode("H");
root.left.left = new TreeNode("H");
root.left.right = new TreeNode("G");
root.right.left = new TreeNode("D");
root.right.right = new TreeNode("G");
root.right.right.right = new TreeNode("D");

function isEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let index = 0; index < arr1.length; index++) {
    const element1 = arr1[index];
    const element2 = arr2[index];
    if (element1 !== element2) {
      return false;
    }
  }

  return true;
}

function hasEqualTrees(root, map = new Map()) {
  if (!root) {
    return;
  }

  const key = [root.val, root?.left?.val, root?.right?.val]
    .filter(Boolean)
    .sort()
    .toString();

  if (map.has(key)) {
    return true;
  }

  map.set(key, root);

  let bool = hasEqualTrees(root.left, map);

  if (bool) {
    return true;
  }

  let bool2 = hasEqualTrees(root.right, map);
  if (bool2) {
    return true;
  }

  return;
}

console.log(hasEqualTrees(root));
