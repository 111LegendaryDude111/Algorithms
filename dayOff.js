/*
    Программист Изосим хочет в отпуск, длительностью не меньше, чем к дней подряд. 
    Тимлид Иннокентий не отпускает Изосима в отпуск, если в день отсутствия Изосима будет релиз.
    На вход получаем k - минимальную продолжительность отпуска, на который согласен Изосим и
    список дней в виде массива из чисел 0 (релиза не будет) и 1 (запланировал релиз).
    Найти количество вариантов для отпуска Изосима, с учетом того, что отпуск не должен прерываться
    рабочими днями.

    findDayoffs (2, [0,0,1,0,0]) -> 2
    findDayoffs(1, [0,0,1,0]) -> 4 // Три варианта продолжительностью 1 день и один вариант 2 дня
    findDayoffs (3, [0,0,1,0,0]) -> 0

*/

const getMax = (array) => {
  let c = 0;
  let r = 0;
  array.forEach((el, i, a) => {
    if (el === 0) c++;

    if (el === 1) {
      r = c;
      c = 0;
    }

    if (a.length - 1 === i) {
      r = Math.max(r, c);
    }
  });

  return r;
};

function findDayoffs(dayOffsCount, startedArray) {
  let counter = 0;
  let result = 0;
  let maxDuration = getMax(startedArray);

  function findAllOptions(k, array) {
    array.forEach((el) => {
      if (el === 0) counter++;

      if (el === 1) counter = 0;

      if (counter === k) {
        result++;
        counter = 0;
      }
    });

    if (maxDuration > k) {
      findAllOptions(k + 1, array);
    }
  }

  findAllOptions(dayOffsCount, startedArray);

  return result;
}

console.log(findDayoffs(2, [0, 0, 1, 0, 0]));
//2
console.log(findDayoffs(1, [0, 1, 0, 0]));
//4
console.log(findDayoffs(3, [0, 0, 1, 0, 0]));
//0
