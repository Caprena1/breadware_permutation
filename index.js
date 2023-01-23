//EXERCISE 1: Enumerate all uppercase/lowercase permutations for any letter specified in $rule_char_set
//WHAT I DID: Created two constant variables for the string and for the two letters to be 
//permutated. Then a variable to hold the empty array that the permutated words would be put 
//in. Then create a recursive function (which is a function that calls itself). It has two 
//arguments, the word variable and the index. So starting with an if statement or base case
//if the index is less than the length of the word and if the 'dn' are included in the word, 
//then we will split or break-down the word. The letter, 'd' or 'n'should be 
//uppercased and then join letters back together. Otherwise, if the 'dn' are not included,
//recursively rerun the function moving through the remaining letters (index +1). Once all
//letters have been gone through, return or stop the recursive action.Permuting only the letter "dn"
const word = "medium-one";
const rule_char_set = "dn";
let permutations = [];

function wordPermutations(word, index) {
    if(index < word.length) {
        if(rule_char_set.includes(word[index])) {
            let wordArray = word.split('')
            wordArray[index] = wordArray[index].toUpperCase()
            let joinedWord = wordArray.join('')
            permutations.push(joinedWord)
            wordPermutations(joinedWord, index + 1)
            
        } else if(!rule_char_set.includes(word[index])) {
            wordPermutations(word, index + 1) 
            return
        }
        wordPermutations(word, index + 1)
    } else {
        return;
    }
}

wordPermutations(word, 0)
console.log(permutations) //ANSWER [ 'meDium-one', 'meDium-oNe', 'medium-oNe' ]




