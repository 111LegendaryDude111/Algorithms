const arrayFromKeys = <T, K extends keyof T>(obj: T, keys: K[]) => {
  const out: Array<T[K]> = [];
  for (const key of keys) {
    out.push(obj[key]);
  }

  return out;
};

const obj = {
  a: 1,
  b: "B",
  zzzz: null,
};

const result = arrayFromKeys(obj, ["c"]);
