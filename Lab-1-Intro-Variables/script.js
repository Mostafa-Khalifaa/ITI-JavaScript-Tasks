


//question 1
var y;
console.log(y);
///////////////////////
console.log(y);
///////////////////////
var x=10;
var y = 20;
console.log(y*x-2);
//////////////////////
var y;
console.log(typeof y);
/////////////////////
var x = "1";
var y = 2;
console.log(x+y);
////////////////////
var x = 1;
var y = true;
console.log(x+y);

//question 2
// var msg = prompt("Enter a message:");

// for(var i = 1; i <= 6; i++) {
//     document.write("<h" + i + ">" + msg + "</h" + i + ">");
// }

//question 3
// var sum = 0;
// var num;

// while(true) {
//     num = prompt("Enter a number or enter 0 to stop:");
//     num = Number(num);
    
//     if(isNaN(num)) {
//         alert("Please enter a valid number");
//         continue;
//     }
    
//     if(num === 0) {
//         break;
//     }
    
//     sum = sum + num;
    
//     if(sum > 100) {
//         break;
//     }
// }

// alert("Total sum: " + sum);

//question 4
var name;
var birth;

while(true) {
    name = prompt("Enter your name:");
    if(isNaN(name) && name !== "") {
        break;
    }
    alert("enter a valid name");
}

while(true) {
    birth = prompt("Enter your birth year:");
    birth = Number(birth);
    if(!isNaN(birth) && birth < 2010) {
        break;
    }
    alert("enter year less than 2010");
}

var age = 2026 - birth;

document.write("Name: " + name + "<br>");
document.write("Birth year: " + birth + "<br>");
document.write("Age: " + age);