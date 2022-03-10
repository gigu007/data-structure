//  function getDigit(num,i) {
//      return Math.floor(Math.abs(num)/Math.pow(10,i))%10;

     
//  }
//  console.log(getDigit(8794,2));
//  function digitCounts(num){
//      if(num===0)return 1;
//      return Math.floor(Math.log10(Math.abs(num)))+1;

//  }
//  console.log(digitCounts([456,3457]));
//  function mostDigit(nums) {
//    let maxsDigit=0;
//    for(var i=0;i<nums.length;i++){
//        maxsDigit=Math.max(maxsDigit,digitCounts(nums[i]));
//    }
//     return maxsDigit;
//  }
//  console.log(mostDigit([2,3,4,5,6,458]));

function bubleSort(arr) {
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr.length;j++){
            if(arr[j]>arr[j+1]){
                var temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
            
        }
    }
    return arr; 
}
console.log(bubleSort([23,12,34,2,37,21]));
function selectionSort(arr) {
    for(var i=0;i<arr.length;i++){
        var lowest=i;
        for(var j=i+1;j<arr.length;j++){
            if(arr[lowest]>arr[j]){
                lowest=j;
            }
        }
        var temp =arr[i];
        arr[i]=arr[lowest];
        arr[lowest]=temp;
    }
    return arr;
    
}
console.log(selectionSort([23,34,12,56,25,45]));

