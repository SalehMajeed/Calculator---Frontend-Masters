const button = document.querySelector('.calc-buttons');

button.addEventListener('click', display);

function display(event){
    button_value = event.target
    if(button_value.innerText >= 0 || button_value <= 9){
        console.log(button_value.innerText)
    }
}