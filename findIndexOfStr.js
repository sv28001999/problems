function main() {
    var arr = ["AlmaBetter", "Newton Class", "Edureka", "Unacademy"];
    var str = "Unacademy";
    console.log(findIndex(arr, str));
}
function findIndex(arr, str) {
    // Your code goes here
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === str) {
            return i;
        }
    }
    return -1;
}

// Solution 2
// function findIndex(arr, str) {
//     return arr.indexOf(str) ? arr.indexOf(str) : -1
// }

main();