// Palindrome Permutation

// TODO:  Given a string, write a function to check if it is a permutation of a palindrome.
// ! A palindrome is a word or phrase that is the same forwards and backwards.
// ! A permutation is a rearrangement of letters.
// ! The palindrome does not need to be limited to just dictionary words.
// ! You can ignore casing and non-letter characters.

function palindromePerm(s){
    let counts = {};
    s = s.toLowerCase();
    let s_array = [];
    for (var x = 0; x < s.length; x++) {
        if(s.charAt(x).match(/[a-z]/i)){
            s_array.push(s.charAt(x));
        }
    }
    console.log(s_array);
    for(let x = 0; x < s_array.length; x++) {
        current_letter = s_array[x];
        if(!counts[current_letter]){
            counts[current_letter] = 1;
        }
        else{
            counts[current_letter] = counts[current_letter]+1;
        }
    };
    let count_doubles = 0;
    for (let key of Object.keys(counts)) {
        if(counts[key] == 1){
            count_doubles++;
        }
      }
    console.log(count_doubles);
    if(count_doubles < 2){
        console.log("palindrome");
        return true;
    }

    console.log("not a palindrome");
    return false;
}

palindromePerm("tacocat");
palindromePerm("racecar");
palindromePerm("Adam");
palindromePerm("Erica");

