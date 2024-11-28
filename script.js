    // Задача 1.
    function getComputerDeclension(n) {
        // Получаем последнюю цифру числа и две последние цифры
        const lastDigit = n % 10;
        const lastTwoDigits = n % 100;

    // Определяем склонение
    let word;
    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
        word = "компьютеров";
    } else if (lastDigit === 1) {
        word = "компьютер";
    } else if (lastDigit >= 2 && lastDigit <= 4) {
        word = "компьютера";
    } else {
        word = "компьютеров";
    }

    return `${n} ${word}`;
}
// Примеры использования
console.log(getComputerDeclension(25));  // "25 компьютеров"
console.log(getComputerDeclension(41));  // "41 компьютер"
console.log(getComputerDeclension(1048)); // "1048 компьютеров"
console.log(getComputerDeclension(112)); // "112 компьютеров"
// Объяснение логики
// Числа от 11 до 19 всегда используют форму "компьютеров".
// Для остальных чисел:
// Если последняя цифра 1, используется форма "компьютер".
// Если последняя цифра 2, 3 или 4, используется форма "компьютера".
// Для всех остальных — "компьютеров".
// Эта реализация покрывает все случаи и позволяет корректно склонять слово "компьютер".

    // Задача 2.

function findCommonDivisors(numbers) {
    // Функция для нахождения всех делителей числа
    const getDivisors = (num) => {
        const divisors = [];
        for (let i = 1; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                divisors.push(i);
                if (i !== num / i) {
                    divisors.push(num / i);
                }
            }
        }
        return divisors.sort((a, b) => a - b);
    };

    // Функция для нахождения наибольшего общего делителя (НОД)
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

    // Находим НОД для всех чисел в массиве
    const overallGCD = numbers.reduce((acc, num) => gcd(acc, num));

    // Возвращаем все делители НОД
    return getDivisors(overallGCD);
}

// Пример использования
const numbers = [42, 12, 18];
const result = findCommonDivisors(numbers);
console.log(result); // [1, 2, 3, 6]

// Объяснение:
// Функция getDivisors:

// Определяет все делители числа, включая само число.
// Проверяем делимость от 1 до квадратного корня числа для оптимизации.
// Функция gcd:

// Используем алгоритм Евклида для нахождения наибольшего общего делителя.
// Находим общий делитель:

// Используем reduce для нахождения НОД всех чисел в массиве.
// Результат:

// Возвращаем все делители общего НОД, так как они являются общими делителями для всех чисел.