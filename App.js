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
    let gameOver = false;
    let turn = 'X';
    let win;

    function handleTurn(event) {
        let idx = event.taget.id;
        if (gameOver == false) {
            let newBoard = [...board]
            newBoard[idx] = turn
            setBoard(newBoard)
            turn = turn === 'X' ? 'O' : 'X';
        }
        // win = getWinner();
        // if (win != null) {
        //     boardId.removeEventListener('click', handleTurn)
        //     addRestartMsg();
        // }
        // render();
    };



    // Return 
    return (
        <div>
            <h1>Tic-React-Toe</h1>
            <h1>Tic-Tac-Toe</h1>
            <h2>It's X's Turn</h2>

            <div className="flex-container flex-column">
                <div className="flex-container flex-wrap" id="board" onClick={handleTurn}>
                    {board.map((value, idx) => {
                        return (
                            <div className="square" key={idx} id={idx}>{value}</div>
                        )
                    })}
                </div>
                {/* End of board */}
                <button id="reset-button">reset</button>
            </div>
            {/* End of column container div */}
        </div>
    )
}

ReactDOM.render(<App />, root)