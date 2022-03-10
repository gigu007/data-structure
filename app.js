// function binarySearch(array,key){
//     var low=0;
//     var high=array.length-1;
//     var mid;
//     var element;
//     for(var i=0;i<array.length;i++){
//          mid=Math.floor((low+high)/2,10);
//          element=array[mid];
//          if(element>key){
//              low=mid+1;
//          }
//          if(element<key){
//              high=mid-1;
//          }
//          return element;

//     }
//     return -1;

// }
// console.log(binarySearch([1,2,3,4,5,6,7,9,8],5));
// function binarySearch(arr,key) {
//     var mid=Math.floor(arr.length/2);
//     var middleElement=arr[mid];
//     if(middleElement===key)return true;
//     if(middleElement<key&&arr.length>1){
//         return binarySearch(arr.splice(mid),key);
//     }
//     else if(middleElement>key){
//         return binarySearch(arr.splice(0,mid));
//     }
//     else{
//         return false;
//     }
    
// }
//  console.log(binarySearch([1,2,3,4,5,6,7,9,8],5));


//  function reverse(str){
//      for(var i=0;i<str.length/2;i++){
         
//          var tempVar=str[i];
//          str[i]=str[str.length-1-i];
//          str[str.length-1-i]=tempVar;
//      }
//      return str
//  }
//  console.log(reverse(['a','b','c','d']));
 
class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class Queue{
    constructor(){
        this.first=null;
        this.last=null;
        this.size=0;
    }
    push(value){
        var newNode=this.Node(value);
        if(!this.first){
            this.first=newNode;
            this.last=newNode;
            
        }
        else{
            this.last.next=newNode;
            this.last=newNode;
        }
        this.size++;
        return this;
    }
    pop(){
        if(!this.first)return undefined;
        if(this.size===1){
            this.first=null;
            this.last=null;
        }
        else{
            var oldfirst=this.first;
            this.first=this.first.next;
            
        }
        this.size--;
        return oldfirst.value
    }
    
}