const questions = [
    {
        question : "Which type of JavaScript language is",
        answers: [
            {text: "Object-Oriented", correct: false },
            {text: "Object-Based", correct: true },
            {text: "Assembly-language", correct: false },
            {text: "High-level", correct: false }
        ]
    },
    {
        question : "Which one of the following also known as Conditional Expression:",
        answers: [
            {text: "Alternative to if-else", correct: false },
            {text: "Switch statement", correct: false },
            {text: "If-then-else statement", correct: false },
            {text: "immediate if", correct: true }
        ]
    },
    {
        question : " In JavaScript, what is a block of statement?",
        answers: [
            {text: "Conditional block", correct: false },
            {text: "block that combines a number of statements into a single compound statement", correct: true },
            {text: "both conditional block and a single statement", correct: false },
            {text: "block that contains a single statement", correct: false }
        ]
    },
    {
        question : "When interpreter encounters an empty statements, what it will do:",
        answers: [
            {text: "Shows a warning", correct: false },
            {text: "Prompts to complete the statement", correct: false },
            {text: "Throws an error", correct: false },
            {text: "Ignores the statements", correct: true }
        ]
    },
    {
        question : "The 'function' and 'var' are known as",
        answers: [
            {text: "Keywords", correct: false },
            {text: "Data types", correct: false },
            {text: "Declaration statements", correct: true },
            {text: "Prototypes", correct: false }
        ]
    },
    {
        question : "Which one of the following is the correct way for calling the JavaScript code?",
        answers: [
            {text: "Preprocessor", correct: false },
            {text: "Triggering Event", correct: false },
            {text: "RMI", correct: false },
            {text: "Function/Method", correct: true }
        ]
    },
    {
        question : "Which of the following type of a variable is volatile?",
        answers: [
            {text: "Mutable variable", correct: true },
            {text: "Dynamic variable", correct: false },
            {text: "Volatile variable", correct: false },
            {text: "Immutable variable", correct: false }
        ]
    },
    {
        question : "In the JavaScript, which one of the following is not considered as an error:",
        answers: [
            {text: "Syntax error", correct: false },
            {text: "Missing of semicolons", correct: false },
            {text: "Division by zero", correct: true },
            {text: "Missing of Bracket", correct: false }
        ]
    },

];

const questionElement = document.getElementById("question");
const nxtBtn = document.getElementById("next-btn");
const AnsBtns = document.getElementById("answer-button");

let currentQuestionIndex = 0 ;
let score = 0;

function StartQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nxtBtn.innerHTML = "Next";
    ShowQuestion();

}

function ShowQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex+1;
    questionElement.innerHTML = questionNo +". "+ currentQuestion.question;
    console.log(questionElement);
    currentQuestion.answers.forEach(answer=>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        AnsBtns.appendChild(button); 

        if(answer.correct){
            button.dataset.correct = answer.correct
        }

        button.addEventListener("click", slelectAns)
    });
}


function resetState(){
    nxtBtn.style.display = "none"
    while (AnsBtns.firstChild) {
        AnsBtns.removeChild(AnsBtns.firstChild);
    }

}

function slelectAns(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    // console.log(isCorrect);
    if(isCorrect){
        selectedBtn.classList.add("correct")
        score++;
    }else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(AnsBtns.children).forEach((button)=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");  
        }
        button.disabled = true;
    });
    nxtBtn.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`
    nxtBtn.innerHTML = "Play Again"
    nxtBtn.style.display = "block"
}


function HandleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        ShowQuestion();
    }else{
        showScore();
    }
}

nxtBtn.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        HandleNextButton();
    }else{
        StartQuiz()
    }
})
StartQuiz()
