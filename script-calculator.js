let number = "";
let oldNumber = "";
let operation;
let counter = 0;
let inputOff = false;
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const addition = document.getElementById("addition");
const subtraction = document.getElementById("subtraction");
const multiplication = document.getElementById("multiplication");
const division = document.getElementById("division");
const equation = document.getElementById("equation");


    one.addEventListener("click", function () {
        if(inputOff === false) {
            number += "1";
            document.getElementById("calculatorScreen").innerHTML += "1";
        }
    })
    two.addEventListener("click", function () {
        if(inputOff === false) {
            number += "2";
            document.getElementById("calculatorScreen").innerHTML += "2";
        }
    })
    three.addEventListener("click", function () {
        if(inputOff === false) {
            number += "3";
            document.getElementById("calculatorScreen").innerHTML += "3";
        }
    })
    four.addEventListener("click", function () {
        if(inputOff === false) {
            number += "4";
            document.getElementById("calculatorScreen").innerHTML += "4";
        }
    })
    five.addEventListener("click", function () {
        if(inputOff === false) {
            number += "5";
            document.getElementById("calculatorScreen").innerHTML += "5";
        }
    })
    six.addEventListener("click", function () {
        if(inputOff === false) {
            number += "6";
            document.getElementById("calculatorScreen").innerHTML += "6";
        }
    })
    seven.addEventListener("click", function () {
        if(inputOff === false) {
            number += "7";
            document.getElementById("calculatorScreen").innerHTML += "7";
        }
    })
    eight.addEventListener("click", function () {
        if(inputOff === false) {
            number += "8";
            document.getElementById("calculatorScreen").innerHTML += "8";
        }
        })
    nine.addEventListener("click", function () {
        if(inputOff === false) {
            number += "9";
            document.getElementById("calculatorScreen").innerHTML += "9";
        }
    })
    zero.addEventListener("click", function () {
        if(inputOff === false) {
            number += "0";
            document.getElementById("calculatorScreen").innerHTML += "0";
        }
    })
addition.addEventListener("click", function(){
    if(counter === 0) {
        document.getElementById("calculatorScreen").innerHTML += "+";
        oldNumber = number;
        number = "";
        operation = 0;
        counter++;
        inputOff = false;
    }
})
subtraction.addEventListener("click", function(){
    if(counter === 0) {
        document.getElementById("calculatorScreen").innerHTML += "-";
        oldNumber = number;
        number = "";
        operation = 1;
        counter++;
        inputOff = false;
    }
})
multiplication.addEventListener("click", function(){
    if(counter === 0) {
        document.getElementById("calculatorScreen").innerHTML += "*";
        oldNumber = number;
        number = "";
        operation = 2;
        counter++;
        inputOff = false;
    }
})
division.addEventListener("click", function(){
    if(counter === 0) {
        document.getElementById("calculatorScreen").innerHTML += "/";
        oldNumber = number;
        number = "";
        operation = 3;
        counter++;
        inputOff = false;
    }
})

equation.addEventListener("click", function(){
    if(counter === 1) {
        showOperation(operation);
    }
})

function showOperation(operation) {
    switch (operation) {
        case 0:
            number = Number(oldNumber) + Number(number);
            document.getElementById("calculatorScreen").innerHTML = number;
            counter = 0;
            inputOff = true;
            break;
        case 1:
            number = Number(oldNumber) - Number(number);
            document.getElementById("calculatorScreen").innerHTML = number;
            counter = 0;
            inputOff = true;
            break;
        case 2:
            number = Number(oldNumber) * Number(number);
            document.getElementById("calculatorScreen").innerHTML = number;
            counter = 0;
            inputOff = true;
            break;
        case 3:
            number = Number(oldNumber) / Number(number);
            document.getElementById("calculatorScreen").innerHTML = number;
            counter = 0;
            inputOff = true;
            break;
    }
}