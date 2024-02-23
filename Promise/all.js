Promise.all2 = async function (array) {
  //cpu - O(N) mem - O(N)
  const result = [];
  array.reverse();
  while (array.length) {
    const currentPromise = array.pop();

    await currentPromise.then((res) => result.push(res));
  }

  return result;
};

Promise.all3 = function (array) {
  return new Promise((resolve, reject) => {
    const result = [];

    array.forEach((el, i) => {
      el.then((res) => {
        result.push(res);

        if (i === array.length - 1) {
          resolve(result);
        }
      }).catch((e) => reject(e));
    });
  });
};

Promise.all3([
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("one"), 1000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("two"), 500);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("three"), 1500);
  }),
]).then((values) => {
  console.log(values); // ['one', 'two', 'three']
});
