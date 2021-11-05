function solveEquation(a, b, c) {
  let arr, d;
  // код для задачи №1 писать здесь
  d = b ** 2 - 4 * a * c;
  if (d < 0) {
    arr = [];
  } else if (d === 0) {
    arr = [(-b) / (2 * a)];
  } else {
    arr = [((-b) + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
  }

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  if(typeof(percent) != "number"){
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`
  }
  if(typeof(contribution) != "number"){
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`
  }
  if(typeof(amount) != "number"){
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`
  }
  let totalAmount,
    payMonth,
    nowDate = new Date(),
    total_months = Math.floor((date - nowDate) / 2592000000),
    bodyCredit = amount - contribution;
  payMonth = bodyCredit * ((percent / 1200) + (percent / 1200) / (((1 + (percent / 1200)) ** total_months) - 1)),
  totalAmount = payMonth*total_months;
  console.log(payMonth.toFixed(2),totalAmount.toFixed(2));
totalAmount = Number(totalAmount.toFixed(2));
  // код для задачи №2 писать здесь
  return totalAmount;
}
