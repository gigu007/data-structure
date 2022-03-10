class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class Stack{
    constructor(){
        this.first=null;
        this.last=null;
        this.size=0;
    }
    push(value){
        let newNode=new Node(value);
        if(!this.first){
            this.first=newNode;
            this.last=newNode;
        }
        else{
            var current=this.first;
            this.first=newNode;
            this.first.next=current;
        }
        this.size++;
        return this;
    }
    pop(){
        if(!this.first)return undefined;
        if(this.first===this.last){
            return null;
        }
        else{
            var temp=this.first;
            this.first=this.first.next;
        }
        this.size--;
        return temp.value;
    }
}
let list=new Stack();
list.push('first');
list.push('second');
list.push('third');
console.log(list);



