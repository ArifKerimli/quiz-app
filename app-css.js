const heading = document.querySelector("h3");
const variants = document.querySelector(".variants");
const submit = document.querySelector(".submit");
const navigate = document.querySelector(".navigate span");
const quiz = document.querySelector(".quiz");
const resultCard = document.querySelector(".result");
const trueAns = document.querySelector(".result p span");
let value = 0;
let navValue = 1;
let trueAnswers = 0;

submit.addEventListener("click", nextQuestion);

addQuestion(0);
addVariants(0);

function addQuestion(index) {
  heading.innerHTML = "<span>" + cssQuestions[index].question + "<span>";
}

function addVariants(index) {
  const variantTags =
    "<span class='option'>" +
    cssQuestions[index].variants[0] +
    "</span>" +
    "<span class='option'>" +
    cssQuestions[index].variants[1] +
    "</span>" +
    "<span class='option'>" +
    cssQuestions[index].variants[2] +
    "</span>";

  variants.innerHTML = variantTags;

  const variant = variants.querySelectorAll(".option");
  for (let i = 0; i < 3; i++) {
    variant[i].setAttribute("onclick", "variantSelected(this)");
  }
}

function variantSelected(answer) {
  let userAns = answer.textContent;
  let correctAnswer = cssQuestions[value].correctAnswer;

  if (userAns == correctAnswer) {
    trueAnswers++;
    answer.classList.add("correct");
  } else {
    answer.classList.add("false");
  }

  const variant = variants.querySelectorAll(".option");

  for (let i = 0; i < 3; i++) {
    variant[i].classList.add("eventNone");
  }
}

function nextQuestion() {
  value++;
  navValue++;
  if (navValue == 10) {
    submit.setAttribute("value", "Nəticəm");
    submit.addEventListener("click", showResult);
  }
  addQuestion(value);
  addVariants(value);

  navigate.innerHTML = navValue;
}

function showResult() {
  resultCard.classList.add("result-active");
  quiz.classList.add("quiz-none");
  trueAns.innerHTML = trueAnswers;
}
