let timer = 30;
let score = 0;
let currentQuestionIndex = 0;
let interval;
let rockScore = 0;

const questions = [
    { question: "What is the capital of France", answer: "Paris"},
    { question: "How many legs does a spider have", answer: "8"},
    { question: "What is 5+5?", answer: "10"},
    { question: "Who wrote 'Romeo and Juliet'?", answer: "Shakespeare"},
    { question: "What is the capital of Germany", answer: "Berlin"},
    { question: "What is the chemical symbol for water?", answer: "H2O"},
    { question: "What is 12x8?", answer: "96"},
    { question: "Who was the first president of the USA", answer: "George Washington"},
    { question: "What is the largest desert in the world", answer: "Sahara"},
    { question: "What is the highest score in bowling?", answer: "300"},
    { question: "What is the name of the wizarding school in Harry Potter", answer: "Hogwarts"},
    { question: "What is the highest grossing movie of all time?", answer: "Avatar"},
    { question: "Which band wrote 'Bohemian Rhapsody'?", answer: "Queen"},
    { question: "What is the main ingredient in guacamole?", answer: "Avocado"},
    { question: "Who invented the telephone?", answer: "Graham Bell"},
    { question: "What is the fastest animal on land?", answer: "cheetah"},
    { question: "Who created Mickey Mouse?", answer: "Walt Disney"},
    { question: "What is the rarest blood type?", answer: "AB"},
    { question: "What comes after a trillion?", answer: "quadrillion"},
    { question: "What is the 'Friends' coffee shop called?", answer: "Central Perk"},
    { question: "How many planets in our solar system?", answer: "8"},
    { question: "Which mammal can fly?", answer: "bat"},
    { question: "What is the biggest festival in Brazil", answer: "Carnival"}
];

const timerElement = document.getElementById("timer");
const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const scoreElement = document.getElementById("score");
const startButton = document.getElementById("start-button");
const rockElement = document.getElementById("rock");
const rockScoreElement = document.getElementById("rock-counter");

rockElement.addEventListener("click", () => {
    rockScore++;
    rockScoreElement.textContent = `You've Clicked me ${rockScore} Times!`
})

function startGame() {
    if (currentQuestionIndex > questions.length) {
        currentQuestionIndex = 0;
    }
    score = 0;
    timer = 30;
    startButton.disabled = true;
    answerElement.disabled = false;
    answerElement.value = "";
    scoreElement.textContent = `Score: ${score}`;
    startButton.classList.add("hidden")
    answerElement.classList.remove("hidden")
    loadQuestion();
    startTimer();
}

function startTimer() {
    interval = setInterval(() => {
        timer--;
        timerElement.textContent = timer;
        if (timer === 0) {
            endGame();
        }
    }, 1000);
}

function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        questionElement.textContent = questions[currentQuestionIndex].question;
    } else {
        endGame();
    }
}

function checkAnswer() {
    const userAnswer = answerElement.value.trim().toLowerCase();
    const correctAnswer = questions[currentQuestionIndex].answer.toLowerCase();

    if (userAnswer.includes(correctAnswer) || correctAnswer.includes(userAnswer)) {
        score++;
        scoreElement.textContent = `Score: ${score}`;
    }
    answerElement.value = "";
    currentQuestionIndex++;
    loadQuestion();
}

function endGame() {
    clearInterval(interval);
    questionElement.textContent = "Game over! Your final score is: " + score;
    startButton.disabled = false;
    startButton.classList.remove("hidden")
    answerElement.disabled = true;
    timer = 30;
    timerElement.textContent = timer;
    startButton.textContent = "Restart";
    answerElement.classList.add("hidden")
    currentQuestionIndex++;
}

startButton.addEventListener('click', startGame);
answerElement.addEventListener('keyup', (event) => {
    if (event.key === "Enter") {
        checkAnswer()
    }
});