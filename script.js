const storeVal = {
  displayVal: "0",
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

function update() {
  const display = document.querySelector(".calcDisplay");
  display.value = storeVal.displayVal;
}

update();

const butts = document.querySelector(".calcButts");
butts.addEventListener("click", (event) => {
  const { target } = event;
  if (!target.matches("button")) {
    return;
  }
  if (target.classList.contains("operator")) {
    selectOp(target.value);
    update();
    return;
  }
  if (target.classList.contains("decimal")) {
    selectDec(target.value);
    update();
    return;
  }
  if (target.classList.contains("allClear")) {
    console.log("clear", target.value);
    return;
  }
  selectDigit(target.value);
  update();
});

function selectDigit(digit) {
  const { displayVal, waitingForSecondOperand } = storeVal;

  if (waitingForSecondOperand === true) {
    storeVal.displayVal = digit;
    storeVal.waitingForSecondOperand = false;
  } else {
    storeVal.displayVal = displayVal === "0" ? digit : displayVal + digit;
  }
  console.log(storeVal);
}

function selectDec(decimal) {
  if (!storeVal.displayVal.includes(decimal)) {
    storeVal.displayVal += decimal;
  }
}

function selectOp(nextOperator) {
  const { firstOperand, displayVal, operator } = storeVal;
  const inputVal = parseFloat(displayVal);
  if (firstOperand === null && !isNaN(inputVal)) {
    storeVal.firstOperand = inputVal;
  }
  storeVal.waitingForSecondOperand = true;
  storeVal.operator = nextOperator;
  console.log(storeVal);
}
// function add(a, b) {
//   return +(parseInt(a) + parseInt(b));
// }
// // console.log(add(5, 4));

// function subtract(a, b) {
//   return a - b;
// }
// // console.log(subtract(5, 4));

// function multiply(a, b) {
//   return a * b;
// }
// // console.log(multiply(5, 4));

// function divide(a, b) {
//   return a / b;
// }
// // console.log(divide(5, 4));

// // function to insert button click to input field

// function insert(button) {
//   let val = button.value;
//   document.getElementById("input").value += val;
//   // console.log(insert(button));
// }

// function storeVal() {
//   let input = document.getElementById("input").value,
//     findOp = /\*|\+|-|\//g,
//     match;
//   while ((match = findOp.exec(input))) {
//     console.log(match);
//   }
//   firstNum = input.substring(0, match);
//   secondNum = input.substring(match + 1);
//   console.log(firstNum);
//   console.log(secondNum);
// }

// function operate(a, operator, b) {
//   a = Number(a);
//   b = Number(b);
//   switch (operator) {
//     case "+":
//       return add(a, b);
//     case "-":
//       return subtract(a, b);
//     case "*":
//       return multiply(a, b);
//     case "/":
//       if (b === 0) return null;
//       else return divide(a, b);
//     default:
//       return null;
//   }
