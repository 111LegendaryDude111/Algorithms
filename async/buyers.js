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
  return new Promise((resolve) => {
    const agreeBuyers = [];

    array.forEach((element, index) => {
      const { price, accepts } = element;

      accepts()
        .then((el) => {
          if (!el) return;

          if (price === 10) {
            resolve({ index, price, accept: el });
          }

          agreeBuyers.push({ index, price, accept: el });
        })
        .finally(() => {
          if (index === array.length - 1) {
            if (agreeBuyers.length > 0) {
              const agreeBuyer = agreeBuyers.sort(
                (a, b) => a.price - b.price
              )[0];
              resolve(agreeBuyer);
            } else {
              resolve(-1);
            }
          }
        });
    });
  });
}

const buyersTest = [
  { price: 10, accepts: () => Promise.resolve(false) }, // Пользователь готов купить за 10
  { price: 5, accepts: () => Promise.resolve(false) }, // Пользователь готов купить за 5, но отказался
  { price: 2, accepts: () => Promise.resolve(false) }, // Пользователь готов купить за 2
  { price: 10, accepts: () => Promise.resolve(false) }, // Пользователь готов купить за 10, но отказался
  { price: 10, accepts: () => Promise.resolve(false) }, // Пользователь готов купить за 10, но отказался
  { price: 10, accepts: () => Promise.resolve(false) }, // Пользователь готов купить за 10, но отказался
  { price: 10, accepts: () => Promise.resolve(false) }, // Пользователь готов купить за 10, но отказался
  { price: 10, accepts: () => Promise.resolve(false) }, // Пользователь готов купить за 10, но отказался
  { price: 10, accepts: () => Promise.resolve(false) }, // Пользователь готов купить за 10, но отказался
  { price: 10, accepts: () => Promise.resolve(false) }, // Пользователь готов купить за 10, но отказался
  { price: 10, accepts: () => Promise.resolve(false) }, // Пользователь готов купить за 10, но отказался
  { price: 10, accepts: () => Promise.resolve(false) }, // Пользователь готов купить за 10, но отказался
  { price: 10, accepts: () => Promise.resolve(false) }, // Пользователь готов купить за 10, но отказался
  { price: 10, accepts: () => Promise.resolve(false) }, // Пользователь готов купить за 10, но отказался
  { price: 10, accepts: () => Promise.resolve(false) }, // Пользователь готов купить за 10, но отказался
  { price: 10, accepts: () => Promise.resolve(false) }, // Пользователь готов купить за 10, но отказался
  { price: 10, accepts: () => Promise.resolve(false) }, // Пользователь готов купить за 10, но отказался
  { price: 10, accepts: () => Promise.resolve(false) }, // Пользователь готов купить за 10, но отказался
  { price: 10, accepts: () => Promise.resolve(false) }, // Пользователь готов купить за 10, но отказался
  { price: 10, accepts: () => Promise.resolve(false) }, // Пользователь готов купить за 10, но отказался
  { price: 10, accepts: () => Promise.resolve(false) }, // Пользователь готов купить за 10, но отказался
  { price: 10, accepts: () => Promise.resolve(false) }, // Пользователь готов купить за 10, но отказался
  { price: 10, accepts: () => Promise.resolve(false) }, // Пользователь готов купить за 10, но отказался
  { price: 5, accepts: () => Promise.resolve(true) }, // Пользователь готов купить за 5 и принял предложение
  { price: 2, accepts: () => Promise.resolve(false) }, // Пользователь готов купить за 2, но отказался
  { price: 2, accepts: () => Promise.resolve(false) }, // Пользователь готов купить за 2, но отказался
  { price: 2, accepts: () => Promise.resolve(false) }, // Пользователь готов купить за 2, но отказался
  { price: 2, accepts: () => Promise.resolve(false) }, // Пользователь готов купить за 2, но отказался
  { price: 2, accepts: () => Promise.resolve(false) }, // Пользователь готов купить за 2, но отказался
  { price: 2, accepts: () => Promise.resolve(false) }, // Пользователь готов купить за 2, но отказался
  { price: 2, accepts: () => Promise.resolve(false) }, // Пользователь готов купить за 2, но отказался
  { price: 2, accepts: () => Promise.resolve(false) }, // Пользователь готов купить за 2, но отказался
  { price: 2, accepts: () => Promise.resolve(false) }, // Пользователь готов купить за 2, но отказался
  { price: 2, accepts: () => Promise.resolve(true) }, // Пользователь готов купить за 2, но отказался
  { price: 2, accepts: () => Promise.resolve(true) }, // Пользователь готов купить за 2, но отказался
  { price: 2, accepts: () => Promise.resolve(false) }, // Пользователь готов купить за 2, но отказался
  { price: 2, accepts: () => Promise.resolve(false) }, // Пользователь готов купить за 2, но отказался
  { price: 2, accepts: () => Promise.resolve(false) }, // Пользователь готов купить за 2, но отказался
  { price: 2, accepts: () => Promise.resolve(false) }, // Пользователь готов купить за 2, но отказался
  { price: 2, accepts: () => Promise.resolve(false) }, // Пользователь готов купить за 2, но отказался
  { price: 2, accepts: () => Promise.resolve(false) }, // Пользователь готов купить за 2, но отказался
  { price: 5, accepts: () => Promise.resolve(false) }, // Пользователь готов купить за 2, но отказался
  { price: 10, accepts: () => Promise.resolve(true) }, // Пользователь готов купить за 10, но отказался
];

buyers(buyersTest)
  .then((el) => console.log(el))
  .catch((e) => console.log(e));

// function buyers(array) {
//   return new Promise((resolve, reject) => {
//     let index = 0;
//     let result;
//     let stop = array.length - 1 === index ? true : false;
//     let tenCount;
//     let fiveCount;
//     let twoCount;
//     const rejects = [];
//     array.forEach((element) => {
//       const { price } = element;
//       if (price === 10) {
//         tenCount = tenCount + 1;
//       } else if (price === 5) {
//         fiveCount = fiveCount + 1;
//       } else {
//         twoCount = twoCount + 1;
//       }
//     });
//     array.sort((a, b) => a - b);

//     function next() {
//       if (result && result.price === 10 && result.accept) {
//         resolve(result);
//         return;
//       }

//       if (
//         result &&
//         result.price === 5 &&
//         result.accept &&
//         rejects.length - 1 === tenCount
//       ) {
//         resolve(result);
//         return;
//       }

//       if (
//         result &&
//         result.price === 2 &&
//         result.accept &&
//         rejects.length - 1 === fiveCount + tenCount
//       ) {
//         resolve(result);
//         return;
//       }

//       if (rejects.length === array.length) {
//         return resolve(-1);
//       }

//       while (!stop && index < array.length) {
//         let { accepts, price } = array.pop();
//         index++;
//         accepts()
//           .then((el) => {
//             console.log(el)
//             if (el) {
//               result = { index, price, accept: el };
//             } else {
//               rejects.push({ index, price, el });
//             }
//           })
//           .catch((e) => e)
//           .finally(() => {
//             next();
//           });
//       }
//     }

//     next();
//   });
// }
