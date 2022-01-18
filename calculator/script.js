document
  .querySelectorAll(".row button")
  .forEach((btn) => btn.addEventListener("click", calculator));

document.body.addEventListener("keydown", logKey);
//=============================================================================================
function logKey(event) {
  const code = event.code;

  calculator.currentNumber = regulateNumber(calculator.currentNumber);
  calculator.previousNumber = regulateNumber(calculator.previousNumber);
  calculator.operator = calculator.operator ?? "";

  switch (event.code) {
    case "Numpad0":
    case "Numpad1":
    case "Numpad2":
    case "Numpad3":
    case "Numpad4":
    case "Numpad5":
    case "Numpad6":
    case "Numpad7":
    case "Numpad8":
    case "Numpad9":
      handleNumber(code.slice(-1));
      break;
    case "NumpadDecimal":
      handleNumber(".");
      break;
    case "NumpadAdd":
      handleOperation("+");
      break;
    case "NumpadSubtract":
      handleOperation("-");
      break;
    case "NumpadMultiply":
      handleOperation("×");
      break;
    case "NumpadDivide":
      handleOperation("÷");
      break;
    case "NumpadEnter":
    case "Enter":
      handleCalculation();
      break;
    case "Backspace":
      handleCommand("delete");
      break;
    case "Delete":
      handleCommand("clear");
      break;
    case "ShiftRight":
    case "ShiftLeft":
      handleCommand("negate");
      break;
    default:
      return;
  }
  showScreen();
}

function calculator(event) {
  const id = event.target.id;

  calculator.currentNumber = regulateNumber(calculator.currentNumber);
  calculator.previousNumber = regulateNumber(calculator.previousNumber);
  calculator.operator = calculator.operator ?? "";

  switch (true) {
    case id.includes("num"):
      handleNumber(id.replace("num", ""));
      break;
    case id.includes("op"):
      handleOperation(id.replace("op", ""));
      break;
    case id === "=":
      handleCalculation();
      break;
    default:
      handleCommand(id);
  }
  showScreen();
}

function regulateNumber(number) {
  number = number ?? "";
  number = isNaN(number) ? "" : number;

  switch (number) {
    case "-":
    case ".":
    case "NaN":
    case "null":
    case "undefined":
    case "Infinity":
    case Infinity:
    case "-Infinity":
    case -Infinity:
      number = "";
  }
  return String(number);
}

function handleNumber(digit = "") {
  let number = calculator.currentNumber ?? "";
  digit = digit ?? "";

  if (digit === "." && number.includes(".")) return;

  number = number + digit;
  calculator.currentNumber = number == "00" ? "0" : number;
}

function handleOperation(operator = "") {
  if (calculator.currentNumber === "") {
    if (calculator.previousNumber !== "") calculator.operator = operator;
    return;
  } else if (calculator.previousNumber !== "") {
    handleCalculation();
  }
  calculator.previousNumber = calculator.currentNumber;
  calculator.currentNumber = "";
  calculator.operator = operator;
}

function handleCalculation() {
  if (
    regulateNumber(calculator.previousNumber) === "" ||
    regulateNumber(calculator.currentNumber) === "" ||
    calculator.operator === ""
  ) {
    return;
  }

  calculator.currentNumber = operate(
    calculator.operator,
    calculator.previousNumber,
    calculator.currentNumber
  );
  calculator.previousNumber = "";
  calculator.operator = "";
}

function handleCommand(command) {
  switch (command) {
    case "clear":
      calculator.previousNumber = "";
      calculator.currentNumber = "";
      calculator.operator = "";
      break;
    case "delete":
      calculator.currentNumber = regulateNumber(
        calculator.currentNumber.slice(0, -1)
      );
      break;
    case "negate":
      if (calculator.currentNumber !== "") {
        calculator.currentNumber = String(-1 * calculator.currentNumber);
      }
  }
}

function showScreen() {
  const topScreen = document.getElementById("screen-top");
  const bottomScreen = document.getElementById("screen-bottom");

  bottomScreen.innerText = calculator.currentNumber;
  topScreen.innerText = `${calculator.previousNumber} ${calculator.operator}`;
}

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return String(+a + +b);
    case "-":
      return String(a - b);
    case "×":
      return String(a * b);
    case "÷":
      return String(a / b);
    default:
      return "";
  }
}
