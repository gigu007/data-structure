function mergeSort(arr){
    
    
    if(arr.length<2)return arr;
    var middleIdx=Math.floor(arr.length/2);
    var left=arr.slice(0,middleIdx);
    var right=arr.slice(middleIdx);
    return merge(mergeSort(left),mergeSort(right));
    
}
function merge(arr1,arr2){
    var merged=[];
    var minElem;
    while(arr1.length && arr2.length){
        if(arr1[0]<arr2[0]){
            minElem=arr1.shift();
            merged.push(minElem);
        }
        else{
            minElem=arr2.shift();
            merged.push(minElem);
        }

    }
    if(arr2.length){
        merged=merged.concat(arr2);
    }
    else{
        merged=merged.concat(arr1);
    }
    return merged;
}
console.log(mergeSort([2,4,17,3,6,9,7,12,56,24]));
