const button = document.querySelector('.calc-buttons');
const display_screen = document.querySelector('.screen');

button.addEventListener('click', display);

function display(event) {
    const button_value = event.target.innerText;
    if (button_value == 'C') {
        display_screen.innerText = '0';
    }
    if (button_value == '=') {
        let value_equal = eval(display_screen.innerText);
        display_screen.innerText = value_equal;
    }
    if (button_value >= 0 || button_value <= 9) {
        if (display_screen.innerText[0] == '0') {
            display_screen.innerText = '';
            display_screen.append(button_value);
        } else {
            display_screen.append(button_value);
        }
    }
    if (
        button_value == '+' ||
        button_value == '-' ||
        button_value == '×' ||
        button_value == '÷'
    ) {
        display_screen.append(button_value);
    }
}
