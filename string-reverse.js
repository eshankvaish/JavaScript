let string = " Welcome to the World of Possibilities";
console.log(1);
let reverseBySeparator = (string, separator) => {
    return string.split(separator).reverse().join(separator);
};
console.log(reverseBySeparator(string, ""));
console.log(reverseBySeparator(reverseBySeparator(string, ""), " "));