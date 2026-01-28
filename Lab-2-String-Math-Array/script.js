//1.String object
//1.1 
// var userName = prompt("Enter your name:");
// while(userName === "" || !isNaN(userName)) {
//     alert("Name should be character");
//     userName = prompt("Enter your name:");
// }

// var phoneNumber = prompt("Enter your phone number:");
// while(isNaN(phoneNumber) || phoneNumber.length !== 8) {
//     alert("Phone should be number with length 8");
//     phoneNumber = prompt("Enter your phone number:");
// }

// var mobileNumber = prompt("Enter your mobile number:");
// while(isNaN(mobileNumber) || mobileNumber.length !== 11 || 
//       (mobileNumber.substring(0, 3) !== "010" && 
//        mobileNumber.substring(0, 3) !== "011" && 
//        mobileNumber.substring(0, 3) !== "012")) {
//     alert("Mobile should be number with length 11");
//     mobileNumber = prompt("Enter your mobile number:");
// }

// var userEmail = prompt("Enter your email:");
// var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// while(!emailPattern.test(userEmail)) {
//     alert("Please enter a valid email format (example: abc@123.com)!");
//     userEmail = prompt("Enter your email:");
// }

// document.write("<h2>Welcome " + userName + "!</h2>");
// document.write("Phone Number: " + phoneNumber + "<br>");
// document.write("Mobile Number: " + mobileNumber + "<br>");
// document.write("Email: " + userEmail);
///////////////////////////////////////////
//1.2
// var str = prompt("Enter a string:");
// var checkCase = confirm("Consider case? (yes/no):");

// if(checkCase === false) {
//     str = str.toLowerCase();
// }

// var reversed = "";
// for(var i = str.length - 1; i >= 0; i--) {
//     reversed = reversed + str[i];
// }

// if(str === reversed) {
//     alert(str + " is a palindrome");
// } else {
//     alert(str + " is NOT a palindrome");
// }
// ///////////////////////////////////////////

//2.Math object
//2.1
// var radius = prompt("Enter the radius of the circle:");
// radius = Number(radius);

// var area = Math.PI * Math.pow(radius, 2);

// alert("Area of circle = " + area.toFixed(2));

///////////////////////////////////////////
//2.2
// var number = prompt("Enter a number to find its square root:");
// number = Number(number);

// var result = Math.sqrt(number);

// alert("Square root of " + number + " = " + result.toFixed(2));
///////////////////////////////////////////
//3. Array Object
// var arr = [];

// for(var i = 0; i < 3; i++) {
//     var num = prompt("Enter number " + (i + 1) + ":");
//     arr[i] = Number(num);
// }

// var sum = arr[0] + arr[1] + arr[2];
// var multiply = arr[0] * arr[1] * arr[2];
// var divide = arr[0] / arr[1] / arr[2];

// document.write("Array elements: " + arr[0] + ", " + arr[1] + ", " + arr[2] + "<br>");
// document.write("Sum (+): " + sum + "<br>");
// document.write("Multiply (*): " + multiply + "<br>");
// document.write("Divide (/): " + divide.toFixed(2));

///////////////////////////////////////////
//4.Functions
//4.1
// function twoParams(a, b) {
//     if(arguments.length < 2) {
//         throw "ErrorLess than 2 parameters";
//     }
//     if(arguments.length > 2) {
//         throw "Error More than 2 parameters";
//     }
//     return a + b;
// }
// try {
//     console.log(twoParams(5,4));
// } catch(error) {
//     console.log(error);
// }
///////////////////////////////////////////
//4.2
// function reverseParams() {
//     var arr = [];
//     for(var i = 0; i < arguments.length; i++) {
//         arr[i] = arguments[i];
//     }
//     return arr.reverse();
// }
// console.log(reverseParams(1, 2, 3, 4, 5));
//////////////////////////////////////////
//4.3
// function addNumbers() {
//     var sum = 0;
//     for(var i = 0; i < arguments.length; i++) {
//         if(isNaN(arguments[i])) {
//             throw "Error All parameters must be numbers";
//         }
//         sum = sum + arguments[i];
//     }
//     return sum;
// }

// try {
//     console.log(addNumbers(5, 10, 15, 20));
// } catch(error) {
//     console.log(error);
// }
///////////////////////////////////////////
//4.4
function getDayName(dateString) {
    var date = new Date(dateString);
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[date.getDay()];
}

console.log(getDayName("2026-01-04"));