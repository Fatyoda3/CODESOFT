const v = document.querySelector('#v');
let value = '';

function calculate(e) {
    value += e.innerText;

    v.value += e.innerText;

    if (v.value == "Infinity")
        v.value = "";
}

function displayResult() {
    v.value = eval(value);
    value = "";
}

function c() {
    v.value = "";
}

