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

document.querySelectorAll('.btn-num').forEach((element, index) => {
    element.onclick = function () {
        expression += 9 - index;
        document.getElementById('label').innerHTML = expression;
    }
});

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
            result = Number(another) + Number(expression);
            break;
        case "-":
            result = another - expression;
            break;
        case "*":
            result = another * expression;
            break;
        case "/":
            result = another / expression;
            document.getElementById('label').innerHTML = result.toFixed(2);
            break;
        case "^":
            result = pow(another, expression);
            break;            
    }
    document.getElementById('label').innerHTML = result;
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