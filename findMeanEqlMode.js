function main() {
    // var arr = readLine().split(" ").map(x => parseInt(x));
    let arr = [4, 4, 4, 6, 2];
    console.log(meanEqualsMode(arr));
}

function meanEqualsMode(arr) {
    // Your code goes here
    var sum = arr.reduce((a, b) => a + b, 0);
    var mean = sum / arr.length;
    const counts = {};
    let maxCount = 0;
    let mode = null;

    for (let num of arr) {
        counts[num] = (counts[num] || 0) + 1;
        if (counts[num] > maxCount) {
            maxCount = counts[num];
            mode = num;
        }
    }
    return mean === mode ? 1 : 0;
}

main();