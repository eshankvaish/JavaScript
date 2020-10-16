let insertionSort = (arr, n) => {
    let i, key, j;
    for(i=1;i<n;i++){
        key = arr[i];
        j=i-1;
        while(j>=0 && arr[j]>key){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=key;
    }
    console.log("Insertion Sort:", arr);
}
insertionSort([5, 4, 0, 3],4);
