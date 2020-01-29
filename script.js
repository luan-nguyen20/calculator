let resultStr = ''; //str to store math expression
const inputDisplay = document.querySelector('input');
const resultDisplay = document.querySelector('#resultTxt');
const numOnlyRegEx = /^\d+$/;
let inputMaxLength = 10;

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
function displayResult(){resultDisplay.textContent = 'Result: ' + String(resultStr);}

//clear func clears everything
function clear(){
    clearInputDisplay();
    clearResultStr();
}
//*************************************************************

//clearBtn event listener
const clearBtn = document.querySelector('#clearBtn');
clearBtn.addEventListener('click',clear);

//call clear upon page loads
window.onload = clear;

function appendToDisplay(){
    if(inputDisplay.value.length <= inputMaxLength){ //check max length
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
    //add input display content to result str
    resultStr += inputDisplay.value;
    //if last char of result str is not a number
    //delete last char by calling back func
    if(!numOnlyRegEx.test(resultStr.charAt(resultStr.length-1))){back();}
    //eval resultStr to 2 decimal places and assign to resultStr
    resultStr = eval(resultStr).toFixed(2);
    //display result and clear input display
    displayResult();
    clearInputDisplay();
}

//equalBtn event listener
const equalBtn = document.querySelector('#equalBtn');
equalBtn.addEventListener('click',equalBtnClicked);





