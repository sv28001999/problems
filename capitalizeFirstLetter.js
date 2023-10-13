function main() {
    var str = "hello world my name is shivam";
    console.log(letterCapitalize(str));
}
function letterCapitalize(str) {
    // Your code goes here
    let newString = "";
    str.split(" ").forEach(word => {
        newString += `${word[0].toUpperCase()}${word.slice(1)} `;
    });
    return newString.trim();
}

main();