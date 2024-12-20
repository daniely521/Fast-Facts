let timer = 30;
let score = 0;
let currentQuestionIndex = 0;
let interval;
let rockScore = 0;

const defaultQuestions = [
    { question: "What is the capital of France?", answer: "Paris"},
    { question: "How many legs does a spider have?", answer: "8"},
    { question: "What is 5+5?", answer: "10"},
    { question: "Who wrote 'Romeo and Juliet'?", answer: "Shakespeare"},
    { question: "What is the capital of Germany?", answer: "Berlin"},
    { question: "What is the chemical symbol for water?", answer: "H2O"},
    { question: "What is 12x8?", answer: "96"},
    { question: "Who was the first president of the USA?", answer: "George Washington"},
    { question: "What is the largest desert in the world?", answer: "Antarctica"},
    { question: "What is the highest score in bowling?", answer: "300"},
    { question: "What is the name of the wizarding school in Harry Potter?", answer: "Hogwarts"},
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
    { question: "What is the biggest festival in Brazil?", answer: "Carnival"},
    { question: "How many continents are there", answer: "7"},
    { question: "Who developed the theory of relativity", answer: "Einstein"},
    { question: "What is the square root of 144?", answer: "12"},
    { question: "What year did WWII end?", answer: "1945"},
    { question: "What country has the most population?", answer: "India"},
    { question: "How many players on a soccer team?", answer: "11"},
    { question: "What is the name of the hobbit in 'The Hobbit'?", answer: "Bilbo Baggins"},
    { question: "Which movie has the quote 'I'll be back'?", answer: "Terminator"},
    { question: "Who sang shape of you?", answer: "Ed Sheeran"},
    { question: "Which country is known for its sushi?", answer: "Japan"},
    { question: "What is the most used programming language?", answer: "Javascript"},
    { question: "What animal is known for its mimicking sounds?", answer: "parrot"},
    { question: "What is Spongebob's snail called?", answer: "Gary"},
    { question: "Which language has the most native speakers?", answer: "Chinese"},
    { question: "Which word is spelt incorrectly in every dictionary?", answer: "incorrectly"},
    { question: "What is the longest running animated TV show?", answer: "Simpsons"},
    { question: "What is the hottest planet in the solar system?", answer: "Venus"},
    { question: "What is the baby kangaroo called?", answer: "Joey"},
    { question: "Which country celebrates thanksgiving in October?", answer: "Canada"},
    { question: "What is the largest ocean in the world?", answer: "Pacific"},
    { question: "What do plants absorb during photosynthesis?", answer: "carbon dioxide"},
    { question: "What is pi to 2 decimal places?", answer: "3.14"},
    { question: "What empire was ruled by Julius Caesar?", answer: "Roman"},
    { question: "Which river runs through egypt?", answer: "Nile"},
    { question: "What sports use 'Love' for 0 points?", answer: "Tennis"},
    { question: "Which song is most streamed on spotify?", answer: "Blinding Lights"},
    { question: "What fruit is the 'king of fruits'?", answer: "Durian"},
    { question: "What does HTTP stand for?", answer: "Hypertext Transfer Protocol"},
    { question: "What is the tallest tree species?", answer: "redwood"},
    { question: "What is the name of batman's butler?", answer: "Alfred"},
    { question: "What is the national animal of Scotland?", answer: "Unicorn"},
    { question: "In which city is Strangers Things set?", answer: "Hawkins"},
    { question: "Which planet has the largest rings?", answer: "Saturn"},
    { question: "What is a group of crows called?", answer: "murder"},
    { question: "What is the name of the 'Jewish festival of lights'?", answer: "Hannukah"},
    { question: "What year did the Titanic sink?", answer: "1912"},
    { question: "What is the powerhouse of the cell?", answer: "mitochondria"},
    { question: "How many sides does a hexagon have?", answer: "6"},
    { question: "Who is the first man to step on the moon?", answer: "Neil Armstrong"},
    { question: "Which mountain range is mount everest located in?", answer: "Himalayas"},
    { question: "Who has the most olympic medals?", answer: "Michael Phelps"},
    { question: "Who is the lead singer for Coldplay?", answer: "Chris Martin"},
    { question: "What cheese is traditionally used for pizza?", answer: "mozarella"},
    { question: "What was the first video game?", answer: "pong"},
    { question: "What is the largest mammal in the world?", answer: "blue whale"},
    { question: "What animal is the 'ship of the desert'?", answer: "camel"},
];


let incorrectQuestions = [];
let questions = defaultQuestions;

