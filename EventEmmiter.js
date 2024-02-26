class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, fn) {
    if (!this.events[eventName]) {
      this.events[eventName] = [fn];
      return this;
    }

    this.events[eventName].push(fn);

    return this;
  }

  unsubscribe() {
    if (!this.events[eventName]) {
      return;
    }

    this.events[eventName] = null;
  }

  emit(eventName, ...args) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((fn) => fn(...args));

      return this;
    }

    return this;
  }
}

let e = new EventEmitter();
e.on("happy", console.log).emit("happy").emit("happy", "bla", "bla", "bla");
