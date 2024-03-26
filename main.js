import "./style.css";

const userInput = document.getElementById("inputNum");
const number = Math.trunc(Math.random() * 20);
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
  } else {
    document.getElementById("body").style.backgroundColor = "red";
    console.log("no red");
  }
}
