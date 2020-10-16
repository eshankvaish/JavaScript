let partition = (arr, low, high) => {
    let pivot = arr[high];
    let i = low-1;
    for(let j=low;j<=high-1;j++){
        if(arr[j]<pivot){
            i++;
            let t=arr[i];
            arr[i]=arr[j];
            arr[j]=t;
        }
    }
    let t=arr[i+1];
    arr[i+1]=arr[high];
    arr[high]=t;
    return i+1;
}

let quickSort = (arr, low, high) => {
    if(low<high){
        let pi = partition(arr, low, high);
        quickSort(arr,low, pi-1);
        quickSort(arr, pi+1, high);
    }
    console.log("Quick Sort: ", arr);
}
quickSort([5, 4, 0, 3],0, 4-1); //length is 4
