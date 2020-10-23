const button = document.querySelector('.calc-buttons'); // use id
const display_screen = document.querySelector('.screen');
const cases = document.querySelectorAll('.special_cases'); // change to operators

let flag = false;
let disabled_button = cases; // use cases instead

button.addEventListener('click', display);

function display(event) {
    const button_value = event.target.innerText;

    if (button_value == 'C') { // Use else if Or better use Switch
        display_screen.innerText = '0';
    }
    if (button_value == '←') {
        if (flag == true) { // use map
            disabled_button[0].removeAttribute('disabled');
            disabled_button[1].removeAttribute('disabled');
            disabled_button[2].removeAttribute('disabled');
            disabled_button[3].removeAttribute('disabled');
        }
        if (display_screen.innerText.length == 1) {
            display_screen.innerText = '0';
        } else {
            display_screen.innerText = display_screen.innerText.slice(0, -1);
        }
    }
    if (button_value == '=') {
        if (
            display_screen.innerText.length > 1 &&
            (display_screen.innerText[display_screen.innerText.length - 1] ==
                '×' ||
                display_screen.innerText[display_screen.innerText.length - 1] ==
                    '÷' ||
                display_screen.innerText[display_screen.innerText.length - 1] ==
                    '-' ||
                display_screen.innerText[display_screen.innerText.length - 1] ==
                    '+')
        ) {
            display_screen.innerText = display_screen.innerText.slice(0, -1);
            if (flag == true) {
                disabled_button[0].removeAttribute('disabled');
                disabled_button[1].removeAttribute('disabled');
                disabled_button[2].removeAttribute('disabled');
                disabled_button[3].removeAttribute('disabled');
            }
        }
        display_screen.innerText = display_screen.innerText.replaceAll(
            '×',
            '*'
        );
        display_screen.innerText = display_screen.innerText.replaceAll(
            '÷',
            '/'
        );
        let value_equal = eval(display_screen.innerText);
        display_screen.innerText = value_equal;
    }
    if (button_value >= 0 || button_value <= 9) {
        if (flag == true) {
            disabled_button[0].removeAttribute('disabled');
            disabled_button[1].removeAttribute('disabled');
            disabled_button[2].removeAttribute('disabled');
            disabled_button[3].removeAttribute('disabled');
        }
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
        const symbols =
            display_screen.innerText[display_screen.innerText.length - 1];
        if (symbols) {
            flag = true;
            disabled_button[0].setAttribute('disabled', 'disabled');
            disabled_button[1].setAttribute('disabled', 'disabled');
            disabled_button[2].setAttribute('disabled', 'disabled');
            disabled_button[3].setAttribute('disabled', 'disabled');
        }
    }
}
