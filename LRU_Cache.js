class LinkedList {
  #actualLink = new Map();
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev ?? null;

    this.#actualLink.set(value, { value, next, prev });
  }

  get(value) {
    if (!this.#actualLink.has(value)) return -1;

    return this.#actualLink.get(value);
  }

  delete(value) {
    if (!this.#actualLink.has(value)) return false;

    const currentElement = this.#actualLink.get(value);
    const prevElement = currentElement.prev;
    prevElement.next = currentElement.next ?? null;

    if (currentElement.next.prev) {
      currentElement.next.prev = prevElement;
    }

    this.#actualLink.delete(value);

    return true;
  }
}

class LRUCache {
  #store = new Map();
  #actualizeLink = new Map();
  #lastLink = null;

  constructor(size) {
    this.maxSize = size;
    this.linkedList = new LinkedList(0, null, null);
  }

  get(key) {
    if (!this.#store.has(key)) return -1;

    //удаляю ссылку на текущую запись
    const currentLink = this.#actualizeLink.get(key);
    this.linkedList.delete(currentLink);

    // console.log(currentLink);

    //добавляю сущность наверх как самую актуальную

    // const temp = new LinkedList(key, this.#lastLink ?? this.linkedList, prev);
    // this.#lastLink.next = temp;
    // this.#lastLink = temp;

    console.log(this.#lastLink);
    return this.#store.get(key);
  }

  put(key, value) {
    //актуализация значения
    if (this.#store.has(key)) return;

    //если линкедлист пустой
    if (!this.linkedList) {
      this.linkedList = new LinkedList(key, null, null);
      this.#lastLink = this.linkedList;
    }

    //создание новой записи в листе
    // const temp = new LinkedList(key, null, this.#lastLink ?? this.linkedList);
    // this.#lastLink.next = temp;
    // this.#lastLink = temp;

    const temp = new LinkedList(key, this.#lastLink ?? this.linkedList, null);
    this.#lastLink = temp;

    //создаем запись чтобы по ключу получать конкретную ссылку
    this.#actualizeLink.set(key, temp);

    this.#store.set(key, value);
    return this.#store;
  }
}

const lRUCache = new LRUCache(2);
lRUCache.put(1, 11);
lRUCache.put(2, 22);
lRUCache.put(3, 33);

console.log(lRUCache.get(2)); // return 11
// console.log(lRUCache.put(3, 33)); // LRU key was 2, evicts key 2, cache is {1=11, 3=33}
// console.log(lRUCache.get(2)); // returns -1 (not found)
// console.log(lRUCache.put(4, 44)); // LRU key was 1, evicts key 1, cache is {4=44, 3=33}
// console.log(lRUCache.get(1)); // return -1 (not found)
// console.log(lRUCache.get(3)); // return 33
// console.log(lRUCache.get(4)); // return 44

/*
  class LRUCache {
  #store = new Map();
  constructor(size) {
    this.maxSize = size;
    this.stackOfKeys = [];
  }

  get(key) {
    if (this.#store.get(key)) {
      const t = this.stackOfKeys.indexOf(key);

      const mustDelete = this.stackOfKeys[t];

      this.stackOfKeys = this.stackOfKeys.filter((el, i) => el !== mustDelete);
      this.stackOfKeys.push(key);

      return this.#store.get(key);
    }

    return -1;
  }

  put(key, value) {
    if (this.#store.size === this.maxSize) {
      const t = this.stackOfKeys.shift();
      this.#store.delete(t);
    }

    this.stackOfKeys.push(key);

    this.#store.set(key, value);
    return this.#store;
  }
}

*/
