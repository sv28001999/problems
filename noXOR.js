function main() {
    var x = 1;
    var y = 2;
    console.log(myXOR(x, y));
}
function myXOR(x, y) {
    // Your code goes here
    let binaryX = x.toString(2);
    let binaryY = y.toString(2);
    let newElement = '';
    binaryX.length <= binaryY.length ? binaryX = binaryX.padStart(binaryY.length, '0') : binaryY = binaryY.padStart(binaryX.length, '0');
    for (let i = binaryY.length - 1; i >= 0; i--) {
        newElement = (binaryX[i] || 0) === (binaryY[i] || 0) ? newElement = '0' + newElement : newElement = '1' + newElement;
    }
    return parseInt(newElement, 2);
}

// Solution 2
// function myXOR(x, y) {
//     return (x & (~y)) | ((~x) & y);
// }

main();

// let ex = '10';
// ex = ex.padStart(5, '0');
// console.log(ex);