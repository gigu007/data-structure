class Node{
    constructor(val){
    this.val=val;
    this.next=null;
    this.prev=null;
    }
}
 class DoublyLinkedList{
constructor(){
    this.head=null;
    this.tail=null;
    this.length=0;
}
  push(val){
      var newNode=new Node(val);
      if(!this.head){
          this.head=newNode;
          this.tail=newNode;
      }
    else{
      this.tail.next=newNode;
      newNode.prev=this.tail;
      this.tail=newNode;
    }
      this.length++;
      return this;
  }
  pop(){
      if(!this.head)return undefined;
     
      
   var poppedNode=this.tail;
   if(this.length===1){
    this.head=null;
    this.tail=null;
}
else{
      this.tail=poppedNode.prev;
      this.tail.next=null;
      poppedNode.prev=null;
}
      this.length--; 
      return poppedNode;
  }
  shift(){
  if(this.length===0)return undefined;
   var oldHead=this.head;
   if(this.length===1){
       this.head=null;
       this.tail=null;
   }
   else{
       this.head=oldHead.next;
       this.head.prev=null;
       oldHead.next=null;
   }
   this.length--;
   console.log(oldHead)
}
unshift(val){
    var newNode=new Node(val);
    
    if(this.length===0){
      this.head=newNode
      this.tail=newNode;
    }
    else{
       
       this.head.prev=newNode; 
       newNode.next=this.head;
       this.head=newNode;

 }
    this.length++;
    return this;
}
get(index){
    if(index<0||index>=this.length)return undefined;
    var count, current;
    if(index<=this.length/2){
        console.log('working from start');
     count=0;
     current=this.head;
    while(count!=index){
        current=current.next;
        count++
    }
    
}else{
    console.log('working from end');
     count=this.length-1;
     current=this.tail;
    while(count !=index){
        current=current.prev;
        count--;
    }

}
   return current;
}
  set(index,val){
      
      foundNode=this.get(index);
      if(foundNode !=null){
          foundNode.val=val;
          return true;
      }
      return false;
      }
    insert(index,val){
        if(index<0||index>this.length)return false;
        if(index===0)this.unshift(val);
        if(index===this.length)this.push(val);
        var newNode=new Node(val);
        var beforeNode=this.get(index -1);
        var afterNode=beforeNode.next;
        beforeNode.next=newNode;
        newNode.prev=beforeNode;
        newNode.next=afterNode;
        afterNode.prev=newNode;
        this.length++;
        return true;
        
    }
    remove(index){
        if(index<0||index>=this.length)return false;
        if(index===0)this.shift();
        if(index===this.length-1)this.pop();
        
        var beforeNode=this.get(index-1);
        var removed=beforeNode.next;
        beforeNode.next=removed.next;
        removed.next=null;
        removed.prev=null;
        this.length--;
        console.log(removed);

    }
   


 }
 var stack=new DoublyLinkedList();
 stack.push('gideon');
 stack.push('baba');
 stack.push('graham');
 stack.push('ikeagbuchi');
 stack.push('me');
 stack.pop();
 stack.shift();
 stack.shift();
 stack.unshift('champ');
 stack.push('when');
 stack.pop();
 console.log(stack)
 