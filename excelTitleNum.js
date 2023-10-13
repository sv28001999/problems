function main() {
    var columnTitle = "ZY";
    console.log(titleToNumber(columnTitle));
}
function titleToNumber(columnTitle) {
    // Your code goes here
    let sum = 0;
    for (let i = 0; i < columnTitle.length; i++) {
        const charCode = columnTitle.charCodeAt(i) - 64;
        sum = sum * 26 + charCode;
    }
    return sum;
}

main();