var inputField = document.getElementById("Answer");

function EnterNumber(num) {
    inputField.value = inputField.value + num;
}

function EnterOperator(op) {
    inputField.value = inputField.value + op;
}

function EnterClear() {
    inputField.value = "";
}

function EnterEqual() {
    var expression = inputField.value;

    try {
        var result = eval(expression);
        inputField.value = result;
    } catch (e) {
        inputField.value = "Error";
    }
}