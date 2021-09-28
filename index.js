const chalk = require('chalk');
var score = 0
var readlinesync = require('readline-sync');
var userName = readlinesync.question("Enter your name: ");
console.log(chalk.bold.rgb(10, 100, 200)("Welcome " + userName + " to HOW MUCH DO YOU KNOW ABOUT SANDEEP"));
console.log("--------*********--------")
function play(question, answer) {
  var useranswer = readlinesync.question(question);
  if(useranswer === answer) {
    console.log("right!");
    score=score+1;
  }
  else {
    console.log("wrong!");
  }
  console.log("current score: ", score);
  console.log("--------*********--------")
}

var questions = [
  {
    question: "what is my intital?",
    answer: "angara"
  },
  {
    question: "where do I live?",
    answer: "kakinada"
  },   {
    question: "which language I use to code?",
    answer: "python"
  },
    {
    question: "which life style i prefer to lead?",
    answer: "simple"
  },
   {
    question: "In which college do I study?",
    answer: "BVC"
  }
];

for(var i=0; i<questions.length;i++) {
  currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log("Your total score is :", score);
console.log("Top Scores:")
console.log("Sandy: 3")
console.log("Crossed the top score? Ping me to update.")