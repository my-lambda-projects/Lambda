/**
 * @param {string} s
 * @return {number}
 */


// use map for storing index
// if a repeated character is found, skip directly to the index of the repeated character in the map.

const lengthOfLongestSubstring = s => {
    if(s === null || s.length === 0){
        return 0;
    }
    
    const map = {};
    let len = 0;
    let maxLen = len;
    let start = 0;

    // scan from left to right.    
    for(let i = start; i < s.length; i++){
        c = s[i];

        if(map[c] !== undefined && map[c] >= start) {
            start = map[c] + 1; // start new search with repeated word's last location + 1
            len = i - start; // real length -> from for example 3 to 5 is 3, so it's 5-3+1 and + 1 happens later
        }
        
        len++; // real length -> from for example 3 to 5 is 3, so it's 5-3+1 and + 1 happens later
        
        if(len > maxLen){
            maxLen = len;
        }
        
        map[c] = i;
    }
    
    return maxLen;
};