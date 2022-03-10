//recursion is when a function calls itself;
// function binarySearch(arr,key){
//     var middleIdx=Math.floor(arr.length/2);
//     var middleElement=arr[middleIdx];

//     if(middleElement===key)return true;//base case
    
//     else if(middleElement<key && arr.length>1){
//         return binarySearch(arr.splice(middleIdx,arr.length),key);//recursion
//     }
//     else if(middleElement>key && arr.length>1){
//         return binarySearch(arr.splice(0,middleIdx),key);
//     }
//     else{
//         return false;
//     }

// }
// console.log(binarySearch([1,2,3,4,5,6,7],4));

 function multiply(arr){
     var total=1;
     for(var i=0;i<=arr.length;i++){
    // total*=i;
     }
     return total;
 }
 console.log(multiply([1,2,3,4]));
 