function  maxStockProfit(priceArr) {
    var buyPrice=0;
    var sellPrice=0;
    var maxProfit=-1;
    var changeBuyPrice=true;
    for (var i=0;i<priceArr.length;i++){
       if(changeBuyPrice) buyPrice=priceArr[i];
       sellPrice=arr[i+1];
       if(sellPrice<buyPrice){
           changeBuyPrice=true;
       }
       else{
           var tempProfit=sellPrice-buyPrice;
           if(tempProfit>maxProfit){
               maxProfit=tempProfit;
               changeBuyPrice=false;
           }
       }
    }
  return maxProfit;
}
console.log(maxStockProfit([112,112,112,123,456,789,234,123,456,234,789]));