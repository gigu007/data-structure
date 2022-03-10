// class priorityQueue{
//     constructor(){
//         this.values=[];
//     }
//     enqueue(val,priority){
//         let newNode=new Node(val,priority);
//         this.values.push(newNode);
//         this.bubbleUp();
//     }
//     bubbleUp(){
//         let idx=this.values.length-1;
//         const element=this.values[idx];
//         while(idx>0){
//             let parentIdx=Math.floor((idx-1)/2);
//             let parent=this.values[parentIdx];
//             if(element<=parent)break;
//             this.values[parentIdx]=element;
//             this.values[idx]=parent;
//             idx=parentIdx;
//         }
//     }
//     dequeue(){
//         const max=this.values[0];
//         const end=this.values.pop();
//         if(this.values.length>0){
//         this.values[0]=end;
//         this.sinkDown();
//         }
//         return max;
//     }
//     sinkDown(){
//         let idx=0;
//         const length=this.values.length;
//         const element=this.values[0];
        
//         while(true){
//             let leftChildIdx=2*idx+1;
//             let rightChildIdx=2*idx+2;
//            let leftChild,rightChild;
//          let swap=null;
//            if(leftChildIdx<length){
//                leftChild=this.values[leftChildIdx];
//            }
//            if(leftChild.priority>element.priority){
//                swap=leftChildIdx;
//            }
//            if(rightChildIdx<length){
//                rightChild=this.values[rightChildIdx];
//                if((rightChild.priority>element.priority && swap===null)||(rightChild.priority>leftChild.priority)){
//                    swap=rightChildIdx;
//                }
//            }
//            if(swap===null)break;
//            this.values[idx]=swap;
//            this.values[swap]=element;
//            idx=swap;

//         }

//     }
// }
// class Node{
//     constructor(val,priority){
//         this.val=val;
//         this.priority=priority;
//     }
// }
// let ER=new priorityQueue();
// ER.enqueue('cholera',7);
// ER.enqueue('malaria',5);
// ER.enqueue('cough',2);
// ER.enqueue('high fever',3);
// ER.enqueue('chronic malaria',6);



// class BinaryHeap{
//     constructor(){
//         this.values=[];

//     }
//     enqueue(){
//         let idx=this.values.length-1;
//         this.values.push(val);
//     }
// }



// let list=new BinaryHeap();
// list.insert('green');
// list.insert('red');
// console.log(list);

// class Student{
//     constructor(firstName,lastName,grade){
//         this.firstName=firstName;
//         this.lastName=lastName;
//         this.grade=grade;
//         this.score=[];
//         this.tardies=0;

//     }
//     getFullName(){
//         return `your fullname is ${this.firstName} ${this.lastName}`
//     }
//     adScore(score){
//         this.score.push(score);
//         return this.score;
//     }
//     getAverage(){
//      let sum=this.score.reduce(function(a,b){a+b});
//      return sum/this.score.length;

//     }

// }
// let firstStudent=new Student('gideon','ukaegbu',4);
// let secondStudent=new Student('graham','udonu',4);
 