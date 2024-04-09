/*

Нужно
вывести в консоль файлы и папки с отступами, чтобы показать вложенность.
Решение должно учитывать любую вложенность элементов (т.е. не должно содержать рекурсивные вызовы).

folder
--file1.txt
--file2.txt
--images
----image.png
------vacation
--------crocodile.png
--------penguin.png
--shopping-list.pdf


*/

const data = {
  name: "folder",
  children: [
    {
      name: "file1.txt",
    },
    {
      name: "file2.txt",
    },
    {
      name: "images",
      children: [
        {
          name: "image.png",
        },
        {
          name: "vacation",
          children: [
            {
              name: "crocodile.png",
            },
            {
              name: "penguin.png",
            },
          ],
        },
      ],
    },
    {
      name: "shopping-list.pdf",
    },
  ],
};

function showFiles(tree) {
  const map = new Map();
  let level = 0;
  map.set(tree.name, { level });
  let res = tree.name + "\n";
  level++;
  const stack = [tree.children];
  while (stack.length > 0) {
    const children = stack.pop();

    for (let index = 0; index < children.length; index++) {
      const element = children[index];
      if (element.children) {
        stack.push(element.children);
        /*...children.splice(index, children.length) ,*/

        res += addSpace(level) + element.name + "\n";
        // break;
      }

      res += addSpace(level) + element.name + "\n";
    }

    level++;
  }

  console.log(res);
}

showFiles(data);

function addSpace(countSpaces) {
  let result = "";
  for (let index = 0; index < countSpaces; index++) {
    result += " ";
  }

  return result;
}
