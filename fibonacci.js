function fiboNacciSeq(position){
   if(position<3)return 1;
   
   else   return fiboNacciSeq(position-1)+fiboNacciSeq(position-2);
   
   
   

   
}
console.log(fiboNacciSeq(8));