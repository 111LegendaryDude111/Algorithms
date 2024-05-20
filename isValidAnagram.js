var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const m1 = getMap(s);
  const m2 = getMap(t);

  for (const l of s) {
    const fEl = m1[l];
    const sEl = m2[l];
    if (fEl !== sEl) {
      return false;
    }
  }

  return true;
};

function getMap(str) {
  const map = {};

  for (const l of str) {
    if (map[l]) {
      map[l] = map[l] + 1;
    } else {
      map[l] = 1;
    }
  }

  return map;
}
