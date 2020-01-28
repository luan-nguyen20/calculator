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

let leftOperand;
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

//func to add numbers and decimal points to display
function appendToDisplay(event){
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





