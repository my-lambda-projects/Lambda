const fs = require("fs");
const supportedLangages = require("../supportedLanguages");

supportedLangages.forEach(lang => {
    fs.readFile(`${lang}/${lang}.txt`, "utf8", (err, data) => {
        if (err) throw err;
        if(!data) throw new Error("NO DATA!!!");
        
        let dataArr = data.split("---");
        if(lang === "zh-cn") dataArr.slice(0,100);
        const questions = dataArr.map((questionTxt, idx) => {
            try{
                return getQuestionObj(questionTxt, lang, idx + 1);
            }catch(err){
                console.error("Problem at question ##", lang, idx+1 )
            }
        });

        const questionJSON = JSON.stringify(questions);
        fs.writeFile(
          `testing/${lang}.json`,
          questionJSON,
          "utf8",
          (err) => {
            if (err) throw err;
            console.log("success!!");
          }
        );

        //   test sequence
        //     const testData = dataArr[5];
        //     const qObj = getQuestionObj(testData, 5);
        //     console.log(qObj);
    });
})


function getQuestionObj(questionData, lang, id) {
  const question = getQuestionText(questionData);
  const codeSnippet = getCodeSnippet(questionData, lang, id);
  const answerOptions = getAnswerOptions(questionData);
  const correctAnswer = getCorrectAnswer(questionData);
  const answerExplanation = getAnswerExplanation(questionData);

  const questionObj = {
    id,
    question,
    codeSnippet,
    answerOptions,
    correctAnswer,
    answerExplanation,
  };

  return questionObj;
}

function getAnswerExplanation(questionData) {
  const startRegex = /#### .*: [A-Z]/;
  const endRegex = /<\/p>/;
  let explanation = questionData.split(startRegex)[1];
  explanation = explanation.split(endRegex)[0].trim();
  return explanation;
}

function getCorrectAnswer(questionData) {
  const regex = /#### .*: [A-Z]/;
  const answerLine = questionData.match(regex)[0].trim();
  const answer = answerLine[answerLine.length - 1];
  return answer;
}

function getAnswerOptions(questionData) {
  const regex = /- [A-Z].*/g;
  const questionLines = questionData.match(regex);

  const questions = {};
  questionLines.forEach((line) => {
    const key = line[2];
    const val = line.slice(4).trim();
    questions[key] = val;
  });
  return questions;
}

function getCodeSnippet(questionData, lang, id) {
  const regex = /```javascript|```/;
  const codeSnippet = questionData.split(regex)[1];
  if (codeSnippet) {
    return codeSnippet.trim();
  } else {
    if (id) console.log("MUST EDIT CODE SNIPPET AT::", lang, id);
    return null;
  }
}

function getQuestionText(questionData) {
  const regex = /###### (([1-9]|[1-9][0-9]|[1-9][0-9][0-9])\.|89.|95.|99.) .*/;
  let questionLine = questionData.match(regex);
  questionLine = questionLine[0];
  const startRegex = /###### ([1-9]|[1-9][0-9]|[1-9][0-9][0-9])\./;
  let question = questionLine.split(startRegex)[2];
  return question;
}
