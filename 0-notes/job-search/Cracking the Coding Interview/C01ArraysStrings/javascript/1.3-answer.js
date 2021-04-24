// URLify

// TODO:  Write a method to replace all spaces in a string with '%20'.  
// You may assume that the string has sufficient space at the end to hold the additional characters -- 
    // -- and that you are given the 'true' length of the string.

function urlify(s){
    let spaces_replaced = s.replace(/ /g, "%20");
    console.log(spaces_replaced);
    return spaces_replaced;
}

urlify("Hello, World.");
urlify("Erica L. Ingram");
urlify("https://www.aquoco.co/well there");
urlify("Does this pass your own tests?");
