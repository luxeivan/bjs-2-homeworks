function cachingDecoratorNew(func) {
  // Ваш код
  const cache = [];
  return function wrapper(...args) {
    let hash = args.join(),
      index = cache.findIndex((item) => item.hasOwnProperty(hash));
    if (index >= 0) {
      return "Из кэша: " + cache[index][hash];
    } else {
      let result = func(...args);
      cache.push({ [hash]: result });
      if (cache.length > 5) {
        cache.shift();
      }
      return "Вычисляем: " + result;
    }
  };
}

function debounceDecoratorNew(func, ms) {
  // Ваш код
  let timeout;
  return function (...args) {
    if (!timeout) {
      func.apply(this, args);
      timeout = setTimeout(() => {
        timeout = null;
      }, ms);
    }
  };
}

function debounceDecorator2(func, ms) {
  // Ваш код
  let timeout,
    count = 0;
  return function (...args) {
    count++;
    console.log(count);
    if (!timeout) {
      func.apply(this, args);
      timeout = setTimeout(() => {
        timeout = null;
      }, ms);
    }
  };
}

const sendSignal = () => console.log("Сигнал отправлен");
const upgradedSendSignal = debounceDecorator2(sendSignal, 2000);
setTimeout(upgradedSendSignal); // Сигнал отправлен
setTimeout(upgradedSendSignal, 300); // проигнорировано так как от последнего вызова прошло менее 2000мс (300 - 0 < 2000)
setTimeout(upgradedSendSignal, 900); // проигнорировано так как времени от последнего вызова прошло: 900-300=600 (600 < 2000)
setTimeout(upgradedSendSignal, 1200); // проигнорировано так как времени от последнего вызова прошло: 1200-900=300 (300 < 2000)
setTimeout(upgradedSendSignal, 2300); // проигнорировано так как времени от последнего вызова прошло: 2300-1200=1100 (1100 < 2000)
setTimeout(upgradedSendSignal, 4400); // Сигнал отправлен так как времени от последнего вызова прошло: 4400-2300=2100 (2100 > 2000)
setTimeout(upgradedSendSignal, 4500); // Сигнал будет отправлен, так как последний вызов debounce декоратора (спустя 4500 + 2000 = 6500) 6,5с
