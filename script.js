let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector('#reset');
let newGamebtn = document.querySelector('#new-game');
let messageBox = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');
let modeSelection = document.querySelector('.mode-selection');
let mainGame = document.querySelector('main');
let player2Label = document.querySelector('#player2-label');

let turnO = true;
let playerVsAI = false;
let winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

document.getElementById('pvp').addEventListener('click', () => {
  playerVsAI = false;
  startGame();
});

document.getElementById('pvc').addEventListener('click', () => {
  playerVsAI = true;
  player2Label.innerText = 'AI: X';
  startGame();
});

function startGame() {
  modeSelection.classList.add('hide');
  mainGame.classList.remove('hide');
  resetGame();
}

boxes.forEach((box, index) => {
  box.addEventListener('click', () => {
    if (turnO) {
      box.style.color = '#1db954';
      box.innerText = 'O';
      turnO = false;
      box.disabled = true;
      checkWinner();

      if (playerVsAI && !turnO) {
        setTimeout(aiMove, 1000);
      }
    } else if (!playerVsAI) {
      box.style.color = '#e0e0e0';
      box.innerText = 'X';
      turnO = true;
      box.disabled = true;
      checkWinner();
    }
  });
});

function aiMove() {
  let bestMove = getBestMove();
  boxes[bestMove].style.color = '#e0e0e0';
  boxes[bestMove].innerText = 'X';
  boxes[bestMove].disabled = true;
  turnO = true;
  checkWinner();
}

function getBestMove() {
  let bestScore = -Infinity;
  let move;
  boxes.forEach((box, index) => {
    if (box.innerText === '') {
      box.innerText = 'X';
      let score = minimax(0, false, -Infinity, Infinity);
      box.innerText = '';
      if (score > bestScore) {
        bestScore = score;
        move = index;
      }
    }
  });
  return move;
}

function minimax(depth, isMaximizing, alpha, beta) {
  let winner = evaluateWinner();
  if (winner !== null) {
    return winner === 'X' ? 10 - depth : winner === 'O' ? depth - 10 : 0;
  }

  if (isMaximizing) {
    let bestScore = -Infinity;
    boxes.forEach((box) => {
      if (box.innerText === '') {
        box.innerText = 'X';
        let score = minimax(depth + 1, false, alpha, beta);
        box.innerText = '';
        bestScore = Math.max(score, bestScore);
        alpha = Math.max(alpha, bestScore);
        if (beta <= alpha) return bestScore;
      }
    });
    return bestScore;
  } else {
    let bestScore = Infinity;
    boxes.forEach((box) => {
      if (box.innerText === '') {
        box.innerText = 'O';
        let score = minimax(depth + 1, true, alpha, beta);
        box.innerText = '';
        bestScore = Math.min(score, bestScore);
        beta = Math.min(beta, bestScore);
        if (beta <= alpha) return bestScore;
      }
    });
    return bestScore;
  }
}

function evaluateWinner() {
  for (let pattern of winPatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != '' && pos2val != '' && pos3val != '') {
      if (pos1val == pos2val && pos2val == pos3val) {
        return pos1val;
      }
    }
  }
  if (Array.from(boxes).every((box) => box.innerText !== '')) {
    return 'Tie';
  }
  return null;
}

function resetGame() {
  turnO = true;
  enableBoxes();
  messageBox.classList.add('hide');
}

function enableBoxes() {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = '';
  });
}

function disableBoxes() {
  boxes.forEach((box) => {
    box.disabled = true;
  });
}

function showWinner(winner) {
  if (winner === 'Tie') {
    msg.innerText = "It's a Tie!";
  } else {
    msg.innerText = `Congratulations, winner is ${
      winner === 'O' ? 'Player 1' : playerVsAI ? 'AI' : 'Player 2'
    }: ${winner}`;
  }
  messageBox.classList.remove('hide');
  disableBoxes();
}

function checkWinner() {
  let winner = evaluateWinner();
  if (winner) {
    showWinner(winner);
  }
}

newGamebtn.addEventListener('click', resetGame);
resetbtn.addEventListener('click', resetGame);
