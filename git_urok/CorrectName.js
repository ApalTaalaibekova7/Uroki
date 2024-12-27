
// Функция для расчета общей суммы покупок
function calculateTotalPurchaseAmount(purchaseAmounts) {
    let totalAmount = 0;
    purchaseAmounts.forEach(amount => {
      totalAmount += amount;
    });
    return totalAmount;
  }
  
  // Массив с суммами покупок трех самых ценных покупателей
  const topBuyerPurchaseAmounts = [10000, 20000, 30000];
  
  // Выводим общую сумму покупок
  console.log(calculateTotalPurchaseAmount(topBuyerPurchaseAmounts));
  