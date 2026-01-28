function showAscii(e) {
    var code = e.keyCode;
    
    var message = code;

    if (e.altKey) {
        message += " Alt key pressed";
    }
    if (e.ctrlKey) {
        message += " Ctrl key pressed";
    }
    if (e.shiftKey) {
        message += " Shift key pressed";
    }
    console.log(message);
}

function onlyNumbers(e) {
    var code = e.keyCode;

    if (code >= 48 && code <= 57) {
        return true;
    } else {
        return false; 
    }
}