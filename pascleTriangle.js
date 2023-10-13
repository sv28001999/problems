function main() {
    var n = 10;
    console.log(pascalsTriangle(n));
}
function pascalsTriangle(n) {
    // Your code goes here
    let triangleArr = [];
    for (let i = 1; i <= n; i++) {
        let elementArr = [];
        if (i === 1) {
            elementArr.push(1)
        }
        if (i === 2) {
            elementArr.push(1);
            elementArr.push(1);
        }
        if (i >= 3) {
            // Main Logic
            for (let num = 0; num <= (triangleArr[i - 2]).length; num++) {
                let triangleRow = triangleArr[i - 2];
                if (num === 0 || num === (triangleArr[i - 2]).length) {
                    elementArr.push(1);
                }
                else {
                    elementArr.push(triangleRow[num] + triangleRow[num - 1]);
                }
            }
        }
        triangleArr.push(elementArr);
    }
    return triangleArr;
}

// Second Way to solve this question
// function pascalsTriangle(n) {
//     const triangle = [];

//     for (let i = 0; i < n; i++) {
//         triangle[i] = [];
//         triangle[i][0] = 1;

//         for (let j = 1; j < i; j++) {
//             triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
//         }

//         triangle[i][i] = 1;
//     }

//     return triangle;
// }

main();