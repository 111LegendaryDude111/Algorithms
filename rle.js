//память за 0(1)
function rle(string) {
  let result = "";
  let counter = 0;

  for (let index = 0; index < string.length; index++) {
    const currentElement = string[index];
    const nextElement = string[index + 1];
    counter++;

    if (currentElement !== nextElement || index === string.length - 1) {
      result += currentElement + counter;
      counter = 0;
    }
  }

  return result;
}

console.log(rle("AAABBCC")); //A3B2C2
console.log(rle("AAABBBCCDAA")); //A3B3C2D1A2
console.log(rle("ABCDEFG")); //A1B1C1D1E1F1G1
