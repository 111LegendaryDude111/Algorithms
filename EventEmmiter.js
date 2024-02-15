class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, fn) {
    if (this.events[eventName]) {
      return;
    }
    this.events[eventName] = fn;
  }

  unsubscribe() {
    if (!this.events[eventName]) {
      return;
    }

    this.events[eventName] = null;
  }

  emit(eventName, ...args) {
    if(args.length > 1){
      this.events[eventName].call(null, 'zzzzz');
    }

    this.events[eventName].apply(null, args);
  }
}

let e = new EventEmitter();
e.on("happy", console.log);
e.emit("happy");
e.emit("happy", "bla", "bla", "bla");
