function anagrams(word, words) {
    return words.filter((singleWord)=>{
      let letters = word.split('');
      let wordLetters = singleWord.split('');
      letters.forEach(letter=>{
        if(wordLetters.indexOf(letter) != -1){
            wordLetters.splice(wordLetters.indexOf(letter),1);
        }
      })
      
      return !wordLetters.length; 
    })
  }

 console.log(anagrams('abba',['aabb', 'abcd', 'bbaa', 'dada']));