function myFilter(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        result[result.length] = array[i];
      }
    }
    return result;
  }
  
  // Примеры использования
  const numbers = [1, 2, 3, 4, 5];
  
  const evenNumbers = myFilter(numbers, function(num) {
    return num % 2 === 0;
  });
  console.log(evenNumbers); // [2, 4]
  
  const greaterThanThree = myFilter(numbers, function(num) {
    return num > 3;
  });
  console.log(greaterThanThree); // [4, 5]
  