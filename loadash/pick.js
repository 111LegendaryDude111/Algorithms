const obj = {
  Name: "GeeksforGeeks",
  password: "gfg@1234",
  username: "your_geeks",
};
const obj1 = { x: 1, y: "2", z: 3 };

function pick(obj, keysArray) {
  //t = O(n), M = O(1)
  const temp = Object.entries(obj).filter(([key, value]) => {
    if (keysArray.includes(key)) {
      return [key, value];
    }
  });

  return Object.fromEntries(temp);
}

const temp = pick(obj, ["password", "username"]);
const temp1 = pick(obj1, ["x", "y"]);


console.log(temp); //{password: "gfg@1234", username: "your_geeks"}
console.log(temp === obj); 

console.log(temp1); //{password: "gfg@1234", username: "your_geeks"}
console.log(temp1 === obj1); 