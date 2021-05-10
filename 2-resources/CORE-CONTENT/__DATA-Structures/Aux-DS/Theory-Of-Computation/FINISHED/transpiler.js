'use-strict';
/* eslint no-console: 0 */
const process = require('process'); // <~~~ Not needed, just making linter happy
const fs = require('fs');
const os = require('os');

/******************************************************************************
 * 1. Read "BananaScript.bnf" file from an argument to a node program
 * "BananaTranspiler.js"
 * BNF Grammar file name to be read in from node 3rd argument value.
 * BananaScript file read to be in from 4th argument.
 * i.e. `$ NODE .JS .BNF .BS`
 * DEFAULT files for `$ node BananaTranspiler.js`
 * e.g. `$ node transpiler.js banana.bnf script.bs`
 ******************************************************************************/
const bnfScriptFile = process.argv[2] || 'BananaScript.bnf';
console.log(`1. Grammar file to be ingested and parsed: "${bnfScriptFile}"`);
const bananaScriptExecFile = process.argv[3] || 'BananaScript.bs';
console.log(`   Program file to be ingested and parsed: "${bananaScriptExecFile}"\n`);

/******************************************************************************
 * 2. Read each line of file...
 * read in file contents, separating each line into an array of strings
 ******************************************************************************/
const bnfScriptOriginal = fs.readFileSync(bnfScriptFile, 'utf8').split(os.EOL);
console.log(`2. Array containing each line from Grammar file, "${bnfScriptFile}":\n`, bnfScriptOriginal, '\n');

/******************************************************************************
 * 3. Put the tokens from the read into a hash table
 * "BNF_table" by the left side of the line delimited by :=
 ******************************************************************************/
console.log('3. Put the tokens from the read into a hash table of tokens:');
let grammar = {};
let previousToken = undefined;
for (let i = 0; i < bnfScriptOriginal.length; i++) {
  const newLine = bnfScriptOriginal[i].split(':=');
  if(newLine[1] != undefined) { // there is a LHS and a RHS of the BNF rule
    let token = newLine[0].trim();
    previousToken = token;
    let newExpansions = newLine[1].split('|');
    newExpansions = newExpansions.map((exp) => {return exp.trim();});
    let existingExpansion = grammar[token];
    if(existingExpansion === undefined) {
      grammar[token] = newExpansions;
    }
    else {
      existingExpansion.push(newExpansions);
    }
  }
  else {
    grammar[previousToken].push(newLine[0].trim());
  }
}
console.log(grammar);
console.log('');

/******************************************************************************
 * 4. Read arg for exec bananascript
 * custom bananascript programming language
 ******************************************************************************/
console.log(`4. Program file to be ingested and parsed: "${bananaScriptExecFile}"`);
const bananaScript = fs.readFileSync(bananaScriptExecFile, 'utf8').split(os.EOL);
console.log(`   Array containing each line from "${bananaScriptExecFile}" file:\n`);
console.log(bananaScript);
console.log();
let bananaSplit = [];
for (let i = 0; i < bananaScript.length; i++){
  bananaSplit.push(bananaScript[i].trim().split(' '));
}
bananaSplit = bananaSplit.reduce((prev, current) => {
  return prev.concat(current);
});
let bananaProgramLexxed = bananaSplit;
for (let i = 0; i < bananaProgramLexxed.length; i++) {
  if(bananaProgramLexxed[i] === '') {
    bananaProgramLexxed.splice(i, 1);
  }
}

console.log(`   Array containing each split line from "${bananaScriptExecFile}" file:\n`);
console.log(bananaProgramLexxed);
console.log();
// JS to BS Transpilation Table:
let js2bsTranspilationTable = {
  '<type>' : 'let %s be %s',
  '<eq>' : '==',
  '<gt>' : '>',
  '<lt>' : '<'
};

/******************************************************************************
 * 5. Parse it using a pushdown automata and accumulate
 * the results into a string variable program
 * LL(1) parser
 ******************************************************************************/
console.log('5. Parse using a pushdown automata and accumulate the results into a string variable program\n');
let findTokenOrTerminalInBNF = (tokenOrTerminal, bnf) => {
  let bnfKeys = Object.keys(bnf);
  let result = undefined;
  bnfKeys.forEach((key) => {
    let currentExpansion = bnf[key];
    currentExpansion.forEach((token) => {
      let isInExpansion = token.indexOf(tokenOrTerminal);
      if(isInExpansion >= 0) {
        result = {key:key, token:token};
      }
    });
  });

  return result;
};

// Prepping for parse process
let output = '';
let pda = [];
// let exitLoop = false;
while(bananaProgramLexxed.length > 0) {

  let current = bananaProgramLexxed.shift();
  let foundTokenOrTerminal = findTokenOrTerminalInBNF(current, grammar);
  if(foundTokenOrTerminal === undefined) {
    process.exit();
  }
  // if foundTokenOrTerminal = undefined
  // Syntax Error! Unknown Symbol on line xxx
  pda.push(foundTokenOrTerminal);
  if(pda.length === 1) {
    let currentToken = pda.shift();
    if(currentToken.key === '<type>') {
      let name = bananaProgramLexxed.shift();
      // try to cast name[0] into a character, if it fails, syntax error via
      // javascript
      let be = bananaProgramLexxed.shift();
      if(be !== 'be') {
        process.exit();
      }
      let value = bananaProgramLexxed.shift();
      // cast value to a number, if there's an error, cast value to a string
      // if there's an error, then quit as above

      let typeOutput = 'let ' + name + ' = ' + value + '; ';
      output = output + typeOutput;
    }
    if(currentToken.key === '<print>') {
      let word = bananaProgramLexxed.shift();
      let printOutput = `console.log(${word}); `;
      output = output + printOutput;
    }
    if(currentToken.key === '<increment>') {
      let value = bananaProgramLexxed.shift();
      output = output + ` ${value}++ `;
    }
    if(currentToken.key === '<decrement>') {
      let value = bananaProgramLexxed.shift();
      output = output + ` ${value}-- `;
    }
    if(currentToken.key === '<while>') {
      let bananas = bananaProgramLexxed.shift();
      let name = bananaProgramLexxed.shift();
      let conditional = bananaProgramLexxed.shift();
      let foundConditionalTerminal = findTokenOrTerminalInBNF(conditional, grammar);
      let conditionalOutput = js2bsTranspilationTable[foundConditionalTerminal.key];
      let than = bananaProgramLexxed.shift();
      let value = bananaProgramLexxed.shift();
      let whileOutput = 'while( ' + name + conditionalOutput + value + ') {';
      output = output + whileOutput;
    }
    if(currentToken.key  === '<end>') {
      output = output + '}';
    }
  }
}

/******************************************************************************
 * 6. let bananascript_executable = eval(program);
 ******************************************************************************/
console.log('6. let bananascript_executable = eval(program);\n');
console.log(output);
let bananascript_executable = () =>{
  eval(output);
};

/******************************************************************************
 * 7. program();
 ******************************************************************************/
console.log('\n*********************************');
console.log('Lets Go Bananas!');
console.log('*********************************');
bananascript_executable();
