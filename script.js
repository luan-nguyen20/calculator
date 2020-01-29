//this Stack class uses an array to implement a stack
class Stack{
    constructor(){
        this.stackArr = [];
    }
    push(newItem){ //add item to top
        this.stackArr.push(newItem);
    }
    pop(){ //return top item
        if(this.isEmpty()) {return 'Stack empty';}
        else {return this.stackArr.pop();}
    }
    peek(){ //return top item
        if(this.isEmpty()) {return 'Stack empty';}
        else {return this.stackArr[this.stackArr.length-1];}
    }
    isEmpty(){ //check if stack is empty
        return this.stackArr.length === 0;
    }
    toString(){ //show stack FROM BOTTOM UP as a string
        let stackStr = '';
        this.stackArr.forEach(item => {
            stackStr += String(item);
        });
        return stackStr;
    }
}
//***************************************************************

//this Queue class uses an array to implement a queue
class Queue{
    constructor(){
        this.queueArr = [];
    }
    isEmpty(){
        return this.queueArr.length === 0;
    }
    insert(item){ //add item at back of queue
        this.queueArr.push(item);
    }
    remove(){ //remove front item
        if(this.isEmpty()) {return 'Queue empty';}
        else {return this.queueArr.shift();}
    }
    front(){ //return front item without removing it
        if(this.isEmpty()) {return 'Queue empty';}
        else {return this.queueArr[0];}
    }
    toString(){ //show queue FROM FRONT TO BACK as string
        let queueStr = '';
        this.queueArr.forEach(item => {
            queueStr += String(item);
        });
        return queueStr;
    }
}
//***************************************************************

let resultStack = new Stack(); // stack to store results
let operatorQueue = new Queue(); // queue to store operators
const input = document.querySelector('input');
const resultTxt = document.querySelector('#resultTxt');

//func to clear input display ONLY
function clearInputDisplay(){input.value = '';}

//func to clear result display ONLY
function clearResultDisplay(){resultTxt.textContent='Result: ';}

//clear func clears everything
function clear(){
    clearInputDisplay();
    clearResultDisplay();
    while(!resultStack.isEmpty()) {resultStack.pop();}
    while(!operatorQueue.isEmpty()) {operatorQueue.remove();}
}
//*************************************************************

//clearBtn event listener
const clearBtn = document.querySelector('#clearBtn');
clearBtn.addEventListener('click',clear);

//call clear upon page loads
window.onload = clear;

function appendToDisplay(){
    if(event.target.id==='decBtn'){ //add dec point only if
        if(input.value.indexOf('.') === -1){ //dec point doesn't exist
            input.value += event.target.value;
        }
    }
    else if(event.target.id==='btn0'){ //skip leading zeroes if display is '0'
        if(input.value !== '0') {input.value += event.target.value;}
    }
    else{
        input.value += event.target.value;
    }
}


const numBtns = Array.from(document.querySelectorAll('.numBtn'));
numBtns.forEach(numBtn => numBtn.addEventListener('click',appendToDisplay));

//func to delete last input entry
function back(){
    if(!displayIsEmpty()){ //if display is not empty
        input.value = input.value.substring(0,input.value.length-1);
    }
}
//*************************************************************

//backBtn event listener
const backBtn = document.querySelector('#backBtn');
backBtn.addEventListener('click',back);

//func to change between negative and positive
function changeSign(){
}
//*************************************************************

//changeSignBtn event listener
const changeSignBtn = document.querySelector('#changeSignBtn');
changeSignBtn.addEventListener('click',changeSign);

//basic operation funcs
function add(a,b){return a+b;}

function subtract(a,b){return a-b;}

function multiply(a,b){return a*b;}

function divide(a,b){return b === 0 ? 'DIVIDE BY 0 !?' : a/b;}

function operate(a,b,operator){
    switch(operator){
        case '+':
            return add(a,b);
            break;
        case '-':
            return subtract(a,b);
            break;
        case '*':
            return multiply(a,b);
            break;
        case '/':
            return divide(a,b);
            break;
        default:break;
    }
}
//*************************************************************

//func to show a value in input display screen
function display(displayValue){input.value = displayValue;}

//func to show a value in result display
function displayResult(resultValue){resultTxt.textContent = 'Result: ' + resultValue;}

//func to check if display is empty
function displayIsEmpty(){return input.value === '';}

const opBtns = document.querySelectorAll('.operatorBtn');

function equalBtnClicked(){
}

//equalBtn event listener
const equalBtn = document.querySelector('#equalBtn');
equalBtn.addEventListener('click',equalBtnClicked);





