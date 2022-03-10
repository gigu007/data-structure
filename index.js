// function countdown(num){
//     for(i=1;i<num;i++){
//         console.log(i);
//     }
// }
// console.log(countdown(8));
// class Node{
//     constructor(val){
//         this.val=val;
//         this.next=null;
//     }
// }
// class SinglyLinkedList{
//     constructor(){
//         this.head=null;
//         this.tail=null;
//         this.length=0;
//     }
//     push(val){
//         var newNode=new Node(val);
//         if(!this.head){
//           this.head=newNode;
//           this.tail=newNode;
//         }
//         else{
            
//             this.tail.next=newNode;
//             this.tail=newNode;
            
            
//         }
//         this.length++;
//         return this;
//     }
//     pop(){
//         if(!this.head)return undefined;
//         if(this.length===0){
//             this.head=null;
//             this.tail=null;
//         }
//        var currentTail=this.tail;
//        var newTail=currentTail;
//        while(currentTail.next){
//             newTail=currentTail;
//            currentTail=currentTail.next;
           
//        }
//        this.tail=newTail;
//        this.tail.next=null;
//        this.length--;
//       return currentTail;
//     }
// }
// var list=new SinglyLinkedList();
// list.push('first');
// list.push('second');
// list.push('third');
// list.push('fourth');

function mergeSort(arr) {
    if(arr.length<2)return arr;
    var middleIdx=Math.floor(arr.length/2);
    var left=arr.slice(0,middleIdx);
    var right=arr.slice(middleIdx);
    return merge(mergeSort(left),mergeSort(right));
    
}
function merge(arr1,arr2) {
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
    if(arr1.length){
        merged=merged.concat(arr1);
    }
    if(arr2.length){
        merged=merged.concat(arr2);
    }
    return merged;
}

function maxStockProfit(priceArr) {
   var buyPrice=0;
   var sellPrice=0;
   var changeBuyPrice=true;
   var maxProfit=-1
   for(var i=0;i<priceArr.length;i++){
       if(changeBuyPrice){
           buyPrice=priceArr[i];
           sellPrice=priceArr[i+1];
       }
       if(sellPrice<buyPrice)changeBuyPrice=true;
       else{
           var tempProfit=sellPrice-buyPrice;
           if(tempProfit>maxProfit){
               maxProfit=tempProfit;
               changeBuyPrice=false;
           }
       }
   }
   return maxProfit;
}