function reverseWords(string){
  var wordArr=string.split(' ');
  var reversedWordsArr=[];
    wordArr.forEach(word=>{
        var reversedWord='';
        for(var i=word.length-1;i>=0;i--){
            reversedWord+=word[i];
        }
        reversedWordsArr.push(reversedWord);
    });
    return reversedWordsArr.join(' ');
  
        
    

}
console.log(reverseWords('this is a string of words'));


function  reservedWordArr(str) {
    var wordArr=str.split(' ');
    var reverseWords=[];
    wordArr.forEach(word=>{
        reversedWord='';
        for(var i=word.length-1;i>=0;i--){
            reversedWord+=word[i];

        }
        reverseWords.push(reversedWord);
    })
    return reverseWords.join(' ');
}
console.log(reservedWordArr('tis nwod uoy yob'));


