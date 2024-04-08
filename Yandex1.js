/**
 * Нужно сделать эффект постепенного вывода текста.
 *
 * Напишите функцию typeWriter(delay, outputChar), возвращающую функцию writeText(text).
 *
 * writeText(text) далее вызывается несколько раз в разные моменты времени и должна
 * вызывать outputChar поочерёдно для каждого символа строки text с задержкой в delay миллисекунд.
 *
 *  writeText('ab')
 *  writeText('CD')     writeText('ef')           writeText('xy')
 *             │                   │                         │
 *             ▼         250ms     ▼          750ms          ▼
 *             ├───────┬───────┬───┴───┬───────┬───────┬ ... ┼───────┐
 *             ▲ 100ms ▲ 100ms ▲ 100ms ▲ 100ms ▲ 100ms ▲ ... ▲ 100ms ▲
 *             │       │       │       │       │       │     │       │
 * outputChar('a')    'b'     'C'     'D'     'e'     'f'   'x'     'y'
 *
 *
 * type OutputChar = (char: string) => void;
 * type WriteText = (text: string) => void;
 * function typeWriter(delay: number, outputText: OutputChar): WriteText;
 *
 * Дополнительно:
 * Решение должно быть линейным по сложности и «отпускать» ссылку на строку сразу же после того,
 * как последний символ строки был выведен.
 */

function typeWriter(delay, outputChar) {
  // your code here

  let currentString = "";
  let counter = 0;
  let isFirst = true;
  function typeText() {
    const currentChar = currentString[0];
    currentString = currentString.substring(1, currentString.length);
    outputChar(currentChar);

    if (currentString) {
      setTimeout(typeText, delay);
    } else {
      isFirst = true;
    }
  }

  return (text) => {
    currentString += text;
    if (isFirst) {
      typeText();
      isFirst = false;
    }
  };
}

function runTest() {
  console.clear();

  let start = Date.now();

  const outputChar = (char) => {
    console.log(`${Date.now() - start}: ${char}`);
  };
  const writeText = typeWriter(100, outputChar);
  writeText("ab");
  writeText("CD");
  setTimeout(() => writeText("ef"), 250);
  setTimeout(() => writeText("xy"), 5_000);
}

runTest();
