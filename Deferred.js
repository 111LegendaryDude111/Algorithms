class Deferred {
  #thenQueCallback = [];
  #deferredResult;

  constructor(callback) {
    this.pending = true;

    callback(this.#resolve.bind(this));
  }

  #resolve(value) {
    this.#deferredResult = value;

    if (this.#thenQueCallback) {
      let tempRes;
      this.#thenQueCallback.forEach((cb, i) => {
        if (i === 0) {
          tempRes = cb(this.#deferredResult);
        } else {
          tempRes = cb(tempRes);
        }
      });
    }

    this.fulfilled = value;
    return this;
  }

  then(func) {
    if (this.fulfilled) {
      const result = func(this.#deferredResult);
      
      if (result instanceof Deferred) {
        return result;
      } else {
        return new Deferred((res) => res(result));
      }
    } else {
      this.#thenQueCallback.push(func);
    }
  }
}

// const d = new Deferred((resolve) => {
//   setTimeout(() => {
//     resolve(15);
//   }, 1_000);
// }).then(console.log);

const d = new Deferred((res) => res(10));

// 1)
// d.then((value) => {
//   console.log(value); // 10
//   return 15;
// }).then((value) => {
//   console.log(value);
// });

//2)
// d.then((value) => {
//   console.log(value); // 10

//   return new Deferred((resolve) => {
//     setTimeout(() => {
//       resolve(15);
//     }, 1_000);
//   });
// }).then((value) => {
//   console.log(value); // 15
// });

//3)
// setTimeout(() => {
//   d.then(v => console.log(v)); // 10
// }, 2_000);

//4)

const p = new Deferred((res) => res(5));
const p2 = p.then((value) => 10);
console.log(p2 === p); // false
p.then(console.log); // 5
p.then(console.log); // 5
p2.then(console.log); // 10
