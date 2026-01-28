var mainBox = document.getElementById("mainBox");

mainBox.onclick = function() {
    
    var newBox = mainBox.cloneNode(true);

    newBox.removeAttribute("id");
    
    newBox.style.cursor = "default";

    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var newColor = "rgb(" + r + "," + g + "," + b + ")";

    newBox.style.backgroundColor = newColor;
    
    var label = newBox.querySelector(".label");
    label.innerHTML = newColor;

    document.body.appendChild(newBox);
};