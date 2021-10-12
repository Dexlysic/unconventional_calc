const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Get user input from input field
function getUserNumberInput() {
  return parseFloat(userInput.value);
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

function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === 'ADD') {
    currentResult += enteredNumber;
    mathOperator = '+';
  } else if (calculationType === 'SUBTRACT') {
    currentResult -= enteredNumber;
    mathOperator = '-';
  } else if (calculationType === 'MULTIPLY') {
    currentResult *= enteredNumber;
    mathOperator = '*';
  } else if (calculationType === 'DIVIDE') {
    currentResult /= enteredNumber;
    mathOperator = '/';
  }

  if (
    calculationType !== 'ADD' && 
    calculationType !== 'SUBTRACT' && 
    calculationType !== 'MULTIPLY' && 
    calculationType !== 'DIVIDE' ||
    !enteredNumber
  ) {
    return;
  }
  
  writeOutput(mathOperator, initialResult, enteredNumber);
  writeLogEntry(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
  calculateResult('ADD');
}

function subtract() {
  calculateResult('SUBTRACT');
}

function multiply() {
  calculateResult('MULTIPLY');
}

function divide() {
  calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);