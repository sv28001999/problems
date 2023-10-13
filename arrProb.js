function main() {
    var arr = [5, 2, 3, 5, 6, 9];
    var sum = 17;
    console.log(findSubarray(arr, sum));
}
function findSubarray(arr, sum) {
    // Your code goes here
    let sumArr = [];
    let tempSum = 0;
    if (arr.length === 1 && sum === arr[0]) {
        sumArr.push(arr[0]);
        return sumArr;
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (tempSum === sum) {
                return sumArr;
            }
            if (tempSum < sum) {
                sumArr.push(arr[j]);
                tempSum += arr[j];
            }
            else {
                sumArr = [];
                tempSum = 0;
                break;
            }
        }
    }
    return "No Sub-Array of Sum Found";
}

// Solution 2
// function findSubarray(arr, sum) {
//     let start = 0;
//     let end = 0;
//     let currSum = arr[0];

//     while (start <= end && end < arr.length) {
//         if (currSum === sum) {
//             return arr.slice(start, end + 1);
//         } else if (currSum < sum) {
//             end++;
//             currSum += arr[end];
//         } else {
//             currSum -= arr[start];
//             start++;
//         }
//     }

//     return null;
// }

main();