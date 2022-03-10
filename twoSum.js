// function twoSum(arr,sum){
//     var pairs=[];
//     var hashTable=[];
//     for(var i=0;i<arr.length;i++){
//         var currentNum=arr[i];
//         var counterpart=sum-currentNum;
//         if(hashTable.indexOf(counterpart)!==-1){
//             pairs.push([currentNum,counterpart]);
//         }
//         hashTable.push(currentNum);
//     }
//     return pairs;
// }
// console.log(twoSum([1,2,3,4,5,6,7],9));

function  max(arr) {
    var min=arr[0];
    for(var i=0;i<arr.length;i++){
        
       if(min<arr[i]){
           min=arr[i];
       }
    }
    return min;
}
console.log(max([1,2,4,2,3,4,-1]));