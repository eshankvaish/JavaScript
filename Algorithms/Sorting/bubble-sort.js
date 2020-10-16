let bubbleSort = (arr, n) => {
    let i, j;
    for(i=0;i<n-1;i++){
        let swapped = false;  //optimized bubble sort
        for(j=0;j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
                let t=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=t;
                swapped = true;
            }
        }
        if(!swapped) {
            break;
        }
    }
    console.log("Bubble Sort:", arr);
}
bubbleSort([5, 4, 0, 3],4);
