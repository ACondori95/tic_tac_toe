const player1 = 'X';
const player2 = 'O';
let player = player1;

const board = document.querySelector('.board');
const reset_button = document.getElementById('reset');

const divBoard = document.querySelector('.divBoard');
const reset_div_button = document.getElementById('reset2');

function addPiece(e) {
  console.log(e.target);
  e.target.innerHTML = player;
  if (player === player1) player = player2;
  else player = player1;
}

// table version
function resetBoard() {
  console.dir(board);
  for (let i = 0; i < board.rows.length; i++) {
    let row = board.rows[i];
    for (let j = 0; j < row.cells.length; j++) {
      row.cells[j].innerHTML = '';
    }
  }
}

board.addEventListener('click', addPiece);
reset_button.addEventListener('click', resetBoard);

// div version
function resetBoardDiv() {
  for (let i = 0; i < divBoard.children.length; i++) {
    divBoard.children[i].innerText = '';
  }
  const children = Array.from(divBoard.children);
  const empty = children.filter(function(child) {
    return child.innerText == 'X' || child.innerText == 'O';
  });
  console.log(empty);
}

divBoard.addEventListener('click', addPiece);
reset_div_button.addEventListener('click', resetBoardDiv);