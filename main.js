// console.log("Your JS is linked up. Be the you needed when you are little.")
/*----- constants -----*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

/*----- app's state (variables) -----*/

let board;
let turn = 'X';
let win;

/*----- cached element references -----*/
var insertAfter = (el, htmlString) => {
    el.insertAdjacentHTML('afterend', htmlString)
}
const squares = Array.from(document.querySelectorAll('#board div'));
const messages = document.querySelector('h2');
let boardId = document.getElementById('board');
let resetBtn = document.getElementById('reset-button');
/*----- event listeners -----*/
boardId.addEventListener('click', handleTurn);
resetBtn.addEventListener('click', init);


/*----- functions -----*/

function getWinner() {
    let winner = null;
    winningCombos.forEach(function (combo, index) {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) winner = board[combo[0]];
    });
    return winner ? winner : board.includes('') ? null : 'T';
};

function handleTurn() {
    let idx = squares.findIndex(function (square) {
        return square === event.target;
    });
    board[idx] = turn;
    turn = turn === 'X' ? 'O' : 'X';
    win = getWinner();
    if (win != null) {
        boardId.removeEventListener('click', handleTurn)
        addRestartMsg();
    }
    render();
};

function init() {
    board = [
        '', '', '',
        '', '', '',
        '', '', ''
    ];
    boardId.addEventListener('click', handleTurn)
    document.querySelector('p').remove();
    render();
};

function render() {
    board.forEach(function (mark, index) {
        //this moves the value of the board item into the squares[idx]
        squares[index].textContent = mark;
    });
    messages.textContent = win === 'T' ? `That's a tie, queen!` : win ? `${win} wins the game!` : `It's ${turn}'s turn!`;
};

function addRestartMsg() {
    insertAfter(document.querySelector('h2'), '<p>Reset Board</p>')
}

init();