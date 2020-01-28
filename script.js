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
        else {this.queueArr.shift();}
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

//clear func clears everything
function clear(){
    input.value = '';
    while(!resultStack.isEmpty()) {resultStack.pop();}
    while(!operatorQueue.isEmpty()) {operatorQueue.remove();}
}
//*************************************************************

//clearBtn event listener
const clearBtn = document.querySelector('#clearBtn');
clearBtn.addEventListener('click',clear);

//call clear upon page loads
window.onload = clear;

//func to add numbers and decimal points to display
function appendToDisplay(event){
    if(!resultStack.isEmpty()){ //if result stack is not empty,
        clearDisplay(); //clear display before appending input
        input.value += event.target.value;
    }
    else{ //if result stack is empty
        if(event.target.id==='decBtn'){ //add dec point only if
            if(input.value.indexOf('.') === -1){ //dec point doesn't exist
                input.value += event.target.value;
            }
        }
        else if(event.target.id==='btn0'){ //skip leading zeroes if display is empty
            if(input.value !== '') {input.value += event.target.value;}
        }
        else{
            input.value += event.target.value;
        }
    }
}
//*************************************************************

//numBtns event listener
const numBtns = Array.from(document.querySelectorAll('.numBtn'));
numBtns.forEach(numBtn => numBtn.addEventListener('click',appendToDisplay));

//func to delete last input entry
function back(){
    if(input.value !== ''){ //if input is not blank
        input.value = input.value.substring(0,input.value.length-1);
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
    if(input.value[0] !== '-'){
        input.value = '-' + input.value;
    }
    else{
        input.value = input.value.substring(1,input.value.length);
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
//*************************************************************

//func to clear display ONLY
function clearDisplay(){input.value = '';}

//func to show a value in display screen
function display(displayValue){input.value = displayValue;}

let leftOperand;

function addBtnClicked(){
    operatorQueue.insert('+'); //insert + to operator queue

    if(resultStack.isEmpty() && input.value !== ''){ 
        //if result stack and display are empty
        //push input on result stack and clear display
        resultStack.push(Number(input.value));
        clearDisplay();
    }
    else{
        if(input.value !== ''){ //if result stack is empty but display is not,
            //assign top of result stack to left operand
            leftOperand = resultStack.pop(); 
            //calc and push result to top of result stack
            resultStack.push(add(leftOperand,Number(input.value)));
            //display latest result
            display(resultStack.peek().toString());
            //remove operator from queue
            operatorQueue.remove();
        }
        else { //if both result stack and display are not empty
            //insert operator in operator queue
            operatorQueue.insert('+');
        }
    }
}

const addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click',addBtnClicked);







