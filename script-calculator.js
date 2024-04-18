let number = "";
let oldNumber = "";
let isSelectingSecondNumber = false;
let isDisplayingResult = false;
let operation = "";
const screen = document.getElementById("calculator-screen");

const equation = document.getElementById("equation");

const onNumberSelect = (_number) =>{
    if(!isDisplayingResult) {
        number += _number;
        screen.innerHTML += _number;
    }
}

const onOperationSelect = (_operation) => {
    selectOperation(_operation);
}

const onClear = ()=> {
    number = "";
    oldNumber = "";
    isSelectingSecondNumber = false;
    isDisplayingResult = false;
    operation = "";
    screen.innerHTML = "";
}

const onDelete = () =>{
        if (!isDisplayingResult && number !== "") {
            screen.innerHTML = screen.innerHTML.replace(/.$/, '');
            number = number.replace(/.$/, '');
        }
}

const selectOperation = (_operation) =>{
    if(!isSelectingSecondNumber){
        screen.innerHTML += _operation;
        oldNumber = number;
        isSelectingSecondNumber = true;
        number = "";
        operation = _operation;
        isDisplayingResult = false;
    }
    if(isSelectingSecondNumber && number === ""){
        screen.innerHTML = screen.innerHTML.replace(/.$/, '');
        screen.innerHTML += _operation;
        operation = _operation;
    }
}

equation.addEventListener("click", function(){
    if(isSelectingSecondNumber) {
        calculateAndShowResult();
    }
})

function calculateAndShowResult() {
    switch (operation) {
        case '+':
            number = Number(oldNumber) + Number(number);
            break;
        case '-':
            number = Number(oldNumber) - Number(number);
            break;
        case '*':
            number = Number(oldNumber) * Number(number);
            break;
        case '/':
            try{
                if(number === "0"){
                    throw "Cant divide by zero";
                }
            }
            catch(err){
                location.reload();
            }
            number = Number(oldNumber) / Number(number);
            break;
    }
    screen.innerHTML = number;
    isSelectingSecondNumber = false;
    isDisplayingResult = true;
}