const timerElement = document.getElementById("timer");
const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const scoreElement = document.getElementById("score");
const startButton = document.getElementById("start-button");
const rockElement = document.getElementById("rock");
const rockScoreElement = document.getElementById("rock-counter");
const incorrect = document.getElementById("incorrect-revealed");
const addScreen = document.getElementById("adding-screen");
const defaultButton = document.getElementById("default-button");
const saveButton = document.getElementById("save-button");
const newButton = document.getElementById("new-question");
const addScreenButton = document.getElementById("to-add");
const questionsList = document.getElementById("questions-container");

renderQuestions();

rockElement.addEventListener("click", () => {
    rockScore++;
    rockScoreElement.textContent = `You've Clicked me ${rockScore} Times!`
})

saveButton.addEventListener("click", () => {
    console.log("save button clicked");
    saveQuestions();
});

newButton.addEventListener("click", () => {
    addNewQuestion();
    console.log("new button clicked");
});

addScreenButton.addEventListener("click", () => {
    document.getElementById("container").classList.add('hidden');
    addScreen.classList.remove("hidden")
});

document.getElementById("home-button").addEventListener("click", () => {
    document.getElementById("container").classList.remove('hidden');
    addScreen.classList.add("hidden")
});

document.getElementById("clear-button").addEventListener("click", () => {
    questions = [];
    renderQuestions();
});

defaultButton.addEventListener("click", () => {
    console.log("defauly clicked")
    questions = [
        { question: "What is the capital of France?", answer: "Paris"},
        { question: "How many legs does a spider have?", answer: "8"},
        { question: "What is 5+5?", answer: "10"},
        { question: "Who wrote 'Romeo and Juliet'?", answer: "Shakespeare"},
        { question: "What is the capital of Germany?", answer: "Berlin"},
        { question: "What is the chemical symbol for water?", answer: "H2O"},
        { question: "What is 12x8?", answer: "96"},
        { question: "Who was the first president of the USA?", answer: "George Washington"},
        { question: "What is the largest desert in the world?", answer: "Antarctica"},
        { question: "What is the highest score in bowling?", answer: "300"},
        { question: "What is the name of the wizarding school in Harry Potter?", answer: "Hogwarts"},
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
        { question: "What is the biggest festival in Brazil?", answer: "Carnival"},
        { question: "How many continents are there", answer: "7"},
        { question: "Who developed the theory of relativity", answer: "Einstein"},
        { question: "What is the square root of 144?", answer: "12"},
        { question: "What year did WWII end?", answer: "1945"},
        { question: "What country has the most population?", answer: "India"},
        { question: "How many players on a soccer team?", answer: "11"},
        { question: "What is the name of the hobbit in 'The Hobbit'?", answer: "Bilbo Baggins"},
        { question: "Which movie has the quote 'I'll be back'?", answer: "Terminator"},
        { question: "Who sang shape of you?", answer: "Ed Sheeran"},
        { question: "Which country is known for its sushi?", answer: "Japan"},
        { question: "What is the most used programming language?", answer: "Javascript"},
        { question: "What animal is known for its mimicking sounds?", answer: "parrot"},
        { question: "What is Spongebob's snail called?", answer: "Gary"},
        { question: "Which language has the most native speakers?", answer: "Chinese"},
        { question: "Which word is spelt incorrectly in every dictionary?", answer: "incorrectly"},
        { question: "What is the longest running animated TV show?", answer: "Simpsons"},
        { question: "What is the hottest planet in the solar system?", answer: "Venus"},
        { question: "What is the baby kangaroo called?", answer: "Joey"},
        { question: "Which country celebrates thanksgiving in October?", answer: "Canada"},
        { question: "What is the largest ocean in the world?", answer: "Pacific"},
        { question: "What do plants absorb during photosynthesis?", answer: "carbon dioxide"},
        { question: "What is pi to 2 decimal places?", answer: "3.14"},
        { question: "What empire was ruled by Julius Caesar?", answer: "Roman"},
        { question: "Which river runs through egypt?", answer: "Nile"},
        { question: "What sports use 'Love' for 0 points?", answer: "Tennis"},
        { question: "Which song is most streamed on spotify?", answer: "Blinding Lights"},
        { question: "What fruit is the 'king of fruits'?", answer: "Durian"},
        { question: "What does HTTP stand for?", answer: "Hypertext Transfer Protocol"},
        { question: "What is the tallest tree species?", answer: "redwood"},
        { question: "What is the name of batman's butler?", answer: "Alfred"},
        { question: "What is the national animal of Scotland?", answer: "Unicorn"},
        { question: "In which city is Strangers Things set?", answer: "Hawkins"},
        { question: "Which planet has the largest rings?", answer: "Saturn"},
        { question: "What is a group of crows called?", answer: "murder"},
        { question: "What is the name of the 'Jewish festival of lights'?", answer: "Hannukah"},
        { question: "What year did the Titanic sink?", answer: "1912"},
        { question: "What is the powerhouse of the cell?", answer: "mitochondria"},
        { question: "How many sides does a hexagon have?", answer: "6"},
        { question: "Who is the first man to step on the moon?", answer: "Neil Armstrong"},
        { question: "Which mountain range is mount everest located in?", answer: "Himalayas"},
        { question: "Who has the most olympic medals?", answer: "Michael Phelps"},
        { question: "Who is the lead singer for Coldplay?", answer: "Chris Martin"},
        { question: "What cheese is traditionally used for pizza?", answer: "mozarella"},
        { question: "What was the first video game?", answer: "pong"},
        { question: "What is the largest mammal in the world?", answer: "blue whale"},
        { question: "What animal is the 'ship of the desert'?", answer: "camel"},
    ];;
    renderQuestions();
});

