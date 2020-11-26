var score = 0;
var readlineSync = require('readline-sync');
const chalk = require('chalk');
console.log(chalk.blue("                      Lets Begin This Game!!!!!!"));
console.log("\n");

var userName = readlineSync.question(chalk.blue.underline.bold("What's your Name") +" = ");
console.log("\n");
console.log(chalk.blue.bold("Welcome "+ userName + " only a True Fan Will Pass This Iron Man Quiz..."));
console.log(chalk.white("Highscore: ")+ chalk.red("5"));


function quiz(question, answer){
  var userName = readlineSync.question(question)
  if(userName.toUpperCase() == answer.toUpperCase()){
    console.log(chalk.green("Right Option"));
    score = score+1;
  }
  else {
    console.log(chalk.red("Wrong Option"));
  }
  console.log(chalk.bgGray("Current Score: "), score);
  console.log(chalk.yellowBright("------------"));
}

var questions = [{
  question: `1- When did Iron Man first appear in comics? 
  a- 1954
  b- 1963
  c- 1972
  d- 1981 
 Choose Your Option->  `,
  answer: "b"
},{
  question: `2- What year did the first Iron Man movie come out? 
  a- 2004
  b- 2006
  c- 2008
  d- 2010
  Choose Your Option->  `,
  answer: "c"
},{
  question: `3- What is the name of the actor who plays Iron Man? 
  a- Robert Downey Jr
  b- Chris Hemsworth
  c- Tom Holland
  d- Chris Evans
  Choose Your Option->  `,
  answer: "a"
},{
  question: `4- What is the name of Tony Stark's love interest? 
  a- Jenny James
  b- Pepper Potts
  c- Ivy Pepper
  d- Jane Foster
  Choose Your Option->  `,
  answer: "b"
},{
  question: `5- What;s the name of Iron Man's computer system? 
  a- JARVIS
  b- RESCUE
  c- STARKER
  d- HOGAN
  Choose Your Option->  `,
  answer: "a"
}]

for(var i =0; i < questions.length; i++){
  var currentQuestion = questions[i];
  quiz(currentQuestion.question, currentQuestion.answer)
}
console.log(chalk.green("Lets try again...."))