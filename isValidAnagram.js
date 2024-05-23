var isAnagram = function (s, t) {
//cpu - O(2N) mem - O(N)
  if (s.length !== t.length) return false;
  const m1 = getMap(s);

  for (let index = 0; index < t.length; index++) {
    const element = t[index];

    if (!m1[element]) {
      return false;
    }

    if (m1[element] === 0) {
      delete m1[element];
    } else {
      m1[element] = m1[element] - 1;
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
