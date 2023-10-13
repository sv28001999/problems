function main() {
    var s = "tryst";
    console.log(isEasyToPronounce(s));
}
function isEasyToPronounce(s) {
    // Your code goes here
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let chr of s) {
        if (!vowels.includes(chr)) {
            count += 1;
        }
        if (vowels.includes()) {
            count = 0;
        }
        if (count >= 4) {
            return "NO";
        }
    }
    return "YES";
}

main();