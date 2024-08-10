const q1 = {
  question:"What is the largest living species of Lizard, found primarily in Indonesia?",
  mchoices: ["Komodo dragon","Saltwater crocodile", "Black mamba","Green anaconda"],
  answer: 0
};

const q2 = {
  question: "What is the World's Largest Planet?",
  mchoices: ["Earth", "Saturn", "Jupiter", "Uranus"],
  answer: 2
};

const q3 = {
  question: "Who was the lead singer of the rock band Queen?",
  mchoices: ["Freddie Mercury", "Brain May", "Roger Taylor", "John Deacon"],
  answer: 0
};

const q4 = {
  question: "What is the chemical symbol for gold?",
  mchoices: ["Ag", "Au", "Hg", "Pb"],

  answer: 0
};

const q5 = {
  question:"What is is the smallest country in the World, both in terms of population and land area?",
  mchoices: ["Vatican City", "Monaco", "Nauru", "Tuvalu"],

  answer: 0
};

const questions= [q1,q2,q3,q4,q5];

const testQuestion = document.getElementById("test-question");
let currentQuestion = 0;
let rightAnswers = 0;
const multiChoice = document.querySelectorAll(".mChoice");
const check = document.getElementById("displayContainer");

displayQuestion=()=>{
  testQuestion.textContent= questions[currentQuestion].question;
  multiChoice.forEach((options,i)=>{
    console.log(currentQuestion);
    options.textContent = questions[currentQuestion]. mchoices[i];  
  });

  check.textContent="";
}


function checkAnswer(selected) {
  if (selected === questions[currentQuestion].answer) {
    check.textContent = "Correct!";
    rightAnswers++;
  } else {
    check.textContent = "Incorrect!";
  }

  setTimeout(() => {
    currentQuestion++;

    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      const quizContainer = document.querySelector(".quiz-container");
      quizContainer.innerHTML = `<p>You got ${rightAnswers} out of ${questions.length} questions.</p>`;
    }
  }, 2000);
}

displayQuestion();

