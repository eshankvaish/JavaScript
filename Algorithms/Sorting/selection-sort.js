let selectionSort = (arr,n)=>{
    let i, j,t, min;
    for(i=0;i<n-1;i++){
        min = i;
        for(j=i+1;j<n;j++){
            if(arr[j]<arr[min]){
                min = j;
            }
        }
        t=arr[i];
        arr[i]=arr[min];
        arr[min]=t;
    }
    console.log("Selection Sort: ",arr);
}
selectionSort([5, 4, 0, 3], 4);
