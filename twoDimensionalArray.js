//two dimensional array means array within array;
// let arr=[[1,2,3],[4,5,6],[7,8,9],[10,11,12,13]];;
// let multiSum=0;
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i]);
//     arr[i].forEach(num=>{
//         multiSum=multiSum+num;
//     })
// }
// console.log(multiSum);
//three dimensional array is array within array,within another array;
let three=[[[1,2,3]],[[4,5,6]],[[7,8,9]]];
let sum=0;
for(var i=0;i<three.length;i++){
    
    three[i].forEach(num=>{
        // console.log(num);

        

        
        for(var i=0;i<num.length;i++){
            // console.log(num[i]);
            sum=sum+num[i];
            // console.log(sum)
            
        }
        // console.log(sum)
    })
    
}
console.log(sum)