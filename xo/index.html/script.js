// Accessing HTML elements
const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');
const resetButton = document.getElementById('reset');
const xWinsDisplay = document.getElementById('xWins');
const oWinsDisplay = document.getElementById('oWins');
let currentPlayer = 'X'; // Starting player is 'X'
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;
let xWins = 0;
let oWins = 0;

// Check if there's a winner
function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            gameOver = true;
            // Highlight the winning cells
            document.querySelectorAll('.cell')[a].classList.add('winner-animation');
            document.querySelectorAll('.cell')[b].classList.add('winner-animation');
            document.querySelectorAll('.cell')[c].classList.add('winner-animation');
            message.textContent = `${currentPlayer} Wins!`;

            if (currentPlayer === 'X') { 
                xWins++;
                xWinsDisplay.textContent = xWins;
            } else { 
                oWins++;
                oWinsDisplay.textContent = oWins;
            }

            return;
        }
    }

    // Check if the game is a draw
    if (!gameBoard.includes('')) {
        gameOver = true;
        message.textContent = 'It\'s a draw!';
    }
}


function updateBoard() {
    cells.forEach((cell, index) => {
        cell.textContent = gameBoard[index];
    });
    checkWinner();
}


function handleCellClick(e) {
    const cellIndex = e.target.dataset.index;

    if (gameBoard[cellIndex] || gameOver) return;

    gameBoard[cellIndex] = currentPlayer; 
    updateBoard(); 

    // Only switch players if the game is not over
    if (!gameOver) {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; 
    }
}


function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X'; 
    gameOver = false;
    message.textContent = '';
    updateBoard();
}

// Add event listeners for cell clicks
cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

// Add event listener for reset button
resetButton.addEventListener('click', resetGame);

// Initialize the board
updateBoard();
