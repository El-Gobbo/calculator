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

let firstNumber;
let secondNumber;
let operator;

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