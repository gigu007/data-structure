function reversedWordsArrInPlace(arr){
    // for(var i=0;i<arr.length/2;i++){
    //     var tempVar=arr[i];
    //     arr[i]=arr[arr.length-1-i];
    //     arr[arr.length-1-i]=tempVar;
    // }
    // return arr;

    let n=arr.toString();
    const number=[];
    let str='';
    for(let i=n.length-1,k=0;i>=0;i--,k++){
     number[k]=n[i];
     str=str+number[k];
    

    }
    return str;
}
console.log(reversedWordsArrInPlace([1,2,3,4,5,6]));