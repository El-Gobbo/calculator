let firstNumber;
let currentNumber = '0';
let operator;
let answer;
let decimalPressed = false;

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

function reset() {
    firstNumber = '';
    currentNumber = '0';
    operator = '';
    answer='';
    decimalPressed = false;
    updateDisplay(currentNumber)
}

const cont = document.querySelector('#interface');

reset();

cont.addEventListener('click',(e) => {
    let buttonType = e.target.className;
    let buttonDisplay = e.target.textContent;
    switch(buttonType){
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
            if (operator === ''){
                operator = buttonDisplay;
                firstNumber = (answer || currentNumber);
                currentNumber = '0';
            }
            else {
                firstNumber = calculate(firstNumber, currentNumber,operator);
                operator = buttonDisplay;
                currentNumber = '0';
            }
            decimalPressed = false;
            break;
        case ('equal'):
            if (operator === '' || firstNumber === '') return;
            answer = calculate (firstNumber,currentNumber,operator);
            operator = '';
            currentNumber = '0';
            decimalPressed = false;
            break;
        case ('clear-all'):
            reset();
            break;
        case ('clear'):
            if (currentNumber.slice(-1) === '.') decimalPressed = false;
            if (currentNumber.length !== 1)
                currentNumber = currentNumber.slice(0,-1);
            else currentNumber = '0';
            updateDisplay(currentNumber);
            break;
    }
})

function updateDisplay(activeNumber){
    let display = document.querySelector('#screen');
    display.textContent = activeNumber;
}

function calculate(a,b,opp){
    switch (opp){
        case `+`:
            answer = add(a,b);
            console.log('added')
            break;
        case '-':
            answer = subtract(a,b);
            console.log('subtracted')
            break;
        case `×`:
            answer = multiply(a,b);
            console.log('multiplied')
            break;
        case `÷`:
            answer = divide(a,b);
            console.log('divided')
            break;
        default:
            console.log('failed operation');
    }
    updateDisplay(answer);
    return answer;
}