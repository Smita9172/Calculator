const questions=[
  {
    question:"Which of Following is valid C variable name?",
    answers: [
      {text:"int number", correct: false},
      {text:"float_rate", correct: true},
      {text:"#value", correct: false},
      {text:"Char-value", correct: false},

    ]
  },
   {
    question:"Which data type is used to store a single character in C?",
    answers: [
      {text:"int", correct: false},
      {text:"char", correct: true},
      {text:"float", correct: false},
      {text:"double", correct: false},

    ]
  },
   {
    question:"Which operator is used to get the address of a variable in C?",
    answers: [
      {text:"*", correct: false},
      {text:"&", correct: true},
      {text:"%", correct: false},
      {text:"#", correct: false},

    ]
  },
  {
    question:"Which loop is guaranteed to execute at least once?",
    answers: [
      {text:"for", correct: false},
      {text:"while", correct: false},
      {text:"do-while", correct: true},
      {text:"if", correct: false},

    ]
  },
  {
    question:"Which header file is required for printf()?",
    answers: [
     { text: "&lt;stdlib.h&gt;", correct: false },
    { text: "&lt;string.h&gt;", correct: false },
    { text: "&lt;stdio.h&gt;", correct: true },
    { text: "&lt;math.h&gt;", correct: false }

    ]
  },
  {
    question:"WWhich feature of C++ supports function overloading??",
    answers: [
      {text:"Polymorphism", correct: true},
      {text:"Encapsulation", correct: false},
      {text:"Inheritance", correct: false},
      {text:"Abstraction", correct: false},

    ]
  },
];

const questionElement =document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;
function startQuiz(){
  currentQuestionIndex=0;
  score=0;
  nextButton.innerHTML="Next";
  showQuestion();

}
function showQuestion(){
  
  resetState();
  let currentQuestion= questions[currentQuestionIndex];
  let quesionNo=currentQuestionIndex+1;
  questionElement.innerHTML=quesionNo+". "+currentQuestion.
  question;

  currentQuestion.answers.forEach(answer =>{
    const button = document.createElement("button");
    button.innerHTML=answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
      button.dataset.correct=answer.correct;
    }
    button.addEventListener("click",selectAnswer);
  });
}

function resetState(){
  nextButton.style.display="none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
}
function selectAnswer(e){
  const selectedBtn=e.target;
  const isCorrect=selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }
  else{
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButtons.children).forEach(button=>{
    if(button.dataset.correct === 'true'){
      button.classList.add("correct");
    }
    button.disabled=true;
  });
  nextButton.style.display="block";
}

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex<questions.length){
    showQuestion();
  }
  else{
    showScore();
  }
}

function showScore(){
  resetState();
  questionElement.innerHTML=`You Scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML="play again";
  nextButton.style.display="block";
}
nextButton.addEventListener("click", ()=>{
  if(currentQuestionIndex<questions.length){
    handleNextButton();
  }
  else{
    startQuiz();
  }

})

startQuiz();