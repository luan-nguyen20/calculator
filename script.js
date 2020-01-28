let leftOperand;

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




