function PunctuationRemover(input) {
    if (!(this instanceof PunctuationRemover))
        return new PunctuationRemover(input);

    let self = this;
    console.log("---1--->self: ", self);
    self.input = input;
    console.log("---2--->self.input: ", self.input);
    if (self.input === undefined) {
        self.input = {};
    }

    self.remove = function (text) {
        let punkRemStr = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g;
        text = text.replace(punkRemStr, "");
        console.log("---3--->text: ", text);
        return text;
    };
}

// let str1 = "";
//
// class PunctuationRemover {
//     constructor() {}
// }
//
let in1 =
    "You can extend this principle to test, for example, if a string ends with a punctuation mark:?xml version='1.0 '?"; //
//
PunctuationRemover(in1);
console.log("---4--->PunctuationRemover(in1): ", PunctuationRemover(in1));
/*
  n ~ remove-punctuation : (master) node removPunk.js 
---1--->self:  PunctuationRemover {}
---2--->self.input:  You can extend this principle to test, for example, if a string ends with a punctuation mark:?xml version='1.0 '?
---1--->self:  PunctuationRemover {}
---2--->self.input:  You can extend this principle to test, for example, if a string ends with a punctuation mark:?xml version='1.0 '?
---4--->PunctuationRemover(in1):  PunctuationRemover {input:'You can extend this principle to test, for example, if a string ends with a punctuation mark:?xml version=\'1.0 \'?',remove: [Function] }
 
*/
