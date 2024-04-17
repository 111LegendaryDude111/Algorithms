/*
Мы хотим проверять режим логгера, чтобы не выводить лишние сообщения в консоль.
Мы ожидаем, что в каждой (отмеченной точке) будет 'This is Dev mode'.
Всё ли работает верно?
*/
const logger = {
  mode: "Dev",
  check() {
    console.log(`This is ${this.mode} mode`);
  },
};

logger.check(); // => ? (1) This is Dev mode

const loggerCheck = logger.check;
loggerCheck.call(logger); // => ? (2) This is Dev mode
loggerCheck(); // => ? (2)This is undefined mode

function execute(fn) {
  return fn();
}
execute(logger.check.bind(logger)); // => ? (3) This is Dev mode

/*
Что выведется в консоли после выполнения данного кода?
*/
(function () {
  function modifyItemData(price, platform) {
    price.rub = 5000;
    platform = "iOS";
    isModified = true;

    function printItemData() {
      console.log(price); // ? (4.1) {rub: 5000}
      console.log(platform); // ? (4.2) iOS
      console.log(isModified); // ? (4.3) null
    }

    return printItemData;
  }

  let price = { rub: 3500 };
  let platform = "Android";

  let isModified = false;
  const printItemData = modifyItemData(price, platform, isModified);

  console.log(price); // ? (1) {rub : 5000}
  console.log(platform); // ? (2) Android
  console.log(isModified); // ? (3) true

  price = { usd: 100 };

  platform = "Web";
  isModified = null;

  printItemData();
})();

/**
    Мы разрабатываем приложение через Console Driven Development.
    К сожалению, у нас потерялась часть кода, но остался последний вывод.
    Расставьте тексты для console.log

    Последний вывод:
    1
    2
    3
    4
    5
    6
*/
function checkOrder() {
  console.log("1");

  async function asyncFn() {
    console.log("2");
    await Promise.resolve(null);
    console.log("4");
  }

  asyncFn();

  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
      console.log("5");
    }, 0);
  }).then(() => {
    console.log("6");
  });

  console.log("3");
}

checkOrder();

/*
на каждый клик на кнопку 
1) показать на экране картинку размером 500 x 150, доступной по ссылке “https://random.imagecdn.app/500/150.jpg”
2) при повторном клике должна показаться новая картинка вместо старой
3) до момента загрузки показывать плейсхолдер размером с картинку (например, прямоугольник 500 x 150 зеленого цвета)
4) в случае ошибки загрузки показать плейсхолдер ошибки (например, прямоугольник 500 x 150 красного цвета)
5) в случае успешной загрузки нужно вывести console.log с текстом, что картинка загрузилась
<style>
    #image-container{
        height: 150px;
        width: 500px;
    }

 </style>
<main>
    <div id="image-container"></div>
    <button id="image-loading-button">
      Load Image
    </button>
</main>

 */

// <script>
const imageDiv = document.querySelector("#image-container");
const imageUrl = "https://random.imagecdn.app/500/150.jpg";
const button = document.querySelector("#image-loading-button");

function createImage(imageUrl) {
  imageDiv.style.background = "green";

  const image = document.createElement("img");
  image.src = imageUrl;

  image.onerror = onError;
  image.onload = onLoad;

  return img;
}

button.addEventListener("click", () => {
  const imgEl = createImage(imageUrl);
  imageDiv.childNodes.forEach((el) => imageDiv.removeChild(el));
  imageDiv.appendChild(imgEl);
});

function onError() {
  imageDiv.style.background = "red";
}

function onLoad() {
  imageDiv.style.background = undefined;
  console.log("картинка загрузилась");
}

// </script>

/**
 * Напишите функцию retryFetch поверх fetch API, которая отправляет запрос в случае неудачи N раз
 * Функция принимает те же параметры, что и fetch + количество попыток и возвращает Promise.
 ** Если метод запроса PUT, то повторных запросов не разрешаем
 ** Если пользователь НЕАВТОРИЗОВАН или У НЕГО НЕТ ПРАВ, то повторный запрос не делаем
 ** Если количество попыток закончилось, то вернуть последнюю ошибку в reject
 */

/**
 * @returns {Promise<unknown>}
 */

// 401  || 403
function retryFetch(url, { method, headers }, attempts = 1) {
  return fetch(url, {
    method,
    headers,
  })
    .then((resp) => {
      const isSuccess = resp.status >= 200 && resp.status < 400;
      if (
        resp.status === 401 ||
        resp.status === 403 ||
        method === "PUT" ||
        isSuccess
      ) {
        return resp;
      } else if (attempts > 0) {
        return retryFetch(url, { method, headers }, attempts - 1);
      } else {
        throw new Error("Max attempts");
      }
    })
    .catch((err) => {
      if (attempts > 0 && method !== "PUT") {
        return retryFetch(url, { method, headers }, attempts - 1);
      } else {
        throw new Error(err);
      }
    });
}

retryFetch(
  url,
  { method: "GET", headers: { Authorization: "Bearer token" } },
  3
);
