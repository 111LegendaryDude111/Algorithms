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

function hasEqualTrees(root, map = new Map(), isEqualTree = false) {
  if (!root) {
    return;
  }

  if (isEqualTree) {
    return;
  }

  if (map.has(root.val)) {
    const l = map.get(root.val).sort().filter(Boolean);
    const r = [root.val, root?.left?.val, root?.right?.val]
      .sort()
      .filter(Boolean);

    const e = isEqual(l, r);

    if (e) {
      console.log("equal", l, r);
      isEqualTree = true;
      return true;
    }
  }
  map.set(root.val, [root.val, root?.left?.val, root?.right?.val]);

  hasEqualTrees(root.left, map, isEqualTree);
  /*
    Map(3) {
        'F' => [ 'F', 'D', 'H' ],
        'D' => [ 'D', 'H', 'G' ],
        'H' => [ 'H', undefined, undefined ]
        }
  */
  hasEqualTrees(root.right, map, isEqualTree);
  /*
       Map(4) {
        'F' => [ 'F', 'D', 'H' ],
        'H' => [ 'H', 'D', 'G' ],
        'G' => [ 'G', undefined, 'D' ],
        'D' => [ 'D', undefined, undefined ]
} 
*/

  return map;
}

console.log(hasEqualTrees(root));
