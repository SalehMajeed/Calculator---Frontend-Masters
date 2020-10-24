const calculator = document.getElementById('calculator');
const display = document.getElementById('display_screen');

calculator.addEventListener('click', calculation);

function calculation(event) {
    const button_value = event.target.innerText;
    let operators;

    if (button_value == '+') operators = '+';
    else if (button_value == '÷') operators = '÷';
    else if (button_value == '×') operators = '×';
    else if (button_value == '-') operators = '-';

    switch (button_value) {
        case 'C':
            display.innerText = '0';
            break;
        case '←':
            console.log(button_value);
            break;
        case '=':
            console.log(button_value);
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
    if (display.innerText == '0') display.innerText = ''
    display.append(button_value);
}
