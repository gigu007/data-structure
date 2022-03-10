function isParlindrome(string){
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
function isPalindrome(str){
    var string=str.split('');
    var validCharacters='abcdefghijklmnopqrstuvwxyz';
    var lettersArr=[];
    string.forEach(char=>{
        if(validCharacters.indexOf(char)>-1)lettersArr.push(char);
    });
    if(lettersArr.join('')===lettersArr.reverse().join(''))return true;
    else{
        return false;
    }
}