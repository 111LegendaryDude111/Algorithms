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
