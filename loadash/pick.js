const obj = {
  Name: "GeeksforGeeks",
  password: "gfg@1234",
  username: "your_geeks",
};
const obj1 = { x: 1, y: "2", z: 3 };

//cpu - O(N) mem - O(N)
function pick(obj, keysArray) {
  const object = {};

  keysArray.forEach((el) => (object[el] = obj[el]));

  return object;
}

const temp = pick(obj, ["password", "username"]);
const temp1 = pick(obj1, ["x", "y"]);
