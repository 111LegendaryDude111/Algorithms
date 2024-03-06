class LinkedList {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev ?? null;
  }
}

const arr = [1, 2, 3, 4, 5];
function createLinkedListFromArray(array) {
  let prev;
  let list;
  let currentList;
  array.forEach((value, i) => {
    if (!list) {
      list = new LinkedList(value, {});
      prev = list;
      currentList = list;
      return;
    }
    const next = i === array.length - 1 ? null : {};

    let temp = new LinkedList(value, next, prev);
    currentList.next = temp;

    currentList = temp;
    prev = temp;
  });

  return list;
}

console.log(createLinkedListFromArray(arr));
