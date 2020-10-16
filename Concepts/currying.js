let add = function (x, y) {
    console.log(x+y);
}
let addTwo = add.bind(this, 2),
addThree = add.bind(this,3);

addTwo(10);
addThree(10);

/*Using Closure*/

let multiply = (x) => (y) => x*y;
let multiplyByTwo = multiply(2),
multiplyByThree = multiply(3);
console.log(multiplyByTwo(10), multiplyByThree(10));
