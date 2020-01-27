let firstOperand = null;
let secondOperand = null;
let operator = null;
let result = null;

const input = document.querySelector('input');

//clear func**********************************************
function clear(){
    input.value = '';
    firstOperand = null;
    secondOperand = null;
    operator = null;
    result = null;
}
//********************************************************

//call clear func on load
window.onload = clear;

const clearBtn = document.querySelector('#clearBtn');

//event listener for AC button
clearBtn.addEventListener('click',clear);

//basic operations*****************************************
function add(a,b){return a+b;}

function subtract(a,b){return a-b;}

function multiply(a,b){return a*b;}

function divide(a,b){return b === 0 ? 'DIV BY 0' : a/b;}
//********************************************************

//func to execute an operation*****************************
function operate(operator,num1,num2){
    switch(operator){
        case '+':
            return add(num1,num2);
            break;
        case '-':
            return subtract(num1,num2);
            break;
        case '*':
            return multiply(num1,num2);
            break;
        case '/':
            return divide(num1,num2);
            break;
        default:break;
    }
}
//********************************************************

//check if result exists
function isResult(){return (result != null && result != '');}

//check if decimal point already exists in a string
function isDecimalPoint(str){return (str.indexOf('.') !== -1);}

//func to append to display when num btn or decimal btn clicked
function appendBtnInput(event){
    //if result has a value, start new calculation by calling clear()
    if(isResult()){
        clear();
        input.value += event.target.value;
    }
    //check if decimal point already exists
    else if(event.target.id==='decBtn' && isDecimalPoint(input.value)){
        console.log('decimal already exist');
        return;
    }
    else{input.value += event.target.value;}
}
//************************************************************

const numBtns = Array.from(document.querySelectorAll('.numBtn'));

//event listener for number buttons
numBtns.forEach(numBtn => numBtn.addEventListener('click',appendBtnInput));

//func to store firstOperand and clear display
function storeNum1(){
    firstOperand = input.value;
    input.value = '';
    console.log('firstOperand: ' + firstOperand);
}

//func to store secondOperand and clear display
function storeNum2(){
    secondOperand = input.value;
    input.value = '';
    console.log('secondOperand: ' + secondOperand);
}

//func to store operator
function storeOperator(event){operator = event.target.value;}

const opBtns = Array.from(document.querySelectorAll('.operatorBtn'));

//event listeners for operation buttons
opBtns.forEach(opBtn => opBtn.addEventListener('click',storeNum1));
opBtns.forEach(opBtn => opBtn.addEventListener('click',storeOperator));

function displayResult(){
    if(!operator || !firstOperand || !secondOperand){
        console.log('Missing operator or an operand');
        console.log(operator + ' ' + firstOperand + ' '+ secondOperand);
        clear();
        return;
    }
    else{
        result = operate(operator,Number(firstOperand),Number(secondOperand));
        input.value = result;
        console.log('result: '+result);
    }
}

const equalBtn = document.querySelector('#equalBtn');

//event listener for equal btn
equalBtn.addEventListener('click',storeNum2);
equalBtn.addEventListener('click',displayResult);

