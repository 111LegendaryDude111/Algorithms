var containsDuplicate = function (nums) {
  const map = {};

  for (const n of nums) {
    if (map[n]) return true;

    map[n] = true;
  }

  return false;
};
