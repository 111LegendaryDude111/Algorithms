let obj = {
  name: "GeeksforGeeks",
  password: "gfg@1234",
  username: "your_geeks",
};

let obj1 = { x: 1, y: "2", z: 3 };

function omit(obj, keysArray) {
  //t = O(n), M = O(1)
  const temp = Object.entries(obj).filter(([key, value]) => {
    if (!keysArray.includes(key)) {
      return [key, value];
    }
  });

  return Object.fromEntries(temp);
}

const temp = omit(obj, ["name", "username"]);

console.log(temp);
console.log(temp === obj);

const temp1 = omit(obj1, ["x", "y"]);

console.log(temp1);
console.log(temp1 === obj1);

//omit2
function omit2(obj, keysArray) {
  const clone = structuredClone(obj);

  keysArray.forEach((el) => {
    delete clone[el];
  });

  return clone;
}

const temp2 = omit2(obj, ["name", "username"]);

console.log(temp2);
console.log(temp2 === obj);

const temp3 = omit2(obj1, ["x", "y"]);

console.log(temp3);
console.log(temp3 === obj);

// https://www.geeksforgeeks.org/lodash-_-omit-method/?ref=lbp
