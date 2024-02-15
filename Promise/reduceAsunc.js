const asyncResult = (value, ms) =>
  new Promise((res) => setTimeout(() => res(value), ms));

reduceAsync(
  [asyncResult(10, 500), asyncResult(20, 600), asyncResult(-1, 300)],
  (acc, c) => acc + c,
  0
).then((v) => {
  // ~600ms after
  console.log(v); // 29
});

async function reduceAsync(asyncArray, fn, initState) {
  const result = [];
  for (const promise of asyncArray) {
    await promise.then((el) => {
      result.push(el);
    });
  }

  return result.reduce(fn, initState);
}
