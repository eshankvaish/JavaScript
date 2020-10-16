let user = {
    firstName: "Eshank",
    lastName: "Vaish",
    address: {
        personal: {
            city: "Budaun",
            state: "Uttar Pradesh"
        },
        work: {
            city: "Greater Noida",
            state: "Uttar Pradesh"
        },
        country: "India"
    }
};
/*
let finalUserObj = {
    user_firstName: "Eshank",
    user_lastName: "Vaish",
    user_address_personal_city: "Budaun",
    ....
}
*/
let finalObj = {};
let objConvert = (obj, parent = "") => {
    for(let key in obj) {
        if(obj.constructor.toString().indexOf("Object") > -1) {
            objConvert(obj[key], parent + "_" + key);
        } else {
            finalObj[parent] = obj;
            return;
        }
    }
};
objConvert(user, "user");
console.log(finalObj);