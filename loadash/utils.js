export function isObject(object) {
  return typeof object === "object" && object !== null;
}

export function isNil(value) {
  return value === undefined || value === null || Number.isNaN(value);
}

export function isUpperCase(s) {
  if (!s) return;
  return s.toUpperCase() === s;
}

export function isLowerCase(s) {
  if (!s) return;
  return s.toLowerCase() === s;
}
