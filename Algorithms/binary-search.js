let binarySearch = (arr, low, high, element) => {
    if(low<=high) {
        let mid = Math.floor((low+high)/2);
        if(arr[mid] === element) {
            return mid;
        } else if (element < arr[mid]) {
            high = mid-1;
            return binarySearch(arr, low, high, element);
        } else {
            low = mid +1;
            return binarySearch(arr, low, high, element);
        }
    }
    return -1;
}
let arr = [3,2,4,1];
arr.sort(function(a,b){
    return a-b;
});
let element = 2, high = arr.length;
let res = binarySearch(arr,0,high-1,element);
if(res === -1) {
    console.log("Element not found");
} else {
    console.log("Element found at index: " + res);
}
