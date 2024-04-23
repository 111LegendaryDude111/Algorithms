/*
// Задача: улучшить типизацию функции
const arrayFromKeys = (obj: Record<string, any>, keys: string[]) => {
    const out = [];
    for (const key of keys) {
        out.push(obj[key]);
    }
     
    return out;
}
 
const obj = {
    a: 1,
    b: 'B',
    'c d': null,
};
 
Ошибка
arrayFromKeys(obj, ['z']);
 
Все хорошо, работают подсказки IDE
Будет круто, если тип возвращаемого значения сузится до типов значений выбранных ключей
const result = arrayFromKeys(obj, ['c d', 'a']);
   ^?

*/
const arrayFromKeys = <T, K extends keyof T>(obj: T, keys: K[]) => {
  const out: Array<T[K]> = [];
  for (const key of keys) {
    out.push(obj[key]);
  }

  return out;
};

const obj = {
  a: 1,
  b: "B",
  "c d": null,
};

const result = arrayFromKeys(obj, ["c d"]);
