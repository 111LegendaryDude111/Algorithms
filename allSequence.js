// Нужно написать функцию `allSequences`, которая возвращает фукнцию,
// вызовы которой последовательно переберут все возможные комбинации элементов матрицы.
// Когда комбинации закончатся, нужно возвращать `undefined`.

/* function allSequences() {}
const next = allSequences([
    ['a', 'b'],
    [1, 2],
    ['?', '!', '-']
])

next() // a1?
next() // a1!
next() // a1-
next() // a2?
next() // a2!
next() // a2-

*/

const test = [
  ["a", "b"],
  [1, 2],
  ["?", "!", "-"],
];

function allSequences(...arrays) {
  // Создаем массив индексов, инициализируем все индексы нулем
  const indices = Array(arrays.length).fill(0);

  // Возвращаем функцию next
  return function next() {
    // Проверяем, все ли индексы дошли до конца
    const done = indices.every(
      (index, arrayIndex) => index === arrays[arrayIndex].length
    );

    // Если все индексы дошли до конца, возвращаем undefined
    if (done) {
      return undefined; // Все комбинации перебраны
    }

    // Собираем текущую комбинацию элементов по текущим индексам
    const result = arrays
      .map((array, arrayIndex) => array[indices[arrayIndex]])
      .join("");

    // Увеличиваем индекс текущего элемента и обновляем остальные индексы
    for (let i = arrays.length - 1; i >= 0; i--) {
      indices[i]++;
      if (indices[i] === arrays[i].length) {
        indices[i] = 0;
      } else {
        break;
      }
    }

    // Возвращаем текущую комбинацию
    return result;
  };
}

// Пример использования
const next = allSequences(["a", "b"], [1, 2], ["?", "!", "-"]);

// Вызываем функцию next для получения комбинаций
console.log(next()); // a1?
console.log(next()); // a1!
console.log(next()); // a1-
console.log(next()); // a2?
console.log(next()); // a2!
console.log(next()); // a2-
console.log(next()); // undefined (все комбинации перебраны)

/*
function allSequences(array) {
    let res;
    const indexArrays = [];
    let maxIteration = array.reduce((acc, el) => {
      return Math.max(acc, el.length);
    }, 0);

    const map = new Map();
    const set = new Set();
    const temp = [];
    for (let i = 0; i < array.length; i++) {
      // [a,b] , [1,2 ] , ["?", "!", "-"]
      const elementI = array[i];

      for (let j = 0; j < elementI.length; j++) {
        // a , b , 1 ,2 , ? , ! , -
        const elementJ = elementI[j];

        for (let k = 0; k < elementI.length; k++) {
          const elementK = elementI[k];

          temp.push([elementI, elementJ, elementK].sort());

          let t = [elementI, elementJ, elementK].sort();
          if (set.has(t)) {
            continue;
          } else {
            set.add(t);
          }
          // set.add(`${elementI} ${elementJ} ${elementK}`);
        }
      }
    }

    console.log(temp.length);
    console.log(set);
  }

  */
