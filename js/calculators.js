const calculator = document.getElementById('calculator');
const display = document.getElementById('display_screen');
const operator_array = document.querySelectorAll('.operator_symbol');

calculator.addEventListener('click', calculation);

function calculation(event) {
  const button_value = event.target.innerText;
  let operators;

  if (
    button_value == '+' ||
    button_value == '÷' ||
    button_value == '×' ||
    button_value == '-'
  ) {
    operators = button_value;
  }

  switch (button_value) {
    case 'C':
      display.innerText = '0';
      break;
    case '←':
      remove_value();
      break;
    case '=':
      equal_button();
      break;
    case operators:
      loop_nodelist(operator_array, 'symbol');
      feed_value(button_value);
      break;
    default:
      loop_nodelist(operator_array, 'number');
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

function equal_button() {
  loop_nodelist(operator_array, 'number');
  let evaluate_result = display.innerText;
  let last_element = display.innerText.length - 1;

  if (!Number(evaluate_result[last_element])) {
    evaluate_result = evaluate_result.replaceAll('×', '*').replaceAll('÷', '/');
    display.innerText = eval(evaluate_result.slice(0, -1));
    return;
  }

  evaluate_result = evaluate_result.replaceAll('×', '*').replaceAll('÷', '/');
  display.innerText = eval(evaluate_result);
}

function loop_nodelist(list, type) {
  if (type == 'symbol')
    for (let i = 0; i < list.length; i++) {
      list[i].setAttribute('disabled', 'disabled');
    }
  if (type == 'number')
    for (let i = 0; i < list.length; i++) {
      list[i].removeAttribute('disabled', 'disabled');
    }
}
