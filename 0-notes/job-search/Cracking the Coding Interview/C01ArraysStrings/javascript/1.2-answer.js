// Check Permutation

// TODO:  Given two strings, write a method to decide if one is a permutation of the other.

function checkPermutation(s1, s2){
    let s1_length = s1.length;
    let s2_length = s2.length;
    let s1_array = s1.split("");
    let s2_array = s2.split("");
    // if lengths aren't equal they aren't permutations.
    if(s1_length != s2_length) {
        console.log("Neither string is a permutation of the other.");
        return false;
    }
    let sorted_s1 = s1_array.sort();
    let sorted_s2 = s2_array.sort();
    console.log(sorted_s1);
    console.log(sorted_s2);
    for(x=0; x<sorted_s1.length;x++){
        if(sorted_s1[x] != sorted_s2[x]){
            console.log("Neither string is a permutation of the other.");
            return false;
        }
    }
    console.log("One string is a permutation of the other.");
    return true;
}

checkPermutation("I had a", "a I had");
checkPermutation("dog", "god ");
checkPermutation("God", "god");
checkPermutation("abcde", "abcdef");
checkPermutation("cDeba", "bacDe");
checkPermutation("gtAoiM", "AMgtoi");
checkPermutation("abcde", "fghij");

