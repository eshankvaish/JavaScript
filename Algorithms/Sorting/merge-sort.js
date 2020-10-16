let merge = (arr, l, m, r) => {
    let i, j, k, n1=m-l+1, n2=r-m;
    let L = [], R=[];
    for(i=0;i<n1;i++){
        L[i]=arr[l+i];
    }
    for(i=0;i<n2;i++){
        R[i]=arr[m+1+i];
    }
    i=j=0, k=l;
    while(i<n1 && j<n2){
        if(L[i]<=R[j]){
            arr[k] = L[i];
            i++;
        }else{
            arr[k] = R[j];
            j++;
        }
        k++;
    }
    while(i<n1){
        arr[k]=L[i];
        i++;
        k++;
    }
    while(j<n2){
        arr[k]=R[j];
        j++;
        k++;
    }
}

let mergeSort = (arr,l,r) => {
    if(l<r){
        let m = parseInt(l+(r-l)/2);
        mergeSort(arr, l, m);
        mergeSort(arr,m+1,r);
        merge(arr, l,m,r);
    }
    console.log("Merge Sort:", arr);
}
mergeSort([5, 4, 0, 3],0, 4-1);  //length is 4
