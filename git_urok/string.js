// 1 задача
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
console.log(capitalizeFirstLetter('hello')); // 'Hello'
console.log(capitalizeFirstLetter('javaScript')); // 'JavaScript'
console.log(capitalizeFirstLetter('123abc')); // '123abc' (не изменится)


// 2 задача
function truncateString(str, maxLength) {
    if (str.length <= maxLength) return str;
  
    const truncated = str.slice(0, maxLength + 1).trim();
    const lastSpaceIndex = truncated.search(/[ ,.!?:;)]/g);
  
    if (lastSpaceIndex === -1) {
      return truncated.slice(0, maxLength) + '...';
    }
  
    return truncated.slice(0, lastSpaceIndex) + '...';
  }
console.log(truncateString('This is a very long sentence that should be truncated.', 20));
// 'This is a very...'
console.log(truncateString('Hello, world! JavaScript is fun.', 25));
// 'Hello, world!...'
console.log(truncateString('Short text.', 20));
// 'Short text.'
console.log(truncateString('CuttingWordWithoutSpace', 10));
// 'CuttingWor...'

// 3 задача
function isSubstring(str1, str2) {
    return str1.includes(str2) || str2.includes(str1);
  }
  console.log(isSubstring('JavaScript', 'Script')); // true (вторая строка содержится в первой)
  console.log(isSubstring('hello', 'world')); // false (нет совпадений)
  console.log(isSubstring('abc', 'abcdef')); // true (первая строка подстрока второй)
  console.log(isSubstring('OpenAI', 'open')); // false (учитывается регистр)
  console.log(isSubstring('', 'empty')); // true (пустая строка содержится в любой)