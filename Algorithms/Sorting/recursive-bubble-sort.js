let recursiveBubbleSort = (arr,n) => {
    if(n===1){
        return;
    }
    for(let i=0;i<n-1;i++){
        if(arr[i]>arr[i+1]){
            let t=arr[i];
            arr[i]=arr[i+1];
            arr[i+1]=t;
        }
        recursiveBubbleSort(arr,n-1);
    }
    console.log("Recursive Bubble Sort:", arr);
}
recursiveBubbleSort([5, 4, 0, 3], 4);
