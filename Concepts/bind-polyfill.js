let name = {
    firstName: "Eshank",
    lastName: "Vaish"
};
let getFullName = function (city, state) {
    console.log(this.firstName + " " + this.lastName + " from " + city + ", " +state)
};
let myFullName = getFullName.bind(name, "Greater Noida");
myFullName("Uttar Pradesh"); //using bind


//own bind function
Function.prototype.myOwnBind = function (...args) {
    let context = this;
    return function (...args2) {
        context.apply(args[0], args.slice(1).concat(args2));
    }
};
//using own bind method
let newFullName = getFullName.myOwnBind(name, "Greater Noida");
newFullName("Uttar Pradesh");