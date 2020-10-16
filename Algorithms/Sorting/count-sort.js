let countSort = (arr, n) => {
    let output = Array(n);
    let max=Math.max.apply(null, arr);
    let count=Array(max+1).fill(0);
    let i;
    for(i=0;i<n;i++){
        count[arr[i]]++;
    }
    for(i=1;i<=max;i++){
        count[i]+=count[i-1];
    }
    for(i=n-1;i>=0;i--){
        count[arr[i]]--;
        output[count[arr[i]]]=arr[i];
    }
    for(i=0;i<n;i++){
        arr[i]=output[i];
    }
    console.log("Count Sort:" , arr);
}
countSort([5, 4, 0, 3], 4);