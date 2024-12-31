// Реализация mySlice
function mySlice(arr, start = 0, end = arr.length) {
    const result = [];
    // Преобразуем отрицательные индексы
    if (start < 0) start = arr.length + start;
    if (end < 0) end = arr.length + end;
  
    for (let i = start; i < end && i < arr.length; i++) {
      if (i >= 0) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  // Реализация myIndexOf
  function myIndexOf(arr, item, from = 0) {
    if (from < 0) from = arr.length + from;
    for (let i = from; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  }
  
  // Реализация myIncludes
  function myIncludes(arr, item, from = 0) {
    if (from < 0) from = arr.length + from;
    for (let i = from; i < arr.length; i++) {
      if (arr[i] === item) {
        return true;
      }
    }
    return false;
  }
  
  // Пример использования
  const arr = [1, 2, 3, 4, 5];
  
  console.log(mySlice(arr, 1, 3)); // [2, 3]
  console.log(myIndexOf(arr, 3)); // 2
  console.log(myIncludes(arr, 3)); // true
  console.log(myIncludes(arr, 6)); // false
  