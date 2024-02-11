import { isUpperCase } from "./utils";

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
];

function kebabize(string) {
  if (isUpperCase(string)) {
    return string.toLowerCase();
  }

  let temp = "";
  let tempString = "";
  for (let i = 0; i < string.length; i++) {
    const el = string[i];
    const nextEl = string[i + 1];

    if (isUpperCase(el) && isUpperCase(nextEl)) {
      tempString += el.toLowerCase();
      continue;
    } else {
      if (tempString) {
        temp += `${temp ? "-" : ""}${tempString}`;
        tempString = "";
      }
    }
    if (isUpperCase(el)) {
      temp += i === 0 ? "" : "-";
      temp += el.toLowerCase();
    } else {
      temp += el;
    }
  }

  return temp;
}

console.log(words.map((el) => kebabize(el)));
