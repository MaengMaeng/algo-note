/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    const answer = [];
    const length = words.length;
    const wordLength = words[0].length;

    let remainWords, remainLength, index, subString, wordIndex;

    for(let i = 0; i <= s.length - wordLength; i++){
        remainWords = words.slice();
        remainLength = length;

        index = i;
        
        while(remainLength){
            subString = s.slice(index, index + wordLength);
            wordIndex = remainWords.indexOf(subString);

            if(wordIndex !== -1){
                remainWords.splice(wordIndex, 1);
                remainLength--;
                index += wordLength;
            }
            else{
                break;
            }
        }

        if(remainLength === 0){
            answer.push(i);
        }
    }
    
    return answer;
};