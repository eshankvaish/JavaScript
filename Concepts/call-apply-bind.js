let name = {
    firstName: "Eshank",
    lastName: "Vaish",
    getFullName: function (city, state) {
        console.log(this.firstName + " " + this.lastName + " from " + city + ", " + state);
    }
};
name.getFullName("Greater Noida", "Uttar Pradesh");

let getFullNameGlobal = function (city, state) {
    console.log(this.firstName + " " + this.lastName + " from " + city + ", " + state);
}

let name1 = {
    firstName: "Sandal",
    lastName: "Vaish"
};

//using function borrowing
name.getFullName.call(name1, "Greater Noida", "Uttar Pradesh");

//apply method passes arguments in form of array
name.getFullName.apply(name1, ["Greater Noida", "Uttar Pradesh"]);
getFullNameGlobal.call(name, "Greater Noida", "Uttar Pradesh");
getFullNameGlobal.apply(name1, ["Greater Noida", "Uttar Pradesh"])

let newFullName = getFullNameGlobal.bind(name1, "Greater Noida", "Uttar Pradesh");
newFullName();