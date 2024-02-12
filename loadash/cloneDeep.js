import { isObject } from "./utils.js";

const objects = [{ a: 1 }, { b: 2 }];
const list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

export function cloneDeep(object) {
  if (!isObject(object)) {
    return object;
  }

  let currentValue;
  let result = Array.isArray(object) ? [] : {};

  for (const key in object) {
    currentValue = object[key];

    result[key] = isObject(currentValue)
      ? cloneDeep(currentValue)
      : currentValue;
  }

  return result;
}

const t = cloneDeep(list);
