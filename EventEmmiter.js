class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, fn) {
    const event = this.events[eventName];
    if (event) {
      return;
    }
    event = [fn];
  }

  unsubscribe() {
    const event = this.events[eventName];
    if (!event) {
      return;
    }

    event = null;
  }

  emit(eventName, ...args) {
    const event = this.events[eventName];
    if (event) {
      event.forEach((fn) => fn(...args));
    }

    return null;
  }
}

let e = new EventEmitter();
e.on("happy", console.log);
e.emit("happy");
e.emit("happy", "bla", "bla", "bla");
