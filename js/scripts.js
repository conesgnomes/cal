var add = function(number1, number2) {
	return number1 + number2;
}

var subtract = function(number1, number2) {
  return number1 - number2;
}

var multiply = function(number1, number2) {
  return number1 * number2;
}

var divide = function(number1, number2) {
  return number1 / number2;
}

var number1 = parseInt(prompt("Choose a number: "));
var number2 = parseInt(prompt("Choose another number: "));

var addResult = add(number1, number2);
alert(addResult);

var subtractResult = subtract(number1, number2);
alert(subtractResult);

var multiplyResult = multiply(number1, number2);
alert(multiplyResult);

var divideResult = divide(number1, number2);
alert(divideResult);
