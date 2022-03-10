function getMeanModeMedian(arr){
    return{
        mean:getMean(arr),
        median:getMedian(arr),
        mode:getMode(arr)

    };
    function getMean(arr){
        var sum=0;
        var mean;
        arr.forEach(num=> {
            sum+=num;
            mean=(sum)/arr.length;
        });
        return mean;
    }
    function getMedian(arr){
        
        var median;
        arr.sort(function(a,b){return a-b});
        if(arr.length % 2 !==0){
            median=arr[Math.floor(arr.length/2)];
        }
        else{
            var mid1=arr[arr.length/2];
            var mid2=arr[arr.length/2-1];
            median=(mid1 + mid2)/2;
        }
        return median;
        

    }
    function getMode(arr){
        var arrObj={};
        arr.forEach(num=>{
            if(!arrObj[num])arrObj[num]=0;
            arrObj[num]++;
        });
        var maxFreq=0;
        var modes=[];
        for(var num in arrObj){
            if(arrObj[num]>maxFreq){
                modes=[num];
                maxFreq=arrObj[num];
            }
            else if(arrObj[num]===maxFreq)modes.push(num);
            if(modes.length===Object.keys(arrObj).length)modes=[];
        }
        
           return modes;
        
    }
}
console.log(getMeanModeMedian([1,2,3,4,5,1,2,3,4,5,7,8,9,4,2,3,4]));