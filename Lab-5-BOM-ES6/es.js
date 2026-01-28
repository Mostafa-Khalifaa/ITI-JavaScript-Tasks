let x = 5;
let y = 10;
[x, y] = [y, x];

console.log("swap: x=" + x + ", y=" + y);


// 2) Function using rest parameter
function getMinMax(...numbers) {
    // Using spread operator (...)
    let maxVal = Math.max(...numbers);
    let minVal = Math.min(...numbers);
    
    return [minVal, maxVal];
}

let arr = [5, 20, 1, 88, 3];
let res = getMinMax(...arr);

console.log("Min value: " + res[0]);
console.log("Max value: " + res[1]);