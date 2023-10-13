function main() {
    var X = 0;
    var Y = 5;
    console.log(catchThief(X, Y));
}
function catchThief(X, Y) {
    // Your code goes here
    // let catchTime = 0;

    // if (X == Y || X > Y) {
    //     return 0;
    // }
    // while (true) {
    //     catchTime += 1;
    //     X += 2;
    //     Y += 1;
    //     if (X >= Y) {
    //         return catchTime;
    //     }
    // }
    return Math.abs(X - Y);
}

main();