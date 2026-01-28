let timer;
let run = false;

function startMyClock() {
    if (run == false) {
        alert("Clock Started");
        run = true;
        
        updateTime();
        timer = setInterval(updateTime, 1000);
    }
}

function updateTime() {
    let d = new Date();
    let t = d.toLocaleTimeString();
    document.getElementById("myClock").innerHTML = t;
}

document.addEventListener("keydown", function(e) {
    if (e.altKey && e.key === "w") {
        if (run == true) {
            clearInterval(timer);
            alert("Clock stopped");
            run = false;
        }
    }
});