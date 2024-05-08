var RecentCounter = function () {
  // class Queue {
  //     inStack = [];
  //     outStack = [];

  //     add(item) {
  //         this.inStack.push(item);

  //         return this.inStack;
  //     }

  //     dequeue() {
  //         if (this.outStack.length === 0) {
  //             while (this.inStack.length > 0) {
  //                 this.outStack.push(this.inStack.pop());
  //             }
  //         }
  //         return this.outStack.pop();
  //     }

  //     length = this.inStack.length === 0 && this.outStack.length === 0;
  // }
  // this.queue = new Queue()
  // this.queue.add(null)

  this.arr = [null];
};

RecentCounter.prototype.ping = function (t) {
  this.arr.push(t);
  const range = [t - 3000, t];
  let counter = 0;

  for (let i = 1; i < this.arr.length; i++) {
    const curEL = this.arr[i];
    if (curEL >= range[0] && curEL <= range[1]) {
      counter++;
    }
  }

  return counter;
};

const recentCounter = new RecentCounter();
recentCounter.ping(1);
recentCounter.ping(100);
recentCounter.ping(3001);
recentCounter.ping(3002);
