  // введите число
  var firstNumber = prompt("Введите первое число:");
  var secondNumber = prompt("Введите второе число:");

  // Преобразование к числовому типу
  var number1 = parseFloat(firstNumber);
  var number2 = parseFloat(secondNumber);

  // Идет подсчет
  var sum = number1 + number2;
  var difference = number1 - number2;
  var product = number1 * number2;
  var quotient = number1 / number2;

  // Выводим результаты в консоль
  console.log("Сумма: " + sum);
  console.log("Разность: " + difference);
  console.log("Произведение: " + product);
  console.log("Частное: " + quotient);
