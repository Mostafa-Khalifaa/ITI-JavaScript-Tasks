
var header = document.getElementById("header");
var nav = document.getElementById("nav");
var center = document.getElementsByClassName("center");

header.style.position = "absolute";
header.style.right = "20px";
header.style.top = "20px";

var clonedHeader = header.cloneNode(true);
document.body.appendChild(clonedHeader);
clonedHeader.style.position = "absolute";
clonedHeader.style.left = "20px";
clonedHeader.style.bottom = "20px";
clonedHeader.style.right = "auto";
clonedHeader.style.top = "auto";


var navigation = document.getElementById("navigation");
navigation.style.position = "absolute";
navigation.style.top = "40%";
navigation.style.left = "45%";


