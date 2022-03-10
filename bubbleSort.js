function bubbleSort(arr){
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr.length;j++){
            if(arr[j]>arr[j+1]){
              var temp=arr[j];
              arr[j]=arr[j+1];
              arr[j+1]=temp;
              
            }
            // console.log(arr[j]);
            console.log(arr[j],arr[j+1]);
        }
        
      

    }
    return arr;//  function digitCounts(num){

}      

console.log(bubbleSort([4,9,2,7,5,1,8]));
function binarySearch(arr,key){
    var mid=Math.floor(arr.length/2);
    var middleElement=arr[mid];
    if(middleElement===key)return true;
    if(middleElement<key&&arr.lengt>1){

        return binarySearch(arr.splice(0,mid),key);
    }
    else if(middleElement>key){
        return binarySearch(arr.splice(mid),key);
    }
    else{
        return false;
    }

}
function binarySearch(arr,key){
    var mid=Math.floor(arr.length/2);
    var left=arr.splice(0,mid);
    var right=arr.splice(mid);
    var middleElement=arr[mid];
    if(middleElement>key){
        left=mid +1;
    }
    else if(middleElement<key){
        right=mid -1;
    }
}