const readlineSync = require('readline-sync');
const chalk = require('chalk');

var highScore=[
  {
    name:'samyuktha',
    score:'9'
  }
]

var playerName = readlineSync.question(chalk.cyanBright('your good name please ? '));

console.clear();

console.log('');
console.log(chalk.yellow.bold('Welcome',playerName,'to the Brooklyn 99 Trivia'));
console.log(chalk.yellow.bold('Here we go!'));
console.log('');

var score = 0;

var levelOne= [
  {
    question:'How many brothers does Amy have ?',
    options:['3','7'],
    answer:'1'
  },
  {
    question:"What is Jake's traditional Thanksgiving food?",
    options: ['Pineapple pizza','Mayonaise with peanuts '],
    answer:'1'
  },
  {
    question:"Who is Jake's favourite musician?",
    options: ['Taylor Swift','Eminem'],
    answer:'0'
  }
]; 

var levelTwo= [
  {
    question:'The first episode of Brooklyn Nine-Nine aired in 2013.',
    answer:true
  },
  {
    question:'Jake is allergic to cats and dogs.',
    answer:false
  },
  {
    question:"Rosa once said, 'If I die, turn my tweets into a book'.",
    answer:false
  }
] 

var levelThree= [
  {
    question:"What is Boyle's son's name ?",
    answer:'nikolaj'
  },
  {
    question:"What is Captain Holt's middle name ?",
    answer:'jacob'
  },
  {
    question:"What is Captain Holt's dog called ?",
    answer:'cheddar'
  },
  {
    question:"What's Terry's favourite flavour of yogurt ?",
    answer:'mango'
  }
] 

function checkLevelOne(question,options,answer){

  var playerAnswer = String(readlineSync.keyInSelect(options,chalk.cyanBright.bold(question)));
  
  if (playerAnswer===answer){
    console.log(chalk.green('right answer!'));
    score++;
  }else{
    console.log(chalk.redBright.bold('wrong answer!'));
  }
  console.log('--------------')
}


function checkLevelTwo(question,answer){

  var playerAnswer = readlineSync.keyInYN(chalk.yellow.bold(question));

  if (playerAnswer===answer){
    console.log(chalk.green('right answer!'));
    score++;
  }else{
    console.log(chalk.redBright.bold('wrong answer!'));
  }
  console.log('--------------')
}

function checkLevelThree(question,answer){

  var playerAnswer = readlineSync.question(chalk.cyan.bold(question));

  if (playerAnswer.toLowerCase()===answer){
    console.log(chalk.green('right answer!'));
    score++;
  }else{
    console.log(chalk.redBright.bold('wrong answer!'));
  }
  console.log('--------------')
}


//level one 
console.log(chalk.white.bgBlue.bold("----Level One----"))
console.log("choose the right option")
for(var i=0;i<levelOne.length;i++){
  var ques = levelOne[i];
  checkLevelOne(ques.question,ques.options,ques.answer);
}

//level two 
if(score>=2){
  console.clear();
  console.log(chalk.white.bgBlue.bold("----Level Two----"));
  console.log("(answer yes or no)")
  console.log('');
  for(var i=0;i<levelTwo.length;i++){
    var ques = levelTwo[i];
    checkLevelTwo(ques.question,ques.answer);
  }
  //level three
  if(score>=4){
  console.clear();
  console.log(chalk.white.bgBlue.bold("----Level Three----"));
  console.log("(type in the answer)");
  console.log('');
  for(var i=0;i<levelThree.length;i++){
    var ques = levelThree[i];
    checkLevelThree(ques.question,ques.answer);
  }}
  
}

if(score>=8){
    console.log("Congratulations on clearing all the levels !!!");
    if(score>highScore[0].score){
      console.log(chalk.green("You have achieved the new high score!"));
    }
    console.log("Score :",score);
    
}else{
    console.log("Score :",score);
    console.log("You have not cleared this level, but great effort !");
  }
  
console.log("Thank you for taking this quiz <3");
