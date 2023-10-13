function main() {
    var n = 3;
    console.log(climbStairs(n));
}
function climbStairs(n) {
    // Your code goes here
    function findFactorial(num) {
        let fact = 1;
        for (let i = 1; i <= num; i++) {
            fact *= i;
        }
        return fact;
    }
    return n > 1 ? (n == 2 ? 2 : findFactorial(n) / 2 * (n - 2)) : 1;
}

main();