let recursiveInsertionSort = (arr, n) => {
    if(n<=1){
        return;
    }
    recursiveInsertionSort(arr, n-1);
    let last = arr[n-1];
    let j = n-2;
    while(j>=0 && arr[j]>last){
        arr[j+1]=arr[j];
        j--;
    }
    arr[j+1]=last;
    console.log("Recursive Insertion Sort:", arr)
}
recursiveInsertionSort([5, 4, 0, 3],4);
