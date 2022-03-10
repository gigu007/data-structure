

// class Node{
//     constructor(value){
//         this.value=value;
//         this.next=null;
//     }
// }
// class Queue{
//     constructor(){
//         this.first=null;
//         this.last=null;
//         this.size=0;
//     }
//     push(value){
//         var newNode=new Node(value);
//         if(!this.first){
//             this.first=newNode;
//             this.last=newNode;

//         }else{
            
//             this.last.next=newNode;
//             this.last=newNode
//         }
//         this.size++;
//         return this;
    


//     }
//     pop(){
//      if(!this.first)return undefined;
//       var temp=this.first; 
    
    
//       if(this.first===this.last){
        
//           this.last=null;
//       }
//       this.first=this.first.next;
//       this.size--;
//       return temp.value;
//     }
// }
// var list=new Queue();
// list.push('the first');
// list.push('the second');
// list.push('the third');
// list.push('the fourth');

// console.log(list);

    
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
        var newNode=new Node(value);
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
        if(!this.first){
            return undefined;
        }
        if(this.first===this.last){
            this.last=null;
        }
        else{
            var temp=this.first;
            this.first=this.first.next;
            // this.last.next=null;
            
        }
        this.size--;
        return temp.value; 
    }
}
let list=new Queue();
list.push('the first');
list.push('the second');
list.push('the third');
list.push('the fourth');

console.log(list);
