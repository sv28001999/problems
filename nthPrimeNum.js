function main() {
    var num = 9;
    console.log(PrimeMover(num));
}
function PrimeMover(num) {
    // Your code goes here
    function isPrime(number) {
        if (number < 2) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }
    for (let i = 1; i <= 10000; i++) {
        if (isPrime(i)) {
            num -= 1;
        }
        if (num === 0) {
            return i;
        }
    }
}

main();