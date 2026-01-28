
//////////////////////////////////////////
// var arr = [];
// for(var i = 0; i < 5; i++) {
//     var num = prompt("Enter number " + (i + 1) + ":");
//     arr[i] = Number(num);
// }

// document.write(" you entered the values of " + arr.join(", ") + "<br><br>");

// var des = arr.slice();
// des.sort(function(a, b) {
//     return b - a;
// });
// document.write("values after being sorted descending " + des.join(",") + "<br><br>");

// var asc = arr.slice();
// asc.sort(function(a, b) {
//     return a - b;
// });
// document.write("values after being sorted ascending " + asc.join(","));
//////////////////////////////////////////

var table = document.getElementById("myTable");

table.style.borderCollapse = "collapse";
table.style.margin = "20px";

var headerRow = table.insertRow();
var header1 = document.createElement("th");
var header2 = document.createElement("th");
header1.innerHTML = "Name";
header2.innerHTML = "Age";
headerRow.appendChild(header1);
headerRow.appendChild(header2);

header1.style.border = "2px solid black";
header1.style.padding = "10px";
header2.style.border = "2px solid black";
header2.style.padding = "10px";

var numPersons = prompt("enter the no. of persons:");
numPersons = Number(numPersons);

while(isNaN(numPersons) || numPersons <= 0) {
    alert("Please enter a valid number");
    numPersons = prompt("enter the no. of persons:");
    numPersons = Number(numPersons);
}

for(var i = 0; i < numPersons; i++) {
    var userName = prompt("enter user's name:");
    while(userName.length <= 3 || userName.length >= 10) {
        alert("Name length should be more than 3 and less than 10");
        userName = prompt("enter user's name:");
    }
    
    var userAge = prompt("enter user's age:");
    userAge = Number(userAge);
    while(isNaN(userAge) || userAge <= 10 || userAge >= 60) {
        alert("Age should be greater than 10 and less than 60");
        userAge = prompt("enter user's age:");
        userAge = Number(userAge);
    }
    
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    
    cell1.innerHTML = userName;
    cell2.innerHTML = userAge;
    
    cell1.style.border = "2px solid black";
    cell1.style.padding = "10px";
    
    cell2.style.border = "2px solid black";
    cell2.style.padding = "10px";
}
//////////////////////////////////////////