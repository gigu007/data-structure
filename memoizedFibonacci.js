

function memoizedFiboNacci(index,cache){
  cache=cache ||[];
  if(cache[index])return cache[index];
  else{
    if(index<3)return 1;
    else{cache[index]=memoizedFiboNacci(index-1,cache)+memoizedFiboNacci(index-2,cache);
    }
  }
  return cache[index];
}
console.log(memoizedFiboNacci(89));
class Node{
  constructor(val){
    this.val=val;
    this.next=null;

  }
}
class singlyLinkedList{
  constructor(){
    this.head=null;
    this.tail=null;
    this.length=0;
  }
  push(val){
    var newNode=new Node(val);
    if(this.length===0){
      this.head=newNode;
      this.tail=newNode;
    }
    else{
      this.tail.next=newNode;
      this.tail=newNode;
    }
    this.length++;
    return this;
  }
  unshift(val){
    var newNode=new Node(val);
    if(this.length===0){
      this.head=newNode;
      this.tail=newNode;
    }
    else{
      var oldHead=this.head;
      this.head.next=oldHead;
      this.head=newNode;
    }
    this.length++;
    return this;
  }
  pop(){
    if(!this.head)return null;
    if(this.length===1){
      this.head=null;
      this.tail=null;
    }
    else{
      var current=this.head;
      var newTail=current;
      while(current.next)
      newTail=current;
      current=current.next;

    }
    this.tail=newTail;
    this.tail.next=null;
    this.length--;
    return current;
  }
  shift(){
    if(!this.head)return null;
    else{
      var oldHead=this.head;
      this.head=this.head.next;
      oldHead.next=null;
    }
    this.length--;
    return oldHead;
  }
  get(index){
    if(index<0||index>=this.length)return null;
    else{
      var count=0;
      var current=this.head;
      while(count !==index){
        current=current.next;
        count++;
      }
      return current;

    }
    

  }
  set(index,val){
    if(index<0||index>this.length)return null;
    if(index===0)this.unshift(val);
    if(index===this.length)this.push(val);
    
      var foundNode=this.get(index);
      if(foundNode){
        foundNode.val=val;
        return true;
      }
      return false

    }
    insert(index,val){
      if(index<0||index>this.length)return null;
    if(index===0)this.unshift(val);
    if(index===this.length)this.push(val);
    var foundNode=this.get(index-1);
    var newNode=new Node(val);
    var temp=foundNode.next;
    foundNode.next=newNode;
    newNode.next=temp;
    this.length++;
    return this;
    }
    remove(index){
      if(index<0||index>this.length)return null;
      if(index===0)return this.shift();
      if(index===this.length-1)return this.pop()
      var prev =this.get(index-1);
      var removedNode=prev.next;
      prev.next=removedNode.next;
      removedNode.next=null;
      this.length--;
      console.log(removedNode);
    }
    reverse(arr){
      var node=this.head;
      this.head=this.tail;
      this.tail=node;
      var prev=null;
      next;
      for(var i=0;i<arr.length;i++){
        prev.next=node;
        node.next=next;
        next=prev;
      }

    }
  
  }

