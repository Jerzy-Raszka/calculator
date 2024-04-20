let number = "";
let oldNumber = "";
let isSelectingSecondNumber = false;
let isDisplayingResult = false;
let operation = "";
let isOperationSelected = false;
let isDot = false;
const screen = document.getElementById("calculator-screen");

const equation = document.getElementById("equation");

const onNumberSelect = (_number) =>{
    if(!isDisplayingResult) {
        if(_number !== "." ) {
            screen.innerHTML += _number;
            if (_number === "0" && number === "") {
                screen.innerHTML += ".";
                number += _number + "."
                isDot = true;
            } else {
                number += _number;
            }
        }
        else if(!isDot) {
            if(number === "") {
                screen.innerHTML += "0.";
                number += "0.";
                isDot = true;
            }
            else {
                screen.innerHTML += ".";
                number += _number;
                isDot = true;
            }
        }
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
    isDot = false;
    isOperationSelected = false;
    operation = "";
    screen.innerHTML = "";
}

const onDelete = () =>{
        if (!isDisplayingResult && number !== "") {
            screen.innerHTML = screen.innerHTML.replace(/.$/, '');
            number = number.replace(/.$/, '');
            if(number.endsWith(".")){
                isDot = false;
            }
        }
}

const selectOperation = (_operation) =>{
    isDot = false;
    if(number !== "") {
        if (_operation === "-" && number === "") {
            screen.innerHTML += _operation;
            number += "-";
        } else if (!isSelectingSecondNumber) {
            screen.innerHTML += _operation;
            oldNumber = number;
            isSelectingSecondNumber = true;
            number = "";
            operation = _operation;
            isDisplayingResult = false;
            isOperationSelected = true;
        }
    }
}

equation.addEventListener("click", function(){
    if(isSelectingSecondNumber && number !== "") {
        isDot = false;
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
    screen.innerHTML = parseFloat(Number(number).toFixed(5));
    isSelectingSecondNumber = false;
    isDisplayingResult = true;
}
