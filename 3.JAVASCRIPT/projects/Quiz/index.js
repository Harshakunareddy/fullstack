
const questions = [
    {
        question: "Which is the largest animal in the world ?",
        answers: [
            { text: "Shark",correct: false },
            { text: "Blue Whale",correct: true },
            { text: "Elephant",correct: false },
            { text: "Giraffe",correct: false },
        ]
        
    },
    {
        question: "Which is the smallest country in the world ?",
        answers: [
            { text: "Vatican City",correct: true },
            { text: "India",correct: false },
            { text: "Sri Lanka",correct: false },
            { text: "Tuwalu",correct: false },
        ]
        
    },
    {
        question: "Which is the largest desert  in the world ?",
        answers: [
            { text: "Sahara",correct: true },
            { text: "Gobi",correct: false },
            { text: "Kalahari",correct: false },
            { text: "none",correct: false },
        ]
        
    },
    {
        question: "Which is the smallest continent in the world ?",
        answers: [
            { text: "Asia",correct: false },
            { text: "Arctic",correct: false },
            { text: "Australia",correct: true },
            { text: "Africa",correct: false },
        ]
        
    },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";

    showQuestion();
}

let showQuestion =()=>{

    resetState();//for reset prev

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;


    currentQuestion.answers.forEach(answer =>{

        const button = document.createElement("button");
        button.innerHTML = answer.text;

        //for creating a class of btn
        button.classList.add("btn");

        // it will append inside the div of buttons as a child.
        answerButton.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });





}



function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);



    }
}


function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;

    }
    else{
        selectedBtn.classList.add("in-correct");

    }
    //disabling the click function after clicking one
    Array.from(answerButton.children).forEach(button=>{
        if(button.dataset.correct === 'true'){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}


function showScore(){
    resetState();
    questionElement.innerHTML = `Your Score ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";

}



function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});




startQuiz();


























