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
