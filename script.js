const input = document.querySelector('input');

//clear func**********************************************
function clear(){input.value = '';}
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

const numBtns = Array.from(document.querySelectorAll('.numBtn'));

//event listener for number buttons to change input display
function appendBtnInput(event){input.value += event.target.value;}
numBtns.forEach(numBtn => numBtn.addEventListener('click',appendBtnInput));
//event listener for number buttons to change input display

const clearBtn = document.querySelector('.clearBtn');

//event listener for AC button
clearBtn.addEventListener('click',clear);

const opBtns = Array.from(document.querySelectorAll('.operatorBtn'));

