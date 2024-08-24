/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    if(!s) return -1;
    let maxUniqueLetter = 1;
    var uniqueLetters = [s[0]];
    for(let i = 0; i < s.length; i++) {
        if(!uniqueLetters.includes(s[i])) {
            uniqueLetters.push(s[i]);
        } else {
            if(uniqueLetters.length > maxUniqueLetter) {
                maxUniqueLetter = uniqueLetters.length;
            }
            uniqueLetters = [s[i]];
        }
    }
    return maxUniqueLetter;
};

console.log(lengthOfLongestSubstring("dsdsdsd")); // Output: 2
console.log(lengthOfLongestSubstring("erfassddddefefrge")); // Output: 5
console.log(lengthOfLongestSubstring("juikfseqpkkkewwef")); // Output: 8
