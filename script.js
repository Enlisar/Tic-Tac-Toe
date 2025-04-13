let game = document.querySelector(".game");
let container = document.querySelector(".container");
let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let winO = document.createElement("div");
winO.innerText = "O wins!";
let winX = document.createElement("div");
winX.innerText = "X wins!";
let draw = document.createElement("div");

draw.classList.add("win");

const winningcond = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let zero = [];
let cross = [];

let turnO = true;
let count = 0;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box clicked");
    if (turnO == true) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    count++;
    checkwinner();
  });
});

const checkwinner = () => {
  for (i of winningcond) {
    let checkO = 0;
    let checkX = 0;
    for (j of i) {
      if (game.children[j].innerText == "O") {
        checkO++;
      } else if (game.children[j].innerText == "X") {
        checkX++;
      }
    }
    if (checkO == 3) {
      winO.classList.add("win");
      container.after(winO);
    } else if (checkX == 3) {
      winX.classList.add("win");
      container.after(winX);
    } else if (count == 9) {
      draw.innerText = "Draw!";
      container.after(draw);
    }
  }
};

resetbtn.onclick = () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
    count = 0;
    turnO = true;
  });
};
