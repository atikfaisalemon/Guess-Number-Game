import "./style.css";

const userInput = document.getElementById("inputNum");
let number = Math.trunc(Math.random() * 10);
const checkBtn = document.getElementById("btn");

console.log(number);

checkBtn.addEventListener("click", displayNUm);

function displayNUm() {
  console.log(userInput.value);
  colorChange();
}

function colorChange() {
  if (number == userInput.value) {
    document.getElementById("body").style.backgroundColor = "green";
    document.getElementById("theNumber").innerHTML = userInput.value;
    document.getElementById("text").innerHTML = "You Win Congratulations";
    document.getElementById("status").innerHTML = "Number is correct";
    document.getElementById("status").style.color = "white";
    document.getElementById("inputNum").style.borderColor = "white";

    scoreCalculate();
    setTimeout(refresh, 2000);
  } else if (number > userInput.value) {
    document.getElementById("text").innerHTML = "Guess The Number Game";
    document.getElementById("status").innerHTML = "Number is Incorrect";
    document.getElementById("status").style.color = "red";
    document.getElementById("inputNum").style.borderColor = "red";
  } else if (number < userInput.value) {
    document.getElementById("text").innerHTML = "Guess The Number Game";
    document.getElementById("status").innerHTML = "Number is Incorrect";
    document.getElementById("status").style.color = "red";
    document.getElementById("inputNum").style.borderColor = "red";
  } else if (number != userInput.value) {
    document.getElementById("text").innerHTML = "Guess The Number Game";
    document.getElementById("status").innerHTML = "Input Valid number";
    document.getElementById("status").style.color = "red";
  } else {
  }
}

function refresh() {
  // window.location.reload();
  number = Math.trunc(Math.random() * 10);
  document.getElementById("text").innerHTML = "Guess The Number Game";
  document.getElementById("body").style.backgroundColor = "gray";
  console.log("random", number);
  document.getElementById("btn").style.display = "block";
  document.getElementById("status").innerHTML = "Gusseing Started again";
  document.getElementById("status").style.color = "white";
  userInput.value = "";
  document.getElementById("theNumber").innerHTML = "?";
}

document.getElementById("again").addEventListener("click", function () {
  window.location.reload();
});

function scoreCalculate() {
  const scoreZero = document.getElementById("score").textContent;
  let score = parseInt(scoreZero);

  if (number == userInput.value) {
    score++;
    document.getElementById("score").innerHTML = score;
    document.getElementById("btn").style.display = "none";
  }
}
