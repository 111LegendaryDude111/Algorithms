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
  let result = "";
  let level = 0;
  const stack = [{ element: tree, level }];
  while (stack.length > 0) {
    const { element, level } = stack.pop();
    result += addSpace(level ?? 0) + element.name + "\n";

    if (element.children) {
      for (let index = element.children.length - 1; index >= 0; index--) {
        const cur = element.children[index];
        stack.push({ element: cur, level: level + 1 });
      }
    }
  }

  console.log(result);
}

showFiles(data);

function addSpace(countSpaces) {
  let result = "";
  for (let index = 0; index < countSpaces; index++) {
    result += " ";
  }

  return result;
}
