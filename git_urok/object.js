function sumNumericFields(obj) {
    return Object.values(obj).reduce((sum, value) => {
      return typeof value === 'number' ? sum + value : sum;
    }, 0);
  }
  
  function getSortedNumericFieldNames(obj) {
    return Object.entries(obj)
      .filter(([_, value]) => typeof value === 'number')
      .sort((a, b) => b[1] - a[1])
      .map(([key]) => key);
  }
  
  // Пример использования
  const data = { name: 'Vasya', friends: 5, likes: 19, projects: 7 };
  console.log(sumNumericFields(data)); // 31
  console.log(getSortedNumericFieldNames(data)); // ['likes', 'projects', 'friends']
  