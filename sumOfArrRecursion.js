// Do not alter or remove the function main() 
function main() {
    var arr = [1, 2, 3, 4, 5];
    console.log(sumArray(arr));
}
function sumArray(arr) {
    // Your code goes here
    if (arr.length === 0) {
        return 0;
    }
    return arr[0] + sumArray(arr.slice(1));
}

main();