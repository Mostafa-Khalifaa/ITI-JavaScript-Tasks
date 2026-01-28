
var images = ["./assets/1.jpg", "./assets/2.jpg", "./assets/3.jpg", "./assets/4.jpg"];
var i = 0; 
var timer; 

function nextPic() {

    if (i < images.length - 1) {
        i++; 
        document.getElementById("myImage").src = images[i];
    }
}

function prevPic() {
    if (i > 0) {
        i--; 
        document.getElementById("myImage").src = images[i];
    }
}

function startSlide() {
    clearInterval(timer);
        timer = setInterval(changeImage, 2000);
    
}

function changeImage() {
    i++; 
        if (i >= images.length) {
        i = 0;
    }
    
    document.getElementById("myImage").src = images[i];
}

function stopSlide() {
    clearInterval(timer); 
    timer = null; 
}