import "./style.css";

const userInput = document.getElementById("inputNum");
const number = Math.trunc(Math.random() * 10);
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
  } else if (number > userInput.value) {
    document.getElementById("status").innerHTML = "Number is low...";
  } else if (number < userInput.value) {
    document.getElementById("status").innerHTML = "Number is high...";
  } else {
    ocument.getElementById("status").innerHTML = "Input Valid number";
    document.getElementById("body").style.backgroundColor = "red";
    console.log("no red");
  }
  if (number != userInput.value) {
    document.getElementById("body").style.backgroundColor = "gray";
  }
}
