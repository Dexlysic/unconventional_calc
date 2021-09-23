const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Get user input from input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// Write calculation history log
function writeOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor.js
}

function writeLogEntry(operation, prevResult, operand, result) {
  const logEntry = {
    operation: operation,
    prevResult: prevResult,
    operand: operand,
    result: result,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  writeOutput('+', initialResult, enteredNumber);
  writeLogEntry('ADD', initialResult, enteredNumber, currentResult);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  writeOutput('-', initialResult, enteredNumber);
  writeLogEntry('SUBTRACT', initialResult, enteredNumber, currentResult);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  writeOutput('*', initialResult, enteredNumber);
  writeLogEntry('MULTIPLY', initialResult, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  writeOutput('/', initialResult, enteredNumber);
  writeLogEntry('DIVIDE', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
