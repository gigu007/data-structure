class Graph{
    constructor(){
        this.adjacencyList={};
    }
    adVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=[];
        }
    }
    adEdge(v1,v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(v1,v2){
        this.adjacencyList[v1]=this.adjacencyList[v1].filter(
            v=>v!==v2
        );
        this.adjacencyList[v2]=this.adjacencyList[v2].filter(
            v=>v!==v1
        );
    }
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacencyVertex=this.adjacencyList[vertex].pop();
            this.removeEdge(vertex,adjacencyVertex);function isParlindrome(string){
                string=string.toLowerCase();
                var charactersArr=string.split('');
                var validCharacters='abcdefghijklmnopqrstuvwxyz'.split('');
                var lettersArr=[];
                charactersArr.forEach(char => {
                    if(validCharacters.indexOf(char)>-1)lettersArr.push(char);
            });
               if(lettersArr.join('')===lettersArr.reverse().join(''))return true;
               else{
                   return false;
               }
            }
            console.log(isParlindrome('apapa'));
        }
        delete this.adjacencyList[vertex];
    }
    graphRecursion(start){
        const result=[];
        const visited={};
        const adjacencyList=this.adjacencyList;
        (function dfs(vertex){
        if(!vertex)return null;
         visited[vertex]=true;
         result.push(vertex);
         adjacencyList[vertex].forEach(neigbhor=> {
             if(!visited[neigbhor])
             return dfs(neigbhor);
             
         });
        })(start)
        return result;
    }
    graphIterative (start){      
     const stack=[start];
     const visited={};
     const result=[];
     visited[start]=true;
     let currentVertex;
     while(stack.length){
         currentVertex=stack.pop();
         result.push(currentVertex);
        this.adjacencyList[currentVertex].forEach(neigbhor=>{
            if(!visited[neigbhor]){
                visited[neigbhor]=true;
                stack.push(neigbhor);
            }
        });

     }
     return result;
    }
    bfs(start){
        const queue=[start];
        const result=[];
        const visited={};
        visted[start]=true;
        let currentVertex;
        while(queue.length){
currentVertex=queue.shift();
result.push(currentVertex);
this.adjacencyList[currentVertex].forEach(neigbhor=>{
   if(!visited[neigbhor]){
        visited[neigbhor]=true;
        queue.push(neigbhor);
    }
});
        }

    return result;

    }
}
let g=new Graph();
g.adVertex('a'); 
g.adVertex('b');
g.adVertex('c');
g.adVertex('d');
g.adVertex('e');
g.adVertex('f');
g.adEdge('a','b');
g.adEdge('a','c');
g.adEdge('b','d');
g.adEdge('c','e');
g.adEdge('d','e');
g.adEdge('d','f');
g.adEdge('e','f');
console.log(g);

