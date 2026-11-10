const quizData = [
    {
        question: "What is the most recent re game that was released?",
        options: ["Re 8", "Requiem", "Re Veronica", "Re 4 remake"],
        correct: 1
    },

    {
        question: "How many minutes can Albert Wesker spare for you",
        options: ["4", "12", "8", "7"],
        correct: 3
    },

    {
        question: "What is the name of Ethan winters wife?",
        options: ["Mia", "Rose", "Eveline", "Marguerite"],
        correct: 0
    },

    {
        question: "Who is not one of the four lords in re 8",
        options: ["Karl Heisenberg", "Donna Beneviento", "Mother Miranda", "Lady Dimitrescu"],
        correct: 2
    },

    {
        question: "What is the name of the main virus in re5",
        options: ["T-Veronica virus", "G-virus", "T-virus", "Uroboros"],
        correct: 3
    },

];

let currentQuestion = 0;
let score = 0;
let playerName = "";
let Leaderboard = [];

function startQuiz() {
    playerName = document.getElementById("player-Name").value.trim();
    if (playerName){
        document.getElementById("start").style.display = "none";
        document.getElementById("quiz").style.display = "block";
        loadQuestion();
    }
    else{
        alert("Enter your name to start the quiz");
    }
}

    