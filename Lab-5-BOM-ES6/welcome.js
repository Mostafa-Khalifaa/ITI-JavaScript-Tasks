const params = new URLSearchParams(window.location.search);
//alert(encodeURIComponent("mostafa khalifa"));
let name = params.get('name');
let title = params.get('title');
let email = params.get('email');
let mobile = params.get('mobile');
let address = params.get('address');
let gender = params.get('gender');

document.getElementById("greeting").innerHTML = "Welcome " + title + " " + name;

let text = "<ul>";
text += "<li>Email: " + email + "</li>";
text += "<li>Mobile: " + mobile + "</li>";
text += "<li>Address: " + address + "</li>";
text += "<li>Gender: " + gender + "</li>";
text += "</ul>";

document.getElementById("infoDisplay").innerHTML = text;