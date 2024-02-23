// Есть предложение о рекламе и пользователи которым предлагают это предложение, пользователи делятся на 3 группы по цене:
// Одной группе - по цене 10
// Второй группе - по цене 5
// Третьей группе - по цене 2

// Нужно найти максимально быстрый и самый больший по цене ответ
// Если все отказались то вернуть -1
// Если за 10 отказались предложить группе за 5
// Если в группе за 2 уже согласились, то даждаться всех ответов за 5 и за 10
// пользователь это объект  - type Buyer = {
//   price: number;
//   accepts: () => Promise<boolean>
// }

function buyers(array) {
  return new Promise(async (resolve) => {
    const map = new Map();

    array.forEach((element, index) => {
      const { price, accepts } = element;

      if (map.has(price)) {
        map.get(price).push({ index, accept: accepts() });
      } else {
        map.set(price, [{ index, accept: accepts() }]);
      }
    });

    const temp = Array.from(map).sort((a, b) => b[0] - a[0]);

    for (let [price, buyersAnswers] of temp) {
      const result = await bestAnswer(buyersAnswers).then((el) => el);
      if (result) {
        resolve({ ...result, price });
      }
    }

    resolve(-1);
  });
}

const bestAnswer = function (array) {
  //index, accept
  return new Promise((resolve) => {
    const rejects = [];
    array.forEach(({ index, accept }, i) => {
      accept
        .then((res) => {
          if (res) {
            resolve({ index, accept: res });
          } else {
            rejects.push({ index, e });
          }
        })
        .catch((e) => {
          rejects.push({ index, e });
        })
        .finally(() => {
          if (rejects.length === array.length) {
            resolve(false);
          }
        });
    });
  });
};

const buyersTest = [
  { price: 10, accepts: () => Promise.resolve(false) },
  { price: 5, accepts: () => Promise.resolve(false) },
  { price: 2, accepts: () => Promise.resolve(false) },
  { price: 10, accepts: () => Promise.resolve(false) },
  { price: 10, accepts: () => Promise.resolve(false) },
  { price: 10, accepts: () => Promise.resolve(false) },
  { price: 10, accepts: () => Promise.resolve(false) },
  {
    price: 5,
    accepts: () =>
      new Promise((resolve) => {
        setTimeout(() => resolve(true), 2_000);
      }),
  },
  {
    price: 2,
    accepts: () =>
      new Promise((resolve) => {
        setTimeout(() => resolve(true), 1_000);
      }),
  },
  {
    price: 10,
    accepts: () =>
      new Promise((resolve) => {
        setTimeout(() => resolve(true), 5_000);
      }),
  },
];

buyers(buyersTest)
  .then((el) => console.log(el))
  .catch((e) => console.log(e));
