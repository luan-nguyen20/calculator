const input = document.querySelector('input');

function clear(){
    input.value = '';
}

window.onload = clear;

function add(a,b){return a+b;}

function subtract(a,b){return a-b;}

function multiply(a,b){return a*b;}

function divide(a,b){return b === 0 ? 'DIV BY 0' : a/b;}

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

function appendBtnInput(event){
    input.value += event.target.value;
}

const numBtns = Array.from(document.querySelectorAll('.numBtn'));
numBtns.forEach(numBtn => numBtn.addEventListener('click',appendBtnInput));

