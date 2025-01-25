const operations = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
  };
  
  const calculate = (a, b, operation) => operation(a, b);
  
  // Пример использования
  const selectedOperation = "multiply";
  console.log(calculate(6, 3, operations[selectedOperation])); // 18
  