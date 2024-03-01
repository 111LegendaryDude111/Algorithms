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

const lRUCache = new LRUCache(2);
lRUCache.put(1, 11);
lRUCache.put(2, 22);

console.log(lRUCache.get(1)); // return 11
console.log(lRUCache.put(3, 33)); // LRU key was 2, evicts key 2, cache is {1=11, 3=33}
console.log(lRUCache.get(2)); // returns -1 (not found)
console.log(lRUCache.put(4, 44)); // LRU key was 1, evicts key 1, cache is {4=44, 3=33}
console.log(lRUCache.get(1)); // return -1 (not found)
console.log(lRUCache.get(3)); // return 33
console.log(lRUCache.get(4)); // return 44
