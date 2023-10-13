function main() {
    var n = 9;
    console.log(isPrime(n));
}
function isPrime(number) {
    // Your code goes here
    if (number < 2) {
        return false;
    }

    // Check for divisibility by numbers from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    // If no divisors were found, the number is prime
    return true;
}

main();