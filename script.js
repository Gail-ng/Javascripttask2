// program to create a simple calculator using the if...else...if 
// accept the number from the user through prompt box
const number1 = parseFloat(prompt('Enter the first number: '));

const operatorVar = prompt('Please enter one of the following operator to perform the calculation ( available options +, -, * or / ): ');

const number2 = parseFloat(prompt('Enter the second number: '));



let result; // declaration of the variable.

// use if, elseif and else keyword to define the calculator condition in JavaScript.
if (operator == '+') { // use + (addition) operator to add two numbers
  result = number1 + number2;
}
else if (operator == '-') { // use -  (subtraction) operator to subtract two numbers
  result = number1 - number2;
}
else if (operator == '*') { // use * (multiplication) operator to multiply two numbers
  result = number1 * number2;
}
else {
  result = number1 / number2; // use / (division) operator to divide two numbers
}

// display the result
window.alert(number1,operator,number2,'=', result)
