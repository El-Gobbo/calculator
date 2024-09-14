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
let firstNumber = '';
let secondNumber = '';
let currentNumber = '';
let operator;
const cont = document.querySelector('#interface');

cont.addEventListener('click',(e) => {
    let buttonType = e.target.className;
    let buttonDisplay = e.target.textContent;
    switch(buttonType){
        case ('number'):
            currentNumber += buttonDisplay;
            updateDisplay(currentNumber);
            break;
        case ('operation'):
            operator = buttonDisplay;
            if (firstNumber !== ''){
                calculate(firstNumber,currentNumber,operator);
            } else {
                firstNumber = currentNumber;
                currentNumber = '';
            }
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
        case `+`:
            answer = add(firstNumber,secondNumber);
            break;
        case '-':
            answer = subtract(firstNumber,secondNumber);
            break;
        case `×`:
            answer = multiply(firstNumber,secondNumber);
            break;
        case `÷`:
            answer = divide(firstNumber,secondNumber);
            break;
    }
    updateDisplay(answer);
    return answer;
}

