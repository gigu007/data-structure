class Node{
    constructor(val){
        this.val=val;
        this.next=null;
        
    }
}
class SinglyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }
    push(val){
        var newNode=new Node(val)
        if(!this.head){
            this.head=newNode;
            this.tail=this.head;
        }
        else{
            this.tail.next=newNode;
            this.tail=newNode;
        }
        this.length++
        return this;
    }
    pop(){
        var current=this.head;
        var newTail=current;
        if(!this.head)return undefined;
        while(current.next){
            newTail=current;
            current=current.next;
        }
        this.tail=newTail;
        this.tail.next=null;
        this.length--;
        if(this.length===0){
            this.head=null;
     
 }
}
    shift(){
        if(!this.head)return undefined;
        if(this.length===0){
            this.head=null;
            this.tail=null;
        }
        var oldHead=this.head;
        this.head=oldHead.next;
        this.length--;
        return oldHead;
        
        
    
        
    }
    unshift(val){
    var newNode=new Node(val);

       if(!this.head){
           this.head=newNode;
           this.tail=newNode;
           
       }
       else{
           newNode.next=this.head;
           this.head=newNode;
       }
     this.length++;
     return newNode;
    }
    get(index){
        if(index<0||index>=this.length)return null;
        var counter=0;
        var current=this.head;
        while(counter !==index){
            current=current.next;
            counter++;
        }
       return current;
    }
    set(index,val){
        var foundNode=this.get(index);
        if(foundNode){
            foundNode.val=val;
            return true;
        }
        return false;
    }
    insert(index,val){
        if(index<0||index>this.length)return false;
        if(index===this.length)return  !!this.push(val);
        
        if(index===0)return   !!this.unshift(val);
        
        var newNode=new Node(val)
        var prev=this.get(index -1);
        var temp=prev.next
        prev.next=newNode;
        newNode.next=temp;
        this.length++;
        return true;
    }
    remove(index){
        if(index<0||index>this.length)return undefined;

        if(index===this.length-1)return this.pop();
        if(index===0)return this.shift();
        var prevNode=this.get(index -1);
        var removed=prevNode.next;
        prevNode.next=removed.next;
        this.length--;
        return removed;
        
    }
    reverse(){
        if(this.length===0)return undefined;
        if(this.length===1)return this;
        var current=this.head;
        this.head=this.tail;
        this.tail=current;
        var next;
        var prev=null;
        for(i=0;i<this.length;i++){
            next=current.next;
            current.next=prev;
            prev=current;
            current=next;
        }
        return this;
    }
    get(index){
        if(index<0||index>=this.length);
        var count=0;
        var current=this.head;
        while(current !==index){
            current=current.next;
            count++;
        }
        return this;
    }
    pop(){
        if(!this.head)return null;
        var current=this.tail;
        var newTail=current;
        while(current.next){
            newTail=current;
            current=current.next;
        }
        this.tail=newTail;
        this.tail.next=null;
        if(this.length===0){
            this.head=null;
            this.tail=null;
        }
    }
    reverse(arr){
        var node=this.head;
        this.head=this.tail;
        this.tail=node;
        var next;
        var prev=null;
        for(var i=0;i<arr.length;i++){
            next=node.next;
            node.next=prev;
            prev=next;
            next=node;
        }

    }
    
}
var stack=new SinglyLinkedList();
 stack.push('hi');
 stack.push('baba');
 stack.push('gig');
stack.shift();
stack.unshift('graham');
stack.unshift('gideon');
stack.get(2);
stack.set(2,'ike');
stack.reverse();
 console.log(stack);

 class Node{
     constructor(){
         this.length=0;
     }
 }
 class SinglyLinkedList{
     constructor(){
         this.head=null;
         this.tail=null;
     }
     push(val){
         var newNode=new Node(val);
         if(!this.head){
             this.head=newNode;
             this.tail=newNode;
         }else{
             this.tail.next=newNode;
         }
     }
     get(index){
         if(index>=this.length || index<0)return undefined;
         var count=0;
         var current=this.head;
         while(count!==index){
             current=current.next;
             count++;
         }
         return this;

         
     }
     insert(index,val){
         if(index===0){
            
             return !!this.unshift(val);
         }
         if(index===this.length){
             return !!this.push(val);//!! is a boolean which means true while ! means false;
         }
         if(index<0||index>=this.length)return false;
         var temp=this.get(index-1);
         var newNode=new Node(val);
         var prev=temp.next;
         temp.next=newNode;
         newNode.next=prev;
         this.length++;
        }
        remove(index){
            if(index<0||index>=this.length)return false;
            if(index===this.length-1)return this.pop();
            if(index===0)return this.shift();
            var prev=this.get(index-1);
            var removedNode=prev.next;
             prev.next=removedNode.next;
             this.length--;
             return removedNode;

        }
        
    }   
     
