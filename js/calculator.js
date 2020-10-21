const button = document.querySelector('.calc-buttons');
const display_screen = document.querySelector('.screen')

button.addEventListener('click', display);

function display(event){
    button_value = event.target
    if(button_value.innerText >= 0 || button_value <= 9){
        display_screen.append(button_value.innerText)
    }
}