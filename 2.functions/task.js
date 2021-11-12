// Задание 1
function getArrayParams(arr) {
  let min = arr[0], max = arr[0], sum = 0, avg;
  for (let i = 0; i < arr.length; i += 1) {
    arr[i] < min && min = arr[i];
    arr[i] > max && max = arr[i];
    sum += arr[i];
  }
  avg = Number((sum / arr.length).toFixed(2));
  // Ваш код
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }
  // Ваш код
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  for (let i = 0; i < arrOfArr.length; i += 1) {
    func(arrOfArr[i]) > max && max = func(arrOfArr[i]);
  }
  // Ваш кода
  // for ...
  return max;
}

// Задание 3
function worker2(arr) {
  let min = arr[0], max = arr[0], difference;
  for (let i = 0; i < arr.length; i += 1) {
    arr[i] < min && min = arr[i];
    arr[i] > max && max = arr[i];
  }
  difference = max - min;
  difference < 0 && difference = difference * -1;
  // Ваш код
  return difference;
}
