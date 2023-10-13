function main() {
    var n = 10;
    fibonacciSeries(n);
}
function fibonacciSeries(n) {
    // Your code goes here
    let temp = 0;
    let a = 0;
    let b = 1;
    let fibo = '';

    for (let i = 1; i <= n; i++) {
        if (i === 1) {
            fibo = fibo + a;
        }
        if (i == 2) {
            fibo = fibo + ' ' + b;
        }
        if (i >= 3) {
            fibo = fibo + ' ' + (a + b);
            temp = a + b;
            a = b;
            b = temp;
        }
    }
    console.log(fibo);
}

// Solution 2
// function fibonacciSeries(n) {
//     let firstTerm = 0;
//     let secondTerm = 1;
//     let nextTerm = firstTerm + secondTerm;

//     for (let i = 1; i <= n; i++) {
//         console.log(firstTerm);
//         nextTerm = firstTerm + secondTerm;
//         firstTerm = secondTerm;
//         secondTerm = nextTerm;
//     }
// }

main();