console.log("calc JS loaded :D");

const a = document.getElementById("result");


function aAssign() {
    a.innerHTML = 3 + 5 + 50 + 500 + 87 + 2;
}


function aAddTwoPlusTwo() {
    a.innerHTML = 2 + 2;
}

function aTenDividedByFive() {
    var result = 10 / 5;
    console.log("Ten Divided By Five Is: " + result);
    a.innerHTML = result;
}

function aBigOlNumber(c, d) {
    var result = c * d;
    a.innerHTML = result;
}

function multiplyTwoNumbers() {
    var firstNumber = document.getElementById("FirstNumber");
    var secondNumber = document.getElementById("SecondNumber");
    var result = firstNumber.value * secondNumber.value;
    a.innerHTML = result;
    console.log("The product of " + firstNumber.value + " and " + secondNumber.value + " is " + result + "!");
}




