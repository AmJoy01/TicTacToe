function App() {
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

    const [board, setBoard] = React.useState(["", "", "", "", "", "", "", "", ""]);
    const [turn, setTurn] = React.useState('X');
    const [win, setWin] = React.useState(null);
    let gameOver = false;

    function handleTurn(event) {
        let idx = event.target.id;
        if (board[idx] === '' && !win) {
            let newBoard = [...board];
            newBoard[idx] = turn;
            setBoard(newBoard);
            setTurn(turn === 'X' ? 'O' : 'X');
            getWinner(newBoard);
        }
    };

    function getWinner(board) {
        winningCombos.forEach(combo => {
            const [a, b, c] = combo;
            if (board[a] &&
                board[a] === board[b] &&
                board[a] === board[c]) {
                setWin(board[a]);
            }
            return;
        });
        if (board.every((square) => square !== '')) {
            setWin('T');
        }
    }

    function resetGame() {
        setBoard(["", "", "", "", "", "", "", "", ""]);
        setTurn('X');
        setWin(null);
    }

    // Return 
    return (
        <div>
            <h1>Tic-React-Toe</h1>
            {/* <h2>It's X's Turn</h2> */}
            <h2>
                {win == 'T' ? `That's a tie, queen!`
                    : win
                        ? `${win} wins the game!`
                        : `It's ${turn}'s turn!`}
            </h2>
            <div className="flex-container flex-column">
                <div className="flex-container flex-wrap" id="board" onClick={handleTurn}>
                    {board.map((value, idx) => {
                        return (
                            <div className="square" key={idx} id={idx}>{value}</div>
                        )
                    })}
                </div>

                {/* End of board */}
                <button id="reset-button" onClick={resetGame}>reset</button>
            </div>
            {/* End of column container div */}
        </div>
    )
}

ReactDOM.render(<App />, root)