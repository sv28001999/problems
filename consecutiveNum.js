function main() {
    var arr = [-1, 10, 15];
    console.log(Consecutive(arr));
}
function Consecutive(arr) {
    // Your code goes here
    arr.sort((a, b) => a - b);
    let count = 0;
    console.log("Sorted Array:" + arr);
    for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
        if (arr.includes(i)) {
            continue;
        }
        count += 1;
    }
    return count;
}

main();