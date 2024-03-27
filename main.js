import "./style.css";

const userInput = document.getElementById("inputNum");
let number = Math.trunc(Math.random() * 10);
const checkBtn = document.getElementById("btn");

console.log(number);

document.getElementById("btn").addEventListener("click", displayNUm);

function displayNUm() {
  console.log(userInput.value);
  colorChange();
}

function colorChange() {
  if (number == userInput.value) {
    document.getElementById("body").style.backgroundColor = "green";
    document.getElementById("theNumber").innerHTML = userInput.value;
    document.getElementById("status").innerHTML = "The number is currect...";
    scoreCalculate();
  } else if (number > userInput.value) {
    document.getElementById("status").innerHTML = "Number is low...";
    document.getElementById("status").style.color = "white";
  } else if (number < userInput.value) {
    document.getElementById("status").innerHTML = "Number is high...";
    document.getElementById("status").style.color = "white";
  } else if (number != userInput.value) {
    document.getElementById("status").innerHTML = "Input Valid number";
    document.getElementById("status").style.color = "red";
  } else {
  }
}

document.getElementById("again").addEventListener("click", refresh);

function refresh() {
  // window.location.reload();
  number = Math.trunc(Math.random() * 10);
  document.getElementById("body").style.backgroundColor = "gray";
  console.log("random", number);
}

function scoreCalculate() {
  const scoreZero = document.getElementById("score").textContent;
  let score = parseInt(scoreZero);

  if (number == userInput.value) {
    score++;
    document.getElementById("score").innerHTML = score;
  }
}
