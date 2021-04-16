// Is Unique:  

// TODO:  Implement an algorithm to determine if a string has all unique characters.  
// ? What if you cannot use additional data structures?

function isUnique(s) {
    sset  = [];
    length = s.length;
    for(x=0; x < length;x++) {
        current_char = s.charAt(x);
        if (sset.includes(current_char)) {
            console.log("The string does not contain entirely unique characters.")
            return false;
        }
        else{
            sset.push(current_char);
        };
    };
    console.log(sset);
    console.log("The string contains entirely unique characters.")
    return true;
}
isUnique("race");