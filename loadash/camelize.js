import { isLowerCase, isUpperCase } from "./utils.js";

const words = [
  "StackOverflow",
  "camelCase",
  "alllowercase",
  "ALLCAPITALLETTERS",
  "CustomXMLParser",
  "APIFinder",
  "JSONResponseData",
  "Person20Address",
  "UserAPI20Endpoint",
  "snake-case",
  "--foo-bar--",
  "__FOO_BAR__",
  "Foo Bar",
];

function camelize(string) {
  const symbols = [".", "-", " ", "_"];

  if (isUpperCase(string)) {
    return string
      .split("")
      .filter((el) => !symbols.includes(el))
      .join("")
      .toLowerCase();
  }

  let temp = "";
  let tempString = "";

  for (let index = 0; index < string.length; index++) {
    const element = string[index];
    const prevEl = string[index - 1];
    const nextEl = string[index + 1];

    if (symbols.includes(element)) {
      continue;
    }

    if (isUpperCase(element) && !isUpperCase(prevEl) && index !== 0) {
      temp += element;
      continue;
    }
    if (symbols.includes(prevEl) && !symbols.includes(element)) {
      if (temp) {
        temp += element.toUpperCase();
      } else {
        temp += element.toLowerCase();
      }
      continue;
    }
    if (isUpperCase(element) && isUpperCase(nextEl)) {
      tempString += element;
      continue;
    }

    if (isUpperCase(element) && !isUpperCase(nextEl)) {
      if (tempString) {
        temp += `${tempString.toLowerCase()}${element}`;
        tempString = "";
        continue;
      }
    }

    temp += index === 0 ? element.toLowerCase() : element;
  }

  return temp;
}

console.log(words.map((el) => camelize(el)));
