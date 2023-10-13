function main() {
    var num = 10;
    console.log(splitNumber(num));
}
function splitNumber(num) {
    // Your code goes here
    return num.toString().split("").map(n => Number(n));
}

main();