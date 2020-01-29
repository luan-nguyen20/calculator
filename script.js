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

let resultStr = ''; //str to store math expression
let resultStack = new Stack(); // stack to store results
let operatorQueue = new Queue(); // queue to store operators
const inputDisplay = document.querySelector('input');
const resultDisplay = document.querySelector('#resultTxt');
const numOnlyRegEx = /^\d+$/;

//func to clear input display ONLY
function clearInputDisplay(){inputDisplay.value = '';}

//function to clear result string
function clearResultStr(){
    resultStr = '';
    displayResult();
}

//func to check if input display is empty
function displayIsEmpty(){return inputDisplay.value === '';}

//func to check if result str is empty
function resultStrIsEmpty(){return resultStr === '';}

//func to show result in result display
function displayResult(){resultDisplay.textContent = 'Result: ' + resultStr;}

//clear func clears everything
function clear(){
    clearInputDisplay();
    clearResultStr();
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
        if(inputDisplay.value.indexOf('.') === -1){ //dec point doesn't exist
            inputDisplay.value += event.target.value;
        }
    }
    else if(event.target.id==='btn0'){ //skip leading zeroes if display is '0'
        if(inputDisplay.value !== '0') {inputDisplay.value += event.target.value;}
    }
    else{
        inputDisplay.value += event.target.value;
    }
}

//numBtns event listener
const numBtns = Array.from(document.querySelectorAll('.numBtn'));
numBtns.forEach(numBtn => numBtn.addEventListener('click',appendToDisplay));

//func to delete last input entry
function back(){
    if(!displayIsEmpty()){ //if display is not empty
        inputDisplay.value = inputDisplay.value.substring(0,inputDisplay.value.length-1);
    }
    else if(!resultStrIsEmpty()){ //else if result str is not empty
        resultStr = resultStr.substring(0,resultStr.length-1);
        displayResult();
    }
}
//*************************************************************

//backBtn event listener
const backBtn = document.querySelector('#backBtn');
backBtn.addEventListener('click',back);

//func to change between negative and positive
function changeSign(){
    //if charAt index 0 is not - , add - to front
    //else, remove -
    if(inputDisplay.value[0] !== '-'){
        inputDisplay.value = '-' + inputDisplay.value;
    }
    else{
        inputDisplay.value = inputDisplay.value.substring(1,inputDisplay.value.length);
    }
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

function operatorBtnClicked(event){
    //only add operator to resultStr if
    //last char of resultStr is a number
    //or if input display is not empty
    if(numOnlyRegEx.test(resultStr.charAt(resultStr.length-1)) || !displayIsEmpty()){
        //add input.value to resultStr
        resultStr += inputDisplay.value + event.target.value;
        //clear input display
        clearInputDisplay();
        //display resultStr in result display
        displayResult();
    }
}

//operatorBtns event listeners
const opBtns = document.querySelectorAll('.operatorBtn');
opBtns.forEach(opBtn => opBtn.addEventListener('click',operatorBtnClicked));

//function for equal button
function equalBtnClicked(){
}

//equalBtn event listener
const equalBtn = document.querySelector('#equalBtn');
equalBtn.addEventListener('click',equalBtnClicked);





