class LRUCache {
  #head = null;
  #tail = null;
  #links = new Map();
  #actualSize = 0;

  constructor(size) {
    this.maxSize = size;
  }

  put(key, value) {
    if (this.maxSize === this.#actualSize) {
      let currentTail = this.#tail;

      this.#links.delete(currentTail.key);
      this.delete(currentTail);
    }

    if (!this.#head) {
      let temp = { key, value, prev: null, next: null };
      this.#head = temp;
      this.#tail = temp;
      this.#links.set(key, temp);
      this.#actualSize++;
      return;
    }

    let prevHead = this.#head;
    const temp = { key, value, prev: null, next: prevHead };

    prevHead.prev = temp;

    if (!prevHead.next) {
      this.#tail = prevHead;
    }
    this.#head = temp;

    this.#links.set(key, temp);

    this.#actualSize++;
    return;
  }

  get(key) {
    if (!this.#links.has(key)) {
      return -1;
    }
    const currentElement = this.#links.get(key);

    this.delete(currentElement);
    this.put(key, currentElement.value);

    return currentElement.value;
  }

  delete(currentElement) {
    if (!currentElement) {
      return false;
    }
    let prevElement = currentElement.prev;

    if (this.#head === currentElement) {
      currentElement.next.prev = null;
      this.#head = currentElement.next;
    } else {
      prevElement.next = null;
    }

    if (currentElement === this.#tail) {
      this.#tail = prevElement;
    }

    this.#links.delete(currentElement.key);
    this.#actualSize--;
    return currentElement;
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
console.log(lRUCache.get(4)); // return 44
console.log(lRUCache.get(3)); // return 33
lRUCache.put(5, 55);
console.log(lRUCache.get(3)); // return 33
console.log(lRUCache.get(4)); // return -1
