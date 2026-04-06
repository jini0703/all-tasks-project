function calculate(operator) {
  const val1 = parseFloat(document.getElementById('num1').value);
  const val2 = parseFloat(document.getElementById('num2').value);
  const resultElement = document.getElementById('result');
  let total = 0;

  if (isNaN(val1) || isNaN(val2)) {
    alert("Please enter valid numbers in both fields.");
    return;
  }

  if (operator === '+') {
    total = val1 + val2;
  } else if (operator === '-') {
    total = val1 - val2;
  } else if (operator === '*') {
    total = val1 * val2;
  } else if (operator === '/') {
    if (val2 === 0) {
      total = "Error: Div by 0";
    } else {
      total = val1 / val2;
    }
  }

  resultElement.innerText = `Result: ${total}`;
}