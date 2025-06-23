// function runInParallel(urls, limit) {
//   return new Promise((resolve, reject) => {
//     const results = [];
//     let running = 0;
//     let index = 0;

//     function runNext() {
//       if (index === urls.length && running === 0) {
//         resolve(results);
//         return;
//       }

//       while (running < limit && index < urls.length) {
//         const url = urls[index];
//         index++;
//         running++;

//         fetch(url)
//           .then((response) => response.json())
//           .then((data) => {
//             results.push({ index, data });
//           })
//           .catch((error) => {
//             results.push({ index, error: error.message });
//           })
//           .finally(() => {
//             running--;
//             runNext();
//           });
//       }
//     }

//     runNext();
//   });
// }

// Пример использования
// const abc = Array.from({ length: 199 }).map(
//   (_, i) => `https://jsonplaceholder.typicode.com/todos/${i + 1}`
// );

// runInParallel(abc, 3)
//   .then((results) => {
//     console.log(results);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

//variant2
(() => {
  function runWithConcurrencyLimit(tasks, limit) {
    return new Promise((res) => {
      // let currentValue = 0;

      let i = 0;

      const result = [];
      let currentProcess = 0;

      function runTusk() {
        while (currentProcess < limit && i < tasks.length) {
          i++;
          currentProcess++;
          const currentTask = tasks[i]?.();
          if (currentTask) {
            currentTask
              .then((data) => {
                result[i] = data;
              })
              .catch((err) => {
                result[i] = err;
              })
              .finally(() => {
                currentProcess--;
                if (result.length === tasks.length && currentProcess === 0) {
                  res(result);
                }
                runTusk();
              });
          }
        }
      }

      runTusk();
    });
  }

  // Пример использования
  const abc = Array.from({ length: 30 }).map((_, i) => {
    // new Promise((resolve) => setTimeout(() => resolve("Result " + i), 1000))

    return () =>
      new Promise((resolve) => setTimeout(() => resolve("Result " + i), 0));
  });
  console.log({ abc });

  runWithConcurrencyLimit(abc, 3)
    .then((results) => {
      console.log(results);
    })
    .catch((error) => {
      console.error(error);
    });
})();
