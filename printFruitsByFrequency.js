function main() {
    var arr = ['apple', 'banana', 'banana', 'cherry', 'apple', 'banana', 'cherry', 'cherry', 'cherry'];
    console.log(printFruitsByFrequency(arr));
}

function printFruitsByFrequency(fruits) {
    const fruitObj = {}; // Object to store the frequency of each fruit
    for (let fruit of fruits) {
        fruitObj[fruit] = (fruitObj[fruit] || 0) + 1;
    }
    const sortedFruits = Object.keys(fruitObj).sort((a, b) => {
        if (fruitObj[b] === fruitObj[a]) { // If frequency is same, sort based on their index in the original array
            return fruits.indexOf(a) - fruits.indexOf(b);
        }
        return fruitObj[b] - fruitObj[a]; // Sort based on fruitObj
    });
    return sortedFruits;
}

main();
// let myObj = { apple: 2, banana: 3, cherry: 4 }
// console.log(Object.keys(myObj));