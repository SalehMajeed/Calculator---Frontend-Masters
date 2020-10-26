const calculator = document.getElementById('calculator');
const display = document.getElementById('display_screen');

calculator.addEventListener('click', calculation);

function calculation(event) {
  const button_value = event.target.innerText;
  let operators;

  if (
    button_value == '+' ||
    button_value == '÷' ||
    button_value == '×' ||
    button_value == '-'
  )
    operators = button_value;

  switch (button_value) {
    case 'C':
      display.innerText = '0';
      break;
    case '←':
      remove_value();
      break;
    case '=':
      equal_button(operators);
      break;
    case operators:
      console.log(button_value);
      break;
    default:
      feed_value(button_value);
      break;
  }
}

function feed_value(button_value) {
  if (display.innerText == '0') display.innerText = '';
  display.append(button_value);
}

function remove_value() {
  if (display.innerText.length <= 1) {
    display.innerText = '0';
    return;
  }
  display.innerText = display.innerText.slice(0, -1);
}

function equal_button(operators) {
  let evaluate_result = display.innerText;
  if (evaluate_result[evaluate_result.length - 1 == operators]) {
  }
}
