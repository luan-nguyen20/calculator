let firstOperand = null;
let secondOperand = null;
let result = null;

const input = document.querySelector('input');

//clear func**********************************************
function clear(){
    input.value = '';
    firstOperand = null;
    secondOperand = null;
    result = null;
}
//clear func**********************************************

//call clear func on load
window.onload = clear;

//basic operations*****************************************
function add(a,b){return a+b;}

function subtract(a,b){return a-b;}

function multiply(a,b){return a*b;}

function divide(a,b){return b === 0 ? 'DIV BY 0' : a/b;}
//basic operations*****************************************

//func to execute an operation*****************************
function operate(operator,num1,num2){
    switch(operator){
        case '+':
            add(num1,num2);
            break;
        case '-':
            subtract(num1,num2);
            break;
        case '*':
            multiply(num1,num2);
            break;
        case '/':
            divide(num1,num2);
            break;
        default:break;
    }
}
//func to execute an operation*****************************

//func to append to display when num btn or decimal btn clicked
function appendBtnInput(event){
    //check if dec already exist
    if(event.target.id==='decBtn' && input.value.indexOf('.') !== -1){
        console.log('decimal already exist');
        return;
    }
    else{input.value += event.target.value;}
}

const numBtns = Array.from(document.querySelectorAll('.numBtn'));

//event listener for number buttons
numBtns.forEach(numBtn => numBtn.addEventListener('click',appendBtnInput));

const clearBtn = document.querySelector('#clearBtn');

//event listener for AC button
clearBtn.addEventListener('click',clear);

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

const opBtns = Array.from(document.querySelectorAll('.operatorBtn'));

//event listeners for operation buttons
opBtns.forEach(opBtn => opBtn.addEventListener('click',storeNum1));

const equalBtn = document.querySelector('#equalBtn');

//event listener for equal btn
equalBtn.addEventListener('click',storeNum2);

