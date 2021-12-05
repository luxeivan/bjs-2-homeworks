function cachingDecoratorNew(func) {
  // Ваш код
  const cache = [];
  return function wrapper(...args) {
    let hash = args.join(''),
      index = cache.findIndex((item) => item.hasOwnProperty(hash));
    if (index >= 0) {
      return 'Из кэша: ' + cache[index][hash];
    } else {
      let result = func(...args)
      cache.push({[hash]: result});
      if (cache.length > 5) {
        cache.shift();
      }
      return 'Вычисляем: ' + result;
    }
  }
}


function debounceDecoratorNew(func) {
  // Ваш код
}

function debounceDecorator2(func) {
  // Ваш код
}

const addThree = (a, b, c) => a + b + c;
const upgradedAddThree = cachingDecoratorNew(addThree);
upgradedAddThree(1, 2, 3); // вычисляем: 6
upgradedAddThree(1, 2, 3); // из кэша: 6
upgradedAddThree(2, 2, 3); // вычисляем: 7
upgradedAddThree(3, 2, 3); // вычисляем: 8
upgradedAddThree(4, 2, 3); // вычисляем: 9
upgradedAddThree(5, 2, 3); // вычисляем: 10
upgradedAddThree(6, 2, 3); // вычисляем: 11   (при этом кэш для 1, 2, 3 уничтожается)
upgradedAddThree(1, 2, 3); // вычисляем: 6  (снова вычисляем, кэша нет)