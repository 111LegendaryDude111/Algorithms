/*

    leetcode:
        https://leetcode.com/problems/container-with-most-water/description/


    Вам дан целочисленный массив height длиной n. 
    Нарисованы n вертикальных линий таким образом, что два конца i-й линии находятся в точках (i, 0) и (i, height[i]).
    Найдите две линии, которые вместе с осью x образуют контейнер, содержащий наибольшее количество воды.
    Верните максимальное количество воды, которое может вместить контейнер.
    Обратите внимание, что контейнер нельзя наклонять.


    Пример 1:

    Входные данные: height = [1,8,6,2,5,4,8,3,7]
    Выходные данные: 49
    Объяснение: Вертикальные линии, показанные выше, представлены массивом [1,8,6,2,5,4,8,3,7]. 
    В этом случае максимальная площадь воды (синяя секция), которую может содержать контейнер, равна 49.
*/

function maxArea(height) {
  let result = 0;
  let left = 0;
  let right = height.length - 1;

  for (let index = 0; index < height.length; index++) {
    const currentLeftLine = height[left]; //1
    const currentRightLine = height[right]; //7

    const currentHeight = Math.min(currentLeftLine, currentRightLine);
    const s = currentHeight * (right - left);
    result = Math.max(result, s);

    if (currentLeftLine < currentRightLine ) {
        left++
    } else {
        right--
    }
  }

  return result;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); //49
console.log(maxArea([1, 1])); //1
