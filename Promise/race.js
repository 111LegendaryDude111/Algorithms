



Promise.race2 = async function (array) {
    return await new Promise((resolve, reject) => {
      array.forEach((el) =>
        el.then((data) => resolve(data)).catch((e) => reject(e))
      );
    });
  };

Promise.race2([
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
]).then((value) => {
  console.log(value); // 'one' или 'two' или 'three'
});
