function add(a,b){
    return (a+b)
}

function subtract(a,b){
    return (a-b)
}

function multiply(a,b){
    return (a*b)
}

function divide(a,b){
    return (a/b)
}
let firstNumber = 0;
let secondNumber = 0;
let currentNumber = '';
let operator;
const cont = document.querySelector('#interface');

cont.addEventListener('click',(e) => {
    let buttonPressed = e.target;
    switch(buttonPressed.className){
        case ('number'):
            currentNumber += buttonPressed.textContent;
            console.log(currentNumber)
            break;

    }
})

function updateDisplay(activeNumber){
    let display = document.querySelector('#screen');
    display.textContent = activeNumber;
}

function calculate(firstNumber,secondNumber,operator){
    let answer;
    switch (operator){
        case `add`:
            answer = add(firstNumber,secondNumber);
            break;
        case 'subtract':
            answer = subtract(firstNumber,secondNumber);
            break;
        case `multiply`:
            answer = multiply(firstNumber,secondNumber);
            break;
        case `divide`:
            answer = divide(firstNumber,secondNumber);
            break;
    }
    return answer;
}

