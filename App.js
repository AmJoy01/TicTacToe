function App() {
    return (
        <div>
            <h1>Tic-React-Toe</h1>
            <h1>Tic-Tac-Toe</h1>
            <h2>It's X's Turn</h2>
            {/* <main>
                <section id="score">Score for X: <span class="scoreX">0</span></section>
                <section id="score">Score for O: <span class="scoreO">0</span></section>
            </main> */}
            <div class="flex-container flex-column">
                <div class="flex-container flex-wrap" id="board">
                    <div class="square"></div>
                    <div class="square"></div>
                    <div class="square"></div>
                    <div class="square"></div>
                    <div class="square"></div>
                    <div class="square"></div>
                    <div class="square"></div>
                    <div class="square"></div>
                    <div class="square"></div>
                </div>
                {/* End of board */}
                <button id="reset-button">reset</button>
            </div>
            {/* End of column container div */}
        </div>
    )
}

ReactDOM.render(<App />, root)