Promise.any2 = async function (array) {
  return await new Promise((resolve, reject) => {
    const errors = [];
    array.forEach((el, i) =>
      el
        .then((data) => resolve(data))
        .catch((e) => {
          errors.push(e);
        })
        .finally(() => {
          if (array.length === errors.length) {
            const er = new AggregateError(errors, "All promises were rejected");
            resolve(er);
          }
        })
    );
  });
};

Promise.any2([
  new Promise((resolve, reject) => {
    setTimeout(() => reject("one"), 1000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => reject("two"), 500);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => reject("three"), 1500);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => reject("four"), 300);
  }),
]).then((value) => {
  console.log(value); // 'one' или 'two' или 'three'
});
