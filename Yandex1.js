class Queue {
  inStack = [];
  outStack = [];

  add(item) {
    this.inStack.push(item);

    return this.inStack;
  }

  dequeue() {
    if (this.outStack.length === 0) {
      while (this.inStack.length > 0) {
        this.outStack.push(this.inStack.pop());
      }
    }
    return this.outStack.pop();
  }

  isEmpty() {
    return this.inStack.length === 0 && this.outStack.length === 0;
  }
}

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
  const queue = new Queue();

  let isFirst = true;
  function typeText() {
    const currentChar = queue.dequeue();
    outputChar(currentChar);

    if (!queue.isEmpty()) {
      setTimeout(typeText, delay);
    } else {
      isFirst = true;
    }
  }

  return (text) => {
    for (let index = 0; index < text.length; index++) {
      queue.add(text[index]);
    }

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
