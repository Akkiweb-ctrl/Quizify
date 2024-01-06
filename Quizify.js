let readLineSync = require('readline-sync');
let score=0;
let point=1;
const database={
  data:[
    {
      question:`Who is the current Prime Minister of India?`,
      options:{
        a:"Rahul Gandhi",
        b:"Narendra Modi",
        c:"Amit Shah",
        d:"Rajnath Kovind"
      },
      correctAnswer:"b"
    },
    {
      question:`What is the capital iof India?`,
      options:{
        a:"Mumbai",
        b:"Kolkata",
        c:"New Delhi",
        d:"Chennai"
      },
      correctAnswer:"c"
    }
    
  ]
}
function checkAnswer(userAnswer,correctAnswer,point){
  if(userAnswer.toLowerCase()===correctAnswer.toLowerCase()){
    score+=point;
    console.log(`Correct Answer!!! Your score is ${score}`);
    return "n";
  }
  else{
    console.log(`Incorrect Answer Your score is ${score}`);
    return (readLineSync.question(`Do you attempt that question again?(Y/N).You will not get any point for this.`));
  }
}
function displayQuestions(){

  let i=0;
  while(i<database.data.length){
   
    console.log(`Qno.${i+1}) ${database.data[i].question}\n`);
     for(let key in database.data[i].options){
       console.log(`${key}. ${database.data[i].options[key]}\n`)
     }
    let userAnswer= readLineSync.question("Enter your ancwer(a/b/c/d):");
    let toContinue=checkAnswer(userAnswer,database.data[i].correctAnswer,point);

    if(toContinue==="Y"|| toContinue==="y"){
      point=0;
      continue;
    }
    else{
      point=1;
      i++;
    }
    console.log("\n\n");
  }
  console.log("Thank you for attending the quiz!!!");
}
console.log(database);
displayQuestions();
