function vowelLinks(str) {
    const words = str.split(" ");
    
    for (let i = 0; i < words.length - 1; i++) {
    const word1 = words[i];
    const word2 = words[i + 1];
    
  
    if (endsWithVowel(word1) && startsWithVowel(word2)) {
      return true;
    }
    }
    
    return false;
    }
    
    function endsWithVowel(word) {
    const lastChar = word[word.length - 1];
    return /[aeiou]/i.test(lastChar);
    }
    
    function startsWithVowel(word) {
    const firstChar = word[0];
    return /[aeiou]/i.test(firstChar);
    }

console.log(vowelLinks("a very large appliance"));
console.log(vowelLinks("go to edabit"));
console.log(vowelLinks("an open fire"));
console.log(vowelLinks("a sudden applause"));
