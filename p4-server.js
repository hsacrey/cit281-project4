const fastify = require("fastify")();

const {getQuestions, getAnswers, getQuestionsAnswers, getQuestion, getAnswer, getQuestionAnswer} = require("./p4-module.js");
//Returns all questions
fastify.get("/cit/question", (request, reply) => {
    const response = {error: "", statusCode: 200, questions: JSON.parse(JSON.stringify(getQuestions()))};
    reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(response);
});
//Returns all answers
fastify.get("/cit/answer", (request, reply) => {
    const response = {error: "", statusCode: 200, answers: JSON.parse(JSON.stringify(getAnswers()))};
    reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(response);
});
//Returns all questions and answers
fastify.get("/cit/questionanswer", (request, reply) => {
    const response = {error: "", statusCode: 200, questions_answers: JSON.parse(JSON.stringify(getQuestionsAnswers()))};
    reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(response);
});
//Return a specific question
fastify.get("/cit/question/:number", (request, reply) => {
    const number = parseInt(request.params.number);
    
    const response = {error: "", statusCode: 200, question: JSON.parse(JSON.stringify(getQuestion(number).question)), number: number};
    if(getQuestion(number).error != ""){
        response.error = getQuestion(number).error;
    }
    reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(response);
});
//Return a specific answer
fastify.get("/cit/questionanswer/:number", (request, reply) => {
    const number = parseInt(request.params.number);
    
    const response = {error: "", statusCode: 200, question: JSON.parse(JSON.stringify(getQuestion(number).question)), answer: JSON.parse(JSON.stringify(getAnswer(number).answer)), number: number};
    if(getAnswer(number).error != ""){
        response.error = getAnswer(number).error;
    }
    reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(response);
});
//Return a specific question-answer
fastify.get("/cit/answer/:number", (request, reply) => {
    const number = parseInt(request.params.number);
    
    const response = {error: "", statusCode: 200, answer: JSON.parse(JSON.stringify(getAnswer(number).answer)), number: number};
    if(getAnswer(number).error != ""){
        response.error = getAnswer(number).error;
    }
    reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(response);
});
fastify.get("*", (request, reply) => {
    const response = {error: "Route not found.", statusCode: 404};
    reply
    .code(404)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(response);
});
const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    console.log(`Server listening on ${address}`);
});