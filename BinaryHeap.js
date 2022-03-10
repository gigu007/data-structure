class Maxbh{
    constructor(){
        this.values=[]
    }
    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp(){
        let Idx=this.values.length-1;
        const element=this.values[Idx];
        
        while(Idx>0){
            let parentIdx=Math.floor((Idx-1)/2);
        let parent=this.values[parentIdx];
         if(element<=parent)break;
          this.values[parentIdx]=element;
          this.values[Idx]=parent;
          Idx=parentIdx;
        }
        return this.values;
    
    }
    extractMax(){
        const max=0;
        const end=this.values.pop();
        
        if(this.values.length>0){
            this.values[0]=end;
            this.sinkDown(); 
        }
        
        return max;

    }
    sinkDown(){
        let Idx=0;
        const length=this.values.length;
        const element=this.values[0];
        while(true){
            let leftChildIdx=2*Idx+1;
            let rightChildIdx=2*Idx+2;
            let leftChild,rightChild;
            let swap=null;
            if(leftChildIdx<length){
               leftChild=this.values[leftChildIdx];
               if(leftChild>element){
                   swap=leftChildIdx;
               }
            }
            if(rightChildIdx<length){
                rightChild=this.values[rightChild];
                if((rightChild>element && swap===null)||rightChild>leftChild){
                    swap=rightChildIdx;
                }
            }
                if(swap===null)break;
                this.values[Idx]=this.values[swap];
                this.values[swap]=element;
                idx=swap;
            
        }
    }
}
let heap=new Maxbh();
heap.insert(34);
console.log(heap);