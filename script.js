function add(a, b) {
  return +(parseInt(a) + parseInt(b));
}
// console.log(add(5, 4));

function subtract(a, b) {
  return a - b;
}
// console.log(subtract(5, 4));

function multiply(a, b) {
  return a * b;
}
// console.log(multiply(5, 4));

function divide(a, b) {
  return a / b;
}
// console.log(divide(5, 4));

function operate(operator) {
  // a = prompt("num1", "0");
  operator = document.getElementById("add").value;
  // b = prompt("num2", "0");
  if (operator === "/") return divide(a, b);
  if (operator === "+") return add(a, b);
  if (operator === "-") return subtract(a, b);
  if (operator === "*") return multiply(a, b);
}

// function to insert button click to input field

function insert(button) {
  let val = button.value;
  document.getElementById("input").value += val;
  // console.log(insert(button));
}

// Function allows user to input via keyboard with prompts
// function operate(operator, a, b) {
//   a = prompt("num1", "0");
//   operator = prompt("choose one operator", "+, -, *, or /");
//   b = prompt("num2", "0");
//   if (operator === "/") return divide(a, b);
//   if (operator === "+") return add(a, b);
//   if (operator === "-") return subtract(a, b);
//   if (operator === "*") return multiply(a, b);
// }
// console.log(operate());
