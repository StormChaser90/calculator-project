const storeVal = {
  displayVal: "0",
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

function selectDigit(digit) {
  const { displayVal, waitingForSecondOperand } = storeVal;

  if (waitingForSecondOperand === true) {
    storeVal.displayVal = digit;
    storeVal.waitingForSecondOperand = false;
  } else {
    storeVal.displayVal = displayVal === "0" ? digit : displayVal + digit;
  }
  // console.log(storeVal);
}

function selectDec(decimal) {
  if (storeVal.waitingForSecondOperand === true) {
    storeVal.displayVal = "0.";
    storeVal.waitingForSecondOperand = false;
    return;
  }
  if (!storeVal.displayVal.includes(decimal)) {
    storeVal.displayVal += decimal;
  }
}

function selectOp(nextOperator) {
  const { firstOperand, displayVal, operator } = storeVal;
  const inputVal = parseFloat(displayVal);

  if (operator && storeVal.waitingForSecondOperand) {
    storeVal.operator = nextOperator;
    // console.log(nextOperator);
    return;
  }
  if (firstOperand == null && !isNaN(inputVal)) {
    storeVal.firstOperand = inputVal;
  } else if (operator) {
    const result = calc(firstOperand, inputVal, operator);

    storeVal.displayVal = `${parseFloat(result.toFixed(5))}`;
    storeVal.firstOperand = result;
  }
  storeVal.waitingForSecondOperand = true;
  storeVal.operator = nextOperator;
  // console.log(storeVal);
}

function calc(firstOperand, secondOperand, operator) {
  if (operator === "+") {
    return firstOperand + secondOperand;
  } else if (operator === "-") {
    return firstOperand - secondOperand;
  } else if (operator === "/") {
    return firstOperand / secondOperand;
  } else if (operator === "*") {
    return firstOperand * secondOperand;
  }
  return secondOperand;
}

function clear() {
  storeVal.displayVal = "0";
  storeVal.firstOperand = null;
  storeVal.waitingForSecondOperand = false;
  storeVal.operator = null;
  // console.log(storeVal);
}

function update() {
  const display = document.querySelector(".calcDisplay");
  display.value = storeVal.displayVal;
}
update();

const butts = document.querySelector(".calcButts");
butts.addEventListener("click", (event) => {
  const { target } = event;
  const { value } = target;
  if (!target.matches("button")) {
    return;
  }
  switch (value) {
    case "+":
    case "-":
    case "=":
    case "/":
    case "*":
      selectOp(value);
      break;
    case ".":
      selectDec(value);
      break;
    case "allClear":
      clear();
      break;
    default:
      if (Number.isInteger(parseFloat(value))) {
        selectDigit(value);
      }
  }
  update();
});
