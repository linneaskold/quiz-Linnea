//Här under är datan till quizet

const quizData = [
    {
        question: "What is the most recent re game that was released?",
        options: ["Re 8", "Requiem", "Re Veronica", "Re 4 remake"],
        correct: 1,
        image: "bilder/re.jpg"
    },

    {
        question: "How many minutes can Albert Wesker spare for you",
        options: ["4", "12", "8", "7"],
        correct: 3,
        image: "bilder/wesker.jpg"
    },

    {
        question: "What is the name of Ethan Winters wife?",
        options: ["Mia", "Zoe", "Eveline", "Marguerite"],
        correct: 0,
        image: "bilder/mia.jpg"
    },

    {
        question: "Who is not one of the four lords in re 8",
        options: ["Karl Heisenberg", "Donna Beneviento", "Mother Miranda", "Lady Dimitrescu"],
        correct: 2,
        image:  "bilder/lords.jpg"
    },

    {
        question: "What is the name of the main virus in re5",
        options: ["T-Veronica virus", "G-virus", "T-virus", "Uroboros"],
        correct: 3,
        image: "bilder/re5.jpg"
    }

];

//dehär under är variabler
// let ändrar datan, konst så kan det aldrig ändras

let currentQuestion = 0;
let score = 0;
let playerName = "";
let Leaderboard = [];

//Denhär funktionen ska starta quizet

function startQuiz() {
    playerName = document.getElementById("player-name").value.trim();
    if (playerName){
        document.getElementById("start").style.display = "none";
        document.getElementById("quiz").style.display = "block";
        loadQuestion();
    }
    else{
        alert("Enter your name to start the quiz");
    }
}


//Dehär ska visa frågorna och alternativ
function loadQuestion() {
    const quizElement = document.getElementById("quiz")
    const questionData = quizData[currentQuestion];

    let questionHTML = `
        <div class = "question">
            ${questionData.image ? `<img src="${questionData.image}" alt="" class="question-image">`: ""}
            <h2>Question${currentQuestion + 1 }:</h2>
            <p>${questionData.question}</p>
            <div class = "options">
    `;
    questionData.options.forEach((option, index) => {

        questionHTML += `
            <button onclick="checkAnswer(${index})">${option}</button>
        `;
    });

    questionHTML += `
            </div>
        </div>
    `;
    quizElement.innerHTML = questionHTML;
}

function checkAnswer(selectedIndex) {
    const questionData = quizData[currentQuestion];
    const buttons = document.querySelectorAll(".options button");

    buttons.forEach((button, index) => {
        button.disabled = true;
        if (index === questionData.correct) {
            button.style.backgroundColor = "green";
        }else if(index === selectedIndex){
            button.style.backgroundColor = "red";
        }
    });

    if (selectedIndex === questionData.correct){
        score++;
    }

    currentQuestion++;
    if (currentQuestion < quizData.length){
        setTimeout(loadQuestion, 1500);
    }else{
        setTimeout(showResults, 1500);
    }
}