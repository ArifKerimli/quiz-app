const underline = document.querySelector(".nav-underline");
const home = document.querySelectorAll("nav .container div ul li a")[0];
const quiz = document.querySelectorAll("nav .container div ul li a")[1];
const contact = document.querySelectorAll("nav .container div ul li a")[2];
const nav = document.querySelector("nav");

const navLink = document.querySelector(".nav-links");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", run);

function run() {
  hamburger.classList.toggle("toggle");
  navLink.classList.toggle("nav-active");
}

home.addEventListener("click", homeClicked);

function homeClicked() {
  underline.classList.add("nav-underline-left");
  underline.classList.remove("nav-underline-center");
  underline.classList.remove("nav-underline-right");
}

quiz.addEventListener("click", quizClicked);

function quizClicked() {
  underline.classList.add("nav-underline-center");
  underline.classList.remove("nav-underline-left");
  underline.classList.remove("nav-underline-right");
}

contact.addEventListener("click", contactClicked);

function contactClicked() {
  underline.classList.add("nav-underline-right");
  underline.classList.remove("nav-underline-center");
  underline.classList.remove("nav-underline-left");
}

window.addEventListener("scroll", bgChangeOnScroll);

function bgChangeOnScroll() {
  let scroll = window.pageYOffset;
  if (scroll > 300) {
    document.body.style.backgroundColor = "#fff";
    nav.style.backgroundColor = "#fff";
  } else {
    document.body.style.backgroundColor = "#1E1E1E";
    nav.style.backgroundColor = "#1E1E1E";
  }
}
