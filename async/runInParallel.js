function runInParallel(urls, limit) {
  return new Promise((resolve, reject) => {
    const results = [];
    let running = 0;
    let index = 0;

    function runNext() {
      if (index === urls.length && running === 0) {
        resolve(results);
        return;
      }

      while (running < limit && index < urls.length) {
        const url = urls[index];
        index++;
        running++;

        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            results.push({ index, data });
          })
          .catch((error) => {
            results.push({ index, error: error.message });
          })
          .finally(() => {
            running--;
            runNext();
          });
      }
    }

    runNext();
  });
}

// Пример использования
const abc = Array.from({ length: 199 }).map(
  (_, i) => `https://jsonplaceholder.typicode.com/todos/${i + 1}`
);

runInParallel(abc, 3)
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.error(error);
  });

// async function runInParallel(urls, limit) {
//   const res = [];
//   const stack = urls.map((el) => el).reverse();
//   let currentRequests = limit;
//   while (stack.length) {
//     const currentUrl = stack.pop();

//     if (currentRequests === limit) {
//       console.log("await");
//       await fetch(currentUrl)
//         .then((el) => el.json())
//         .then((data) => {
//           res.push(data);
//           currentRequests--;
//         });
//     } else {
//       console.log("not await");

//       currentRequests++;
//       fetch(currentUrl)
//         .then((el) => el.json())
//         .then((data) => {
//           res.push(data);
//           currentRequests--;
//         });
//     }
//   }

//   return res;
// }

// console.log(runInParallel(abc, 3));

// async function runInParallel(urls, limit) {
//   const result = [];
//   let currentRequests = 0;

//   for (let index = 0; index < urls.length; index++) {
//     const element = urls[index];
//     if (currentRequests === limit) {
//       await fetch(element)
//         .then((resp) => resp.json())
//         .then((data) => {
//           currentRequests--;
//           result[index] = data;
//         });
//       console.log("await");
//     } else {
//       currentRequests++;
//       fetch(element)
//         .then((resp) => resp.json())
//         .then((data) => {
//           currentRequests--;
//           result[index] = data;
//         });
//       console.log("not await");
//     }
//   }
//   return result;
// }

// const testUrls = Array.from({ length: 199 }).map(
//   (_, i) => `https://jsonplaceholder.typicode.com/todos/${i + 1}`
// );

// runInParallel(testUrls.slice(0, 20), 3).then((el) => console.log(el));
