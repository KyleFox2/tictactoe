const buttons = document.querySelectorAll('.option');
let playerTurn = 'X';
let userOneChoice = [];
let userTwoChoice = [];
let userOneCheck;
let userTwoCheck;
const winningConditions = 
[ [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];

buttons.forEach(item => {
  item.addEventListener('click', e => {
    e.target.textContent = playerTurn
    e.target.disabled = true
    if(playerTurn === 'X'){
      userOneChoice.push(parseInt(e.target.id))
      document.getElementById('player').innerText = "O's turn!";
      playerTurn = 'O'
    } else {
      userTwoChoice.push(parseInt(e.target.id))
      document.getElementById('player').innerText = "X's turn!";
      playerTurn = 'X'
    }
    console.log(userOneChoice, userTwoChoice)
    checkWinner()
  })
})

function checkWinner() {
  for(let i = 0; i < winningConditions.length; i++) {
    userOneCheck = winningConditions[i].every(i => userOneChoice.includes(i));
    userTwoCheck = winningConditions[i].every(i => userTwoChoice.includes(i));
    if (userOneCheck === true) {
      document.getElementById('player').innerText = "X WINS!!!";
      setTimeout(() => {
        alert('X WINS!')
        resetGame()
      }, 20)
      break
    } else if(userTwoCheck === true) {
      document.getElementById('player').innerText = "O WINS!!!";
      setTimeout(() => {
        alert('O WINS!')
        resetGame()
      }, 20)
      
      break
     } 
  }
  console.log(userOneCheck)
  if (userOneChoice.length === 5 && userOneCheck === false) {
    setTimeout(() => {
      alert('DRAW!')
      resetGame()
    }, 20)
  }
}

function resetGame() {
  location.reload()
}

document.getElementById('reset').addEventListener('click', () => {resetGame()});
