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

  if (firstOperand == null && !isNaN(inputVal)) {
    storeVal.firstOperand = inputVal;
  } else if (operator) {
    const result = calc(firstOperand, inputVal, operator);

    storeVal.displayVal = String(result);
    storeVal.firstOperand = result;
  }
  storeVal.waitingForSecondOperand = true;
  storeVal.operator = nextOperator;
  console.log(storeVal);
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
