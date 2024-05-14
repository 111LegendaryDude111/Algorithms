// ---------------------------------- ----------------- ----------------- -----------------

// import React from "react";

// // Вывести значения первого и второго полей в консоль, в функции fn,
// учитывая что первый input controlled, а второй input uncontrolled.
// export default () => {
//   const fn = () => {
//     console.log("first input value: ");
//     console.log("second input value: ");
//   };
//   return (
//     <form onClick={fn}>
//       <input placeholder="controlled field" />
//       <input placeholder="uncontrolled field" />
//       <button>Отправить заявку на кредит</button>
//     </form>
//   );
// };

// ---------------------------------- ----------------- ----------------- -----------------

// Что произойдет при клике по кнопке?  - ничего
// export default function Counter() {
//   let count = 0;

//   const changeCount = () => {
//     count += 1;
//   }

//   return (
//     <div>
//       <h1>Counter</h1>
//       <div>{count}</div>
//       <button onClick={ changeCount }>Change count</button>
//     </div>
//   );
// }

// ---------------------------------- ----------------- ----------------- -----------------

// Указать неточности и то что можно было бы исправить.

// import React from "react";

// const pleaseReviewMe = () => {
//   const [count, setCount] = React.useState(1);
//   const [items, setItems] = React.useState([{ id: 1 }]);

//   React.useLayoutEffect(() => {
//     document.addEventListener("click", () => {
//       setInterval(() => console.log(count), 1000);
//     });
//   });

//   const click = React.useCallback(() => {
//     setCount(count + 1);
//     setItems([...items, { id: count + 1 }]);
//   } );

//   return (
//     <React.Fragment>
//       <ul>
//         {items.map((item) => (
//           <li>{item.id}</li>
//         ))}
//       </ul>
//       <button onClick={() => click()}>add one</button>
//     </React.Fragment>
//   );
// };
// export default PleaseReviewMe;


// ---------------------------------- ----------------- ----------------- -----------------



/*
Задача: улучшить типизацию функции
*/


// const arrayFromKeys = <T, K extends keyof T>(obj: T, keys: K[]) => {
//     const out: Array<T[K]> = [];
//     for (const key of keys) {
//       out.push(obj[key]);
//     }

//     return out;
//   };

//   const obj = {
//     a: 1,
//     b: "B",
//     "c d": null,
//   };

//   const result = arrayFromKeys(obj, ["c d"]);

// ---------------------------------- ----------------- ----------------- -----------------
// хук написать который при первом вызове тру вернет а потом фолсе всегда


export default function App(props) {
  const isFirstRender = useFirstRender();
 
  if(isFirstRender) return null;
 
  return props.children
}



// ---------------------------------- ----------------- ----------------- -----------------


// 1. Реализовать функцию getMoney для банкомата, выдающего купюры.
// На вход - сумма, на выходе объект с количеством купюр по каждому номиналу.
// При этом банкомат должен выдать минимальное количество банкнот.
// Доступные номиналы: 50, 100, 500, 1000, 5000 р

// Пример: getMoney(6200) // return {5000: 1, 1000: 1, 500: 0, 100: 2, 50: 0}

// 2. На вход добавляется объект с текущим количеством купюр в банкомате

// Пример: getMoney(6200, {5000:0, 1000:7, 100:5}) // return {5000: 0, 1000: 6, 100: 2}
// P.S. не забыть модифицировать объект с номиналами.

function getMoney(amount, limits) {
  const result = {};
  const availebelNotes = [50, 100, 500, 1000, 5000].reverse();

  if (limits) {
    for (let note of availebelNotes) {
      if (amount >= note && limits[note] > 0) {
        const count = Math.min(Math.floor(amount / note), limits[note]);
        limits[note] -= count;
        result[note] = count;
        amount = amount - count * note;
      } else {
        result[note] = 0;
      }
    }
  } else {
    for (let note of availebelNotes) {
      if (amount >= note) {
        const count = Math.floor(amount / note);

        result[note] = count;
        amount = amount - count * note;
      } else {
        result[note] = 0;
      }
    }
  }

  if (amount > 0) {
    throw Error();
  }

  return result;
}

// ---------------------------------- ----------------- ----------------- -----------------


/*Есть массив операций.
  Необходимо операции отсортировать по дате и сгруппировать их по году, а в качестве 
  значений представить массивы c датами в формате MM-DD.
  Пример результата:
  result = {
    "2017": [
      "07-31",
      "08-22"
    ],
    "2018": [
      "01-01"
      "02-22"
    ]
  }
*/
const operations = [
  {
    date: "2017-07-31",
    amount: "5422",
  },
  {
    date: "2017-06-30",
    amount: "5220",
  },
  {
    date: "2017-05-31",
    amount: "5365",
  },
  {
    date: "2017-08-31",
    amount: "5451",
  },
  {
    date: "2017-09-30",
    amount: "5303",
  },
  {
    date: "2018-03-31",
    amount: "5654",
  },
  {
    date: "2017-10-31",
    amount: "5509",
  },
  {
    date: "2017-12-31",
    amount: "5567",
  },
  {
    date: "2018-01-31",
    amount: "5597",
  },
  {
    date: "2017-11-30",
    amount: "5359",
  },
  {
    date: "2018-02-28",
    amount: "5082",
  },
  {
    date: "2018-04-14",
    amount: "2567",
  },
];

const result = operations
  .sort((a, b) => new Date(a.date) - new Date(b.date))
  .reduce((acc, { date }) => {
    const [year, month, day] = date.split("-");
    if (!acc[year]) acc[year] = [];
    acc[year].push(`${month}-${day}`);
    return acc;
  }, {});

console.log(result);



// ---------------------------------- ----------------- ----------------- -----------------


// setTimeout(()=>console.log(2), 0);

// console.log(1);

// new Promise(res=>{
//     console.log(6);
//     res();
//     console.log(3);
// }
// ).then(()=>console.log(4));

// console.log(5);

// 1 6 3 5 4 2

// Promise.resolve(1)
//      .then(x => x + 1) //2
//       .then(x => { throw x }) // свалится в catch
//      .then(x => console.log(x))
//      .catch(err => { console.log(err); return; }) // log( 2 ) обработаем ошибку и пойдем по цепочке then
//      .then(x => Promise.resolve(1)) // 1
//      .catch(err => console.log(err)) // skip
//      .then(x => console.log(x)); // log( 1 )

// 2 1


let value = 2;

function showValue() {
  console.log(`showValue ${value}`);
}

function wrapper() {
  var value = 3;

  console.log(`wrapper ${value}`);

  showValue();
}

wrapper();

// wrapper 3
// showValue 2


// ---------------------------------- ----------------- ----------------- -----------------

var side = 20;

const square = {
  side: 5,
  area() {
    return this.side * this.side;
  },
  perimeter: () => 4 * this.side,
};

console.log(square.area());
//  25
console.log(square.perimeter());
// 80

const bindedArea = square.area.bind(square).bind({
  side: 7,
});
console.log(bindedArea());
//25
