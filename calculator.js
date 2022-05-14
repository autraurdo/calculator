let video = document.getElementById("bgVideo");
let stopButton = document.getElementById("stopButton");

function playPause() {
    if (video.paused) {
        video.play();
        stopButton.innerHTML = "||";
    } else {
        video.pause();
        stopButton.innerHTML = " > "
    }
}

let expression = document.getElementById("label").innerHTML;
let action = 0;
let another = 0;
let result = 0;

document.getElementById("btnOne").onclick = function() {
    expression += 1;
    document.getElementById('label').innerHTML = expression;
}

document.getElementById("btnTwo").onclick = function() {
    expression += 2;
    document.getElementById('label').innerHTML = expression;
}

document.getElementById("btnThree").onclick = function() {
    expression += 3;
    document.getElementById('label').innerHTML = expression;
}

document.getElementById("btnFour").onclick = function() {
    expression += 4;
    document.getElementById('label').innerHTML = expression;
}

document.getElementById("btnFive").onclick = function() {
    expression += 5;
    document.getElementById('label').innerHTML = expression;
}

document.getElementById("btnSix").onclick = function() {
    expression += 6;
    document.getElementById('label').innerHTML = expression;
}

document.getElementById("btnSeven").onclick = function() {
    expression += 7;
    document.getElementById('label').innerHTML = expression;
}

document.getElementById("btnEight").onclick = function() {
    expression += 8;
    document.getElementById('label').innerHTML = expression;
}

document.getElementById("btnNine").onclick = function() {
    expression += 9;
    document.getElementById('label').innerHTML = expression;
}

document.getElementById("btnZero").onclick = function() {
    expression += 0;
    document.getElementById('label').innerHTML = expression;
}

document.getElementById("btnDot").onclick = function() {
    expression += ".";
    document.getElementById('label').innerHTML = expression;
}

document.getElementById("btnPlus").onclick = function() {
    action = "+";
    another = expression;
    document.getElementById('label').innerHTML = action;
    expression = "";
}

document.getElementById("btnMinus").onclick = function() {
    action = "-";
    another = expression;
    document.getElementById('label').innerHTML = action;
    expression = "";
}

document.getElementById("btnMultiply").onclick = function() {
    action = "*";
    another = expression;
    document.getElementById('label').innerHTML = action;
    expression = "";
}

document.getElementById("btnDivide").onclick = function() {
    action = "/";
    another = expression;
    document.getElementById('label').innerHTML = action;
    expression = "";
}

document.getElementById("btnPow").onclick = function() {
    action = "^"
    another = expression;
    document.getElementById('label').innerHTML = action;
    expression = "";
}

function pow(x, n) {
    let result = x
    for (let i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}

document.getElementById("btnSin").onclick = function() {
    document.getElementById('label').innerHTML = Math.sin(expression).toFixed(2);
    expression = "";
}

document.getElementById("btnCos").onclick = function() {
    document.getElementById('label').innerHTML = Math.cos(expression).toFixed(2);
    expression = "";
}

document.getElementById("btnSign").onclick = function() {
    expression *= -1;
    document.getElementById('label').innerHTML = expression;
}

document.getElementById("btnEquals").onclick = function() {
    switch(action) {
        case "+":
            result = another + expression;
            document.getElementById('label').innerHTML = result;
            break;
        case "-":
            result = another - Number(expression);
            document.getElementById('label').innerHTML = result;
            break;
        case "*":
            result = another * Number(expression);
            document.getElementById('label').innerHTML = result;
            break;
        case "/":
            result = another / Number(expression);
            document.getElementById('label').innerHTML = result.toFixed(2);
            break;
        case "^":
            result = pow(another, expression);
            document.getElementById('label').innerHTML = result;
    }
    expression = "";
}

document.getElementById("btnClean").onclick = function() {
    expression = expression.slice(0, -1);
    document.getElementById('label').innerHTML = expression;
}

document.getElementById("btnClear").onclick = function() {
    expression = "";
    document.getElementById('label').innerHTML = expression;
}