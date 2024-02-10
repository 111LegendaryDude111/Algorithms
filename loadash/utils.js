export function isObject(object) {
  return typeof object === "object" && object !== null;
}

export function isNil(value) {
  return value === undefined || value === null || Number.isNaN(value);
}
