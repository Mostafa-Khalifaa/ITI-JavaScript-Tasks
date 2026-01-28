let timer = setTimeout(function() {
    alert("You have not entered data for 30 seconds.");
}, 10000); 

function stopTimer() {
    clearTimeout(timer); 
}