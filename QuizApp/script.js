const questions = [
    {
        question:"Which is largest animal in the world?",
        answers:[
            {text:"Shark",correct:false},
            {text:"Blue whale",correct:false},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:true},
        ]
    },
    {
        question:"Most Beautifull country in the world?",
        answers:[
            {text:"Shark",correct:false},
            {text:"Blue whale",correct:false},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:true},
        ]
    },
    {
        question:"Which is largest animal in the world?",
        answers:[
            {text:"Shark",correct:false},
            {text:"Blue whale",correct:false},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:true},
        ]
    },
    {
        question:"Which of the smallest continent in the world?",
        answers:[
            {text:"Asia",correct:false},
            {text:"Australia",correct:true},
            {text:"Arctic",correct:false},
            {text:"Africa",correct:false},
        ] 
    }
];

const qustionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.
    question;


    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer)
    });
}

function resetState(){
     nextButton.style.display = "none";
     while(answerButton.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
     }
}

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
         selectedBtn.classList.add("correct");
    }else{
         selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct == "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})


startQuiz();