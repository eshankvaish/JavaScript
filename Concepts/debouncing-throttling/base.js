let count = 0, count1=0;
let getDebounceData = () => {
    console.log("Getting Debounce Data: "+ ++count);
}

let debounceFunction = (fn, t) => {
    let timer;
    return function () {
        let context = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            getDebounceData.apply(context, args);
        }, t);
    }
}
document.querySelector('#debouncing-field').addEventListener('keyup' ,debounceFunction(getDebounceData, 300));

let getThrottleData = () => {
    console.log("Getting Throttle Data: "  + ++count1);
}

let throttleFunction = (fn, t) => {
    let flag = true;
    return function () {
        if(flag) {
            let context = this, args = arguments;
            getThrottleData.apply(context, args);
            flag = false;
            setTimeout(() => {
                flag = true;
            }, t);
        }
    }
}
document.querySelector('#throttling-field').addEventListener('keyup' ,throttleFunction(getThrottleData, 300));
