class Node{
    constructor(value){
        this.value=value;
        this.right=null;
        this.left=null;

    }
}
class Bst{
    constructor(){
        this.root=null;
    }
    insert(value){
        var newNode=new Node(value);
        if(this.root===null){
            this.root=newNode;
            return this;
        }
        else{
            var current=this.root;
            while(true){
                if(value === current.value)return undefined;
            if(value < current.value){
                if(current.left===null){
                    current.left=newNode;
                    return this;
                }
                else{
                    current=current.left;
                    
                }

            }
            else if(value > current.value){
                if(current.right===null){
                    current.right=newNode;
                    return this;
                }
                else{
                    current=current.right;
                    
                }
            }
        }
            
        }
    }
    find(value){
        if(this.root===null)return false;
        var current=this.root,
         found=false;
        while(current && !found){
            if(value<current.value){
                current=current.left;
            }
            else if(value>current.value){
                current=current.right;
            }
            else {
                return true;
            }
        }
        return false;
    }
    Bfs(){
        var result=[];
        var queue=[];
        var node=this.root;
        queue.push(node);
        while(queue.length){
            node=queue.shift();
            result.push(node);
            if(node.left){
                queue.push(node.left);
            }
            
                if(node.right){
                    queue.push(node.right);
                }
            
        }
        return result;
    }
    DFSPre(){
        var data=[];
        function traverse(node){
            data.push(node.value);
            if(node.left){
                traverse(node.left);
            }
            if(node.right){
                traverse(node.right);
            }
        }

         traverse(this.root);
         return data;
    }
    DFSP0s(){
        var data=[];
        
        function traverse(node){
            if(node.left)traverse(node.left);
            if(node.right)traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }
    DFSPIo(){
        var data=[];
        
        function traverse(node){
            if(node.left)traverse(node.left);
            data.push(node.value);
            if(node.right)traverse(node.right);
            
        }
        traverse(this.root);
        return data;
    }
    
}
var list= new Bst();
list.insert(22);
list.insert(34);
list.insert(12);
list.insert(9);
list.insert(43);
console.log(list);