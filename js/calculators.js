const calculator = document.getElementById('calculator');

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
            console.log(button_value);
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
            console.log(button_value);
            break;
    }
}
