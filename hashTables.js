class HashTable{
    constructor(size=53){
        this.keyMap=new Array(size);
    }
    _hash(key){
        let total=0;
        let prime=31;
        for(let i=0;i<Math.min(key.length,100);i++){
            let char=key[i];
            let value=char.charCodeAt(0)-96
            total=(total*prime+value)%this.keyMap.length;
        }
        return total;
    }
    set(key,value){
        let index=this._hash(key);
        
            if(!this.keyMap[index]){
                this.keyMap[index]=[];
            }
            this.keyMap[index].push([key,value]);
    
    }
    get(key){
        let index=this._hash(key);
        if(this.keyMap[index]){
        for(let i=0;i<this.keyMap[index].length;i++){
            if(this.keyMap[index][i][0]===key){
                return this.keyMap[index][i][1];
            }
            
        }
      }
      return undefined;
    }
    value(){
         let valueArray=[];
         for(let i=0;i<this.keyMap.length;i++){
            if(this.keyMap[i]) {
                for(let j=0;j<this.keyMap[i].length;j++){
                    if(!valueArray.includes(this.keyMap[i][j][1])){
                        valueArray.push(this.keyMap[i][j][1]);
                    }
                    
                }
            }
         }
         return valueArray;
    }

    key(){
        let keyArr=[];
        for(let i=0;i<this.keyMap.length;i++){
            if(this.keyMap[i]){
                for(let j=0;j<this.keyMap[i].length;j++){
                    if(!keyArr.includes(this.keyMap[i][j][0])){
                        keyArr.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return keyArr;
    }
}
let HT=new HashTable();
HT.set('green','£51283');
HT.set('red','£51783');
HT.set('blue','£56783');
HT.set('yellow','£57783');