function startGame() {
    if (currentQuestionIndex > questions.length) {
        currentQuestionIndex = 0;
    }
    score = 0;
    timer = 30;
    incorrectQuestions = [];
    startButton.disabled = true;
    answerElement.disabled = false;
    answerElement.value = "";
    scoreElement.textContent = `Score: ${score}`;
    scoreElement.classList.remove('hidden');
    startButton.classList.add("hidden");
    answerElement.classList.remove("hidden");
    incorrect.classList.add("hidden");
    document.getElementById("incorrect-answer").classList.add("hidden");
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

    if ((userAnswer.includes(correctAnswer) || correctAnswer.includes(userAnswer)) && userAnswer) {
        score++;
        scoreElement.textContent = `Score: ${score}`;
        timerElement.textContent = timer;
    } else {
        incorrectQuestions.push(currentQuestionIndex);
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
    answerElement.classList.add("hidden");
    currentQuestionIndex++;
    scoreElement.classList.add("hidden");
    revealWrong();
}

startButton.addEventListener('click', () => {
    console.log("Start button clicked");
    startGame();
});

answerElement.addEventListener('keyup', (event) => {
    if (event.key === "Enter") {
        checkAnswer()
    }
});

function revealWrong() {
    document.getElementById("incorrect-answer").classList.remove("hidden");
    document.getElementById("incorrect-revealed").classList.remove("hidden");
    incorrectQuestions.forEach(Cquestion => {
        const incorrectAnswer = document.createElement("p");
        document.getElementById("incorrect-revealed").appendChild(incorrectAnswer);
        incorrectAnswer.classList.add("incorrect")
        incorrectAnswer.textContent = questions[Cquestion].question + "    -    " + questions[Cquestion].answer;
    });
}

function renderQuestions() {
    questionsList.innerHTML = "";

    questions.forEach((q, index) => {
        const questionsContainer = document.createElement("div");
        questionsContainer.classList.add("question-cont");

        const questionInput = document.createElement("input");
        questionInput.type = "text";
        questionInput.value = q.question;
        questionInput.classList.add("question-input");

        const answerInput = document.createElement("input");
        answerInput.type = "text";
        answerInput.value = q.answer;
        answerInput.classList.add("answer-input")

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button")
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            deleteQuestion(index);
        });

        questionsContainer.appendChild(questionInput);
        questionsContainer.appendChild(answerInput);
        questionsContainer.appendChild(deleteButton);

        questionsList.appendChild(questionsContainer);
    });

    
}

function addNewQuestion() {
    questions.push({ question: "", answer: "" });
    renderQuestions();
    document.getElementById("secret-button").classList.remove("hidden");
}

function deleteQuestion(index) {
    questions.splice(index, 1);
    renderQuestions();
}

function saveQuestions() {
    const updatedQuestions = [];
    const questionContainers = document.querySelectorAll(".question-cont");

    questionContainers.forEach((container) => {
        const questionInput = container.querySelector(".question-input").value.trim();
        const answerInput = container.querySelector(".answer-input").value.trim();

        if (questionInput && answerInput) {
            updatedQuestions.push({question: questionInput, answer: answerInput});
        }
    });

    if (updatedQuestions.length === 0) {
        alert("Please add at least one valid question and answer.");
        return;
    }

    console.log("not updated:", questions);
    questions = updatedQuestions;
    console.log("updated questions:", questions);
}



