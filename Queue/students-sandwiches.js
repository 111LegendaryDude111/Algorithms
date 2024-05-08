// https://leetcode.com/problems/number-of-students-unable-to-eat-lunch

let students = [1, 1, 1, 0, 0, 1],
  sandwiches = [1, 0, 0, 0, 1, 1],
  students1 = [1, 1, 0, 0],
  sandwiches1 = [0, 1, 0, 1];

function countStudents(students, sandwiches) {
  let counter = 0;

  while (students.length > 0 && counter < students.length) {
    const el = students.shift();
    if (el === sandwiches[0]) {
      sandwiches.shift();
      counter = 0;
    } else {
      counter++;
      students.push(el);
    }
  }

  return students.length;
}

console.log(countStudents(students, sandwiches)); //3
console.log(countStudents(students1, sandwiches1)); //0
