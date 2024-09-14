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
let secondNumber = '';
let currentNumber = '';
let operator = '';
let justCalculated = false;
const cont = document.querySelector('#interface');

cont.addEventListener('click',(e) => {
    let buttonType = e.target.className;
    let buttonDisplay = e.target.textContent;
    switch(buttonType){
        case ('number'):
            calculationCheck();
            currentNumber += buttonDisplay;
            updateDisplay(currentNumber);
            break;
        case ('operation'):
            operator = buttonDisplay;
            if (firstNumber !== ''){
                saveNumber(calculate(firstNumber,currentNumber,operator));
                justCalculated = true;
            } else {
                saveNumber(currentNumber); 
            }
            break;
        default:
            if (operator !== ''){
                saveNumber(calculate(firstNumber,currentNumber,operator));
                justCalculated = true;
            } else {
                updateDisplay(currentNumber);
                currentNumber = ''; 
            }
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
    return answer;
}

