function harmlessRansomeNote(noteText,magazineText){
    var noteArr=noteText.split(' ');
    var magazineArr=magazineText.split(' ');
    var magazineObj={};
    magazineArr.forEach(word=>{
        if(!magazineObj[word])magazineObj[word]=0;
        magazineObj[word]++;
    });
    var noteIsPossible=true;
   noteArr.forEach(word=>{
      if(magazineObj[word]){
          noteIsPossible=true;
          magazineObj[word]--;
          console.log(noteArr);
      }
      if(magazineObj[word]<0)return false;
      else{
          noteIsPossible=false;
      }
   });
   return noteIsPossible;

}
console.log(harmlessRansomeNote(' if you are hers','did you even know if she knows that you are hers'));

