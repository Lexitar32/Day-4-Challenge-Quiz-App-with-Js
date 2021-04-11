// The Quiz Questions
const quizData = [
  {
    question: "How old is Nigeria?",
    a: "60",
    b: "45",
    c: "42",
    d: "61",
    correct: "a",
  },
  {
    question: "What is the full meaning of CSS?",
    a: "Cascading Style Server",
    b: "Cascade Styling Surface",
    c: "Cascading Surface Sheet",
    d: "Cascading Style Sheets",
    correct: "d",
  },
  {
    question: "What is the most popular programming language in 2020?",
    a: "Java",
    b: "PHP",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "Who is the President of America?",
    a: "Joe Biden",
    b: "Donald Trump",
    c: "Ivan Saldano",
    d: "Mihai Andrei",
    correct: "a",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Stylesheet",
    c: "JavaScript Object Notation",
    d: "Hyper Markup Language",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1998",
    b: "1993",
    c: "1995",
    d: "2000",
    correct: "c",
  },
  {
    question: "When was Buhari elected as Nigerian President?",
    a: "2010",
    b: "2016",
    c: "2015",
    d: "2019",
    correct: "c",
  },
  {
    question: "All these are Server Side Language except?",
    a: "HTML",
    b: "PHP",
    c: "Node.js",
    d: "Ruby on rails",
    correct: "a",
  },
  {
    question: "All these are JavaScript Framework except?",
    a: "Laravel",
    b: "React.js",
    c: "Node.js",
    d: "Vue.js",
    correct: "a",
  },
  {
    question: "Bonus mark, click on option a?",
    a: "a",
    b: "b",
    c: "c",
    d: "d",
    correct: "a",
  },
];

// Getting where to insert the questions
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

// Function that loads question
function loadQuiz() {
  // First Deselect Default Option
  deselectAnswer();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question; // Main Question
  a_text.innerText = currentQuizData.a; // Option a
  b_text.innerText = currentQuizData.b; // Option b
  c_text.innerText = currentQuizData.c; // Option c
  d_text.innerText = currentQuizData.d; // Option d
}

// Get Selected Option
const getSelected = () => {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
};

// Deselection Default Option
function deselectAnswer() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitButton.addEventListener("click", () => {
  // Check to see the answer
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
  }
  // Increment Upon Click
  currentQuiz++;

  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    quiz.innerHTML = `
    <h2>You answered ${score} out of ${quizData.length} correctly.</h2>
     <button onclick="location.reload()">Retake Quiz!</button>`;
  }
});
