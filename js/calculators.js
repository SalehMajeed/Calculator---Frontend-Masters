const calculator = document.getElementById('calculator');

calculator.addEventListener('click', calculation);

function calculation(event) {
    
    const button_value = event.target.innerText;
    console.log(button_value)
    
}
