Promise.allSettled2 = async function (array) {
  const result = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    await element
      .then((el) => {
        result.push({ status: "fulfilled", value: el });
      })
      .catch((el) => {
        result.push({ status: "rejected", value: el });
      });
  }

  return result;
};

Promise.allSettled3 = function (array) {
  return new Promise(async (resolve) => {
    const result = [];
    let count = 1;
    array.forEach((element) => {
      element
        .then((el) => {
          result.push({ status: "fulfilled", value: el });
          count++;

          if (count === array.length) {
            resolve(result);
          }
        })
        .catch((el) => {
          result.push({ status: "rejected", value: el });
          count++;

          if (count === array.length) {
            resolve(result);
          }
        });
    });
  });
};

Promise.allSettled3([
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("one"), 1000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("two"), 500);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("three"), 1500);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => reject("four"), 3000);
  }),
]).then((el) => console.log(el));
