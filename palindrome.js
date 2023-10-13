function main() {
    var str = "aabaa";
    console.log(PalindromicSubstring(str));
}

function PalindromicSubstring(str) {
    // Your code goes here
    for (let i = 0; i < str.length; i++) {
        for (let j = str.length - 1; j = (str.length - 1) - i; j--) {
            if (str[i] === str[j]) {
                break;
            }
            else {
                return "none";
            }
        }
    }
    return str;
}

main();