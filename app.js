let resetButton = document.getElementById("reset");
let gameSeq = [];
let userSeq = [];
let buttons = ["red", "blue", "yellow", "green"];
let gameStart = false;
let level = 0;
let h2 = document.querySelector("h2");

function levelUp() {
  h2.style.color = "black";
  level++;
  userSeq = [];
  h2.innerText = `Level ${level}`;
  let randomNmber = Math.floor(Math.random() * 3);
  let randomColor = buttons[randomNmber];
  let randomButton = document.querySelector(`.${randomColor}`);
  buttonFlash(randomButton);
  gameSeq.push(randomColor);
  console.log(gameSeq);
}

function buttonFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 210);
}

resetButton.addEventListener("click", function () {
  if (gameStart == false) {
    resetButton.style.visibility = "hidden";
    gameStart = true;
    levelUp();
  }
});

function buttonPress() {
  userSeq.push(this.classList[1]);
  buttonFlash(this);
  checkFunction(userSeq.length - 1);
}

let btnsAll = document.querySelectorAll(".btn");
for (btn of btnsAll) {
  btn.addEventListener("click", buttonPress);
}

function checkFunction(gameIndex) {
  if (gameSeq[gameIndex] === userSeq[gameIndex]) {
    if (gameSeq.length === userSeq.length) {
      setTimeout(levelUp, 600);
    }
  } else {
    resetButton.style.visibility = "visible";
    h2.innerText = `Game Over your score: ${level}`;
    h2.style.color = "red";
    h2.style.fontSize = "25px";
    resetButton.innerText = "Reset Game";
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 1000);
    resetGame();
  }
}

function resetGame() {
  gameStart = false;
  userSeq = [];
  gameSeq = [];
  level = 0;
  console.log("Game Reset");
}
