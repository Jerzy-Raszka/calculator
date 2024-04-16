let number = "";
let oldNumber = "";
let isSelectingSecondNumber = false;
let isDisplayingResult = false;
let operation;

const equation = document.getElementById("equation");

const onNumberSelect = (_number) =>{
    if(!isDisplayingResult) {
        number += _number;
        document.getElementById("calculatorScreen").innerHTML += _number;
    }
}

const onOperationSelect = (_operation) => {
    selectOperation(_operation);
}

const selectOperation = (_operation) =>{
    if(!isSelectingSecondNumber){
        document.getElementById("calculatorScreen").innerHTML += _operation;
        oldNumber = number;
        isSelectingSecondNumber = true;
        number = "";
        operation = _operation;
        isDisplayingResult = false;
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
            number = Number(oldNumber) / Number(number);
            break;
    }
    document.getElementById("calculatorScreen").innerHTML = number;
    isSelectingSecondNumber = false;
    isDisplayingResult = true;
}
