// 1
/* d.then(value => {
  console.log(value); // 10
  return 15
}).then((value) => {
  console.log(value);
}); */

// 2
// d.then(value => {
//   console.log(value); // 10

//   return new Deferred(resolve => {
//     setTimeout(() => {
//       resolve(15);
//     }, 1_000);
//   });
// }).then(value => {
//   console.log(value); // 15
// });

// 3
// setTimeout(() => {
//   d.then(v => console.log(v)); // 10
// }, 2_000);

// 4
// const p = new Deferred(res => res(5));
// const p2 = p.then(value => 10);
// console.log(p2 === p); // false
// p.then(console.log); // 5
// p.then(console.log); // 5
// p2.then(console.log); // 1

/*
    Класс принимает - колбек который принимает функцию в аргументы и вызывает ее

    после вызова функции которую мы передали в колбек и нее должна быть связь через точку 

    связь через точку может быть в объекте 


*/

class Defer {
  constructor(value) {
    this.value = value;
  }

  then(func) {
    const result = func(this.value);

    return new Defer(result);
  }
}

class Deferred extends Defer {
  constructor(callback) {
    super(null);
    delete this.value;
    this.pending = true;
    callback(this.resolve.bind(this));
  }

  resolve(value) {
    delete this.pending;
    this.fulfilled = value;
    this.value = value;
    return new Defer(value);
  }
}

// const p = new Deferred((res) => res(5));
// p.resolve();

// function Deferred(callback) {
//   return {
//     resolve(value) {
//       return {
//         then(fn) {
//           const res = fn(value);

//           console.log(res);
//           // return {
//           //   then(fn) {
//           //     return fn(res);
//           //   },
//           // };
//         },
//       };
//     },
//   };
// }

// const d = new Deferred((res) => res(10));

const d = new Deferred((resolve) => {
  setTimeout(() => {
    resolve(15);
  }, 1_000);
}).then( console.log)


//1)
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

// const p = new Deferred((res) => res(5));
// const p2 = p.then((value) => 10);
// console.log(p2 === p); // false
// p.then(console.log); // 5
// p.then(console.log); // 5
// p2.then(console.log); // 1
