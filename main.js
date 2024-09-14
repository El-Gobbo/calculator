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
let currentNumber = '';
let operator = '';
let justCalculated = false;
const cont = document.querySelector('#interface');

cont.addEventListener('click',(e) => {
    let buttonType = e.target.className;
    let buttonDisplay;
    if (buttonType === 'equal') buttonDisplay = '';
    else buttonDisplay = e.target.textContent;
    switch(buttonType){
        case ('number'):

            if(firstNumber === '' && buttonDisplay === '0') return;
            currentNumber += buttonDisplay;
            updateDisplay(currentNumber);
            break;
        case ('operation'):
        case ('equal'):
            if (operator !== '') {
                calculate(firstNumber,currentNumber,operator);
            }
            else {saveNumber(currentNumber)};
            operator = buttonDisplay;
            break;
    }
})

function calculationCheck(){
    if (justCalculated===true){
        currentNumber = '';
        firstNumber = '';
        justCalculated = false;
    }
}

function saveNumber(value){
    firstNumber = value;
    currentNumber = '';
}

function updateDisplay(activeNumber){
    let display = document.querySelector('#screen');
    display.textContent = activeNumber;
}

function calculate(firstNumber,secondNumber,operator){
    let answer;
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

