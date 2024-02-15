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

Promise.all2([
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
