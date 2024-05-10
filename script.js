"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log("Your have entered", guess);

  if (!guess) {
    document.querySelector(".message").textContent =
      "Please enter a number! 🙏";
    console.log("Please enter a number! 🙏");
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!!";
  } else if (guess > secretNumber) {
    if (score > 0) {
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game!";
    }
    document.querySelector(".message").textContent = "📈 Too high";
  } else if (guess < secretNumber) {
    if (score > 0) {
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game!";
    }
    document.querySelector(".message").textContent = "📉 Too low";
  }
});
