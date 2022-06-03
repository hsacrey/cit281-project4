//Importing the data from p4-data.js
const { data } = require("./p4-data.js");
module.exports = {
  getQuestions,
  getAnswers,
  getQuestionsAnswers,
  getQuestion,
  getAnswer,
  getQuestionAnswer
};
//Returns array of just question strings from data object
function getQuestions() {
  const questions = [];
  for (i = 0; i < data.length; i++) {
    questions.push(data[i].question);
  }
  return questions;
}
//Returns array of just answer strings from data object
function getAnswers() {
  const answers = [];
  for (i = 0; i < data.length; i++) {
    answers.push(data[i].answer);
  }
  return answers;
}
//Return both questions and answers, I'm ~pretty~ sure I cloned them properly
function getQuestionsAnswers() {
  const qa = [];
    for (i = 0; i < data.length; i++) {
      let question = data[i].question;
      let answer = data[i].answer;
      qa.push({question, answer});
    }
  return qa;
}
//Returns a question object with {question(string), number(int), error(string)} (and errors if not)
function getQuestion(number = "") {
  const o = { question: "", number: number, error: "" };
  //ERR: No number
  if (o.number === 0){
    o.error += "Question number must be >= 1";
    return o;
  }
  if(!Number.isInteger(o.number)){
    o.error += "Question number must be an integer";
    return o;
  }
  //Searches through 'data' to find the question that matches the given 'number'
  for(i = 0; i < data.length; i++){
    if(data[i].question.includes(number)){
      o.question = data[i].question;
    }
  }
  if(data.length < o.number){
    o.error += `Question number must be less than the number of questions (${data.length})`;
  }
  return o;
}
//Returns an answer object matching the number (and errors if not)
function getAnswer(number = "") {
  const o = { question: "", answer: "", number: number, error: "" };
  //error: No number
  if (o.number === 0){
    o.error += "Question number must be >= 1";
    return o;
  }
  if(!Number.isInteger(o.number)){
    o.error += "Question number must be an integer";
    return o;
  }
  //Searches through 'data' to find the answer that matches the given 'number'
  for(i = 0; i < data.length; i++){
    if(data[i].answer.includes(number)){
      o.answer = data[i].answer;
    }
  }
  if(data.length < o.number){
    o.error += `Answer number must be less than the number of questions (${data.length})`;
  }
  return o;
}
function getQuestionAnswer(number = "") {
  const o = { question: "", answer: "", number: number, error: "" };
  //error: No number
  if (o.number === 0){
    o.error += "Question number must be >= 1";
    return o;
  }
  if(!Number.isInteger(o.number)){
    o.error += "Question number must be an integer";
    return o;
  }
  //Searches through 'data' to find the question and answer which include the given 'number'
  for(i = 0; i < data.length; i++){
    if(data[i].question.includes(number)){
      o.question = data[i].question;
    }
    if(data[i].answer.includes(number)){
      o.answer = data[i].answer;
    }
  }
  //error: No question + answer
  if(data.length < o.number){
    o.error += `Question/Answer number must be less than the number of questions (${data.length})`;
  }
  return o;
}
//______________________________________________________________________________________________________________________________________________________________________________________________________________________
/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
  console.log(`\n** Testing ${category} **`);
  console.log("-------------------------------");
  for (const o of args) {
    console.log(`-> ${category}${o.d}:`);
    console.log(o.f);
  }
}

// Set a constant to true to test the appropriate function
const testGetQs = false;
const testGetAs = false;
const testGetQsAs = false;
const testGetQ = false;
const testGetA = false;
const testGetQA = false;

// getQuestions()
if (testGetQs) {
  testing("getQuestions", { d: "()", f: getQuestions() });
}

// getAnswers()
if (testGetAs) {
  testing("getAnswers", { d: "()", f: getAnswers() });
}

// getQuestionsAnswers()
if (testGetQsAs) {
  testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
}

// getQuestion()
if (testGetQ) {
  testing(
    "getQuestion",
    { d: "()", f: getQuestion() }, // Extra credit: +1
    { d: "(0)", f: getQuestion(0) }, // Extra credit: +1
    { d: "(1)", f: getQuestion(1) },
    { d: "(4)", f: getQuestion(4) } // Extra credit: +1
  );
}

// getAnswer()
if (testGetA) {
  testing(
    "getAnswer",
    { d: "()", f: getAnswer() }, // Extra credit: +1
    { d: "(0)", f: getAnswer(0) }, // Extra credit: +1
    { d: "(1)", f: getAnswer(1) },
    { d: "(4)", f: getAnswer(4) } // Extra credit: +1
  );
}

// getQuestionAnswer()
if (testGetQA) {
  testing(
    "getQuestionAnswer",
    { d: "()", f: getQuestionAnswer() }, // Extra credit: +1
    { d: "(0)", f: getQuestionAnswer(0) }, // Extra credit: +1
    { d: "(1)", f: getQuestionAnswer(1) },
    { d: "(4)", f: getQuestionAnswer(4) } // Extra credit: +1
  );
}
