function add(a,b){
    a = Number(a);
    b = Number(b);
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
let currentNumber = '0';
let operator = '';
let answer='';
let decimalPressed = false;
const cont = document.querySelector('#interface');

updateDisplay(currentNumber)

cont.addEventListener('click',(e) => {
    let buttonType = e.target.className;
    let buttonDisplay = e.target.textContent;
    switch(buttonType){
        case ('clear'):
        case('clear-all'):
        case ('number'):
            //To reset the numbers after a calculation
            if (answer !== '') answer = '';
            if (currentNumber !== '0') currentNumber += buttonDisplay;
            else if (currentNumber === '0' && buttonDisplay !== '0') currentNumber = buttonDisplay;
            updateDisplay(currentNumber);
            break;
        case ('decimal'):
            if (decimalPressed === false)
                currentNumber += buttonDisplay;
                decimalPressed = true;
                updateDisplay(currentNumber);
                break;
        case ('operation'):

        case ('equal'):
            break;
    }
})

function saveNumber(value){
    firstNumber = value;
    currentNumber = '';
}

function updateDisplay(activeNumber){
    let display = document.querySelector('#screen');
    display.textContent = activeNumber;
}

function calculate(firstNumber,secondNumber,operator){
    switch (operator){
        case `+`:
            answer = add(firstNumber,secondNumber);
            console.log('added')
            break;
        case '-':
            answer = subtract(firstNumber,secondNumber);
            console.log('subtracted')
            break;
        case `×`:
            answer = multiply(firstNumber,secondNumber);
            console.log('multiplied')
            break;
        case `÷`:
            answer = divide(firstNumber,secondNumber);
            console.log('divided')
            break;
        default:
            console.log('failed operation');
    }
    updateDisplay(answer);
    saveNumber(answer);
    justCalculated = true;
    return answer;
}