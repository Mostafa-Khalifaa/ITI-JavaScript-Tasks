var images = document.getElementsByClassName("marble");

var Index = 0;

var timer;

function startAnim() {
    timer = setInterval(moveNext, 1000);
}

function stopAnim() {
    clearInterval(timer);
}

function moveNext() {
    images[Index].src = "./assets/marble1.jpg";

    Index++;

    if (Index >= images.length) {
        Index = 0;
    }
    images[Index].src = "./assets/marble2.jpg";
}

startAnim();
