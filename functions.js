var presentRound = 0;
const rounds = 5;
var userScore = 0;
var pcScore = 0;

function moveTop() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

function start() {
  console.log("start");
  document.getElementsByClassName("canvas")[0].style.visibility = "visible";
  document.getElementsByClassName("start")[0].style.display = "none";
  document.getElementsByClassName("user-side")[0].style.display = "none";
  document.getElementsByClassName("user")[0].style.display = "grid";
  document.getElementsByClassName("pc-side")[0].style.display = "none";
  document.getElementsByClassName("round")[0].textContent = 0;
  document.getElementsByClassName("score-pc")[0].textContent = 0;
  document.getElementsByClassName("score-user")[0].textContent = 0;
  document.getElementsByClassName("button-1")[0].disabled = false;
  document.getElementsByClassName("button-2")[0].disabled = false;
  document.getElementsByClassName("button-3")[0].disabled = false;
  document.getElementsByClassName("board-end-lost")[0].style.display = "none";
  document.getElementsByClassName("board-end-win")[0].style.display = "none";
  document.getElementsByClassName("board-end-button")[0].style.display = "none";
  document.getElementsByClassName("board-start")[0].style.display = "block";
}

function setUpBoard() {
  cleanBoard();
  document.getElementsByClassName("user-side")[0].style.display = "grid";
  document.getElementsByClassName("board-start")[0].style.display = "none";
}

function cleanBoard() {
  document.getElementsByClassName("user-side-menu-1")[0].style.visibility =
    "hidden";
  document.getElementsByClassName("user-side-menu-2")[0].style.visibility =
    "hidden";
  document.getElementsByClassName("user-side-menu-3")[0].style.visibility =
    "hidden";
  document.getElementsByClassName("pc-side-menu-1")[0].style.visibility =
    "hidden";
  document.getElementsByClassName("pc-side-menu-2")[0].style.visibility =
    "hidden";
  document.getElementsByClassName("pc-side-menu-3")[0].style.visibility =
    "hidden";
  document.getElementsByClassName("won-hand")[0].style.visibility = "hidden";
  document.getElementsByClassName("lost-hand")[0].style.visibility = "hidden";
  document.getElementsByClassName("tie-hand")[0].style.visibility = "hidden";
}

function computerPlay() {
  let index = Math.floor(Math.random() * 3);
  options = ["Rock", "Paper", "Scissors"];
  let selection = options[index];
  document.getElementsByClassName("pc-side")[0].style.display = "grid";

  if (selection == "Paper") {
    document.getElementsByClassName("pc-side-menu-1")[0].style.visibility =
      "visible";
  }
  if (selection == "Rock") {
    document.getElementsByClassName("pc-side-menu-2")[0].style.visibility =
      "visible";
  }
  if (selection == "Scissors") {
    document.getElementsByClassName("pc-side-menu-3")[0].style.visibility =
      "visible";
  }
  return selection;
}

function check(hand1, hand2) {
  let userWin = "You lose! " + hand2 + " beats " + hand1;
  let flag = false;
  if (hand1 == "Paper" && hand2 == "Rock") {
    userWin = "You Won! Paper beats Rock";
    flag = true;
  }
  if (hand1 == "Scissors" && hand2 == "Paper") {
    userWin = "You Won! Scissors beats Paper";
    flag = true;
  }
  if (hand1 == "Rock" && hand2 == "Scissors") {
    userWin = "You Won! Rock beats Scissors";
    flag = true;
  }
  if (hand1 == hand2) {
    userWin = "Tie Game";
    flag = null;
  }

  checkResult = [userWin, flag];
  return checkResult;
}

function play(str) {
  let round = document.getElementsByClassName("round")[0].textContent;
  round = parseInt(round);
  document.getElementsByClassName("round")[0].textContent = round + 1;

  setUpBoard();

  if (str == "Paper") {
    document.getElementsByClassName("user-side-menu-1")[0].style.visibility =
      "visible";
  }
  if (str == "Rock") {
    document.getElementsByClassName("user-side-menu-2")[0].style.visibility =
      "visible";
  }
  if (str == "Scissors") {
    document.getElementsByClassName("user-side-menu-3")[0].style.visibility =
      "visible";
  }

  setTimeout(function () {
    continueGame(str);
  }, 500);
}

function continueGame(str) {
  pcChoice = computerPlay();
  let result = check(str, pcChoice);
  let [userWin, flag] = result;
  let pc_score = document.getElementsByClassName("score-pc")[0].textContent;
  let user_score = document.getElementsByClassName("score-user")[0].textContent;
  user_score = parseInt(user_score);
  pc_score = parseInt(pc_score);

  if (flag == true) {
    console.log("true");
    document.getElementsByClassName("won-hand")[0].style.visibility = "visible";
    document.getElementsByClassName("score-user")[0].textContent =
      user_score + 1;
  }

  if (flag == false) {
    console.log("false");
    document.getElementsByClassName("lost-hand")[0].style.visibility =
      "visible";
    document.getElementsByClassName("score-pc")[0].textContent = pc_score + 1;
  }

  if (flag == null) {
    console.log("null");
    document.getElementsByClassName("tie-hand")[0].style.visibility = "visible";
  }

  let round = document.getElementsByClassName("round")[0].textContent;
  round = parseInt(round);
  if (round == 5) {
    pc_score = document.getElementsByClassName("score-pc")[0].textContent;
    user_score = document.getElementsByClassName("score-user")[0].textContent;
    user_score = parseInt(user_score);
    pc_score = parseInt(pc_score);

    if (pc_score > user_score) {
      endBoard(false);
    } else {
      endBoard(true);
    }
  }
}

function endBoard(winner) {
  cleanBoard();
  document.getElementsByClassName("user-side")[0].style.display = "none";
  document.getElementsByClassName("pc-side")[0].style.display = "none";
  document.getElementsByClassName("board-end-button")[0].style.display =
    "block";

  document.getElementsByClassName("button-1")[0].disabled = true;
  document.getElementsByClassName("button-2")[0].disabled = true;
  document.getElementsByClassName("button-3")[0].disabled = true;
  if (winner == true) {
    document.getElementsByClassName("board-end-win")[0].style.display = "block";
  } else {
    document.getElementsByClassName("board-end-lost")[0].style.display =
      "block";
  }
}
