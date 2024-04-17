export class Queue {
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

const queue = new Queue();

for (let index = 0; index < 5; index++) {
  queue.add(index);
}

let el = queue.dequeue();
let el2 = queue.dequeue();
let el3 = queue.dequeue();
let el4 = queue.dequeue();
