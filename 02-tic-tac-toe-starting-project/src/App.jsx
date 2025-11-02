import { useState } from "react";

import GameBoard from "./components/GameBoard.jsx";
import Player from "./components/Player.jsx";
import Log from "./components/Log.jsx";

import { WINNING_COMBINATIONS } from "./winning-combinations.js";

const gameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayerSymbol = deriveActivePlayerSymbol(gameTurns);

  // populate gameBoard through turn logs
  for (const turn of gameTurns) {
    const { activePlayerSymbol, square } = turn;
    const { row, col } = square;

    gameBoard[row][col] = activePlayerSymbol;
  }

  let winner = null;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  }

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const turn = {
        activePlayerSymbol,
        square: {
          row: rowIndex,
          col: colIndex,
        },
      };
      const updatedTurns = [turn, ...prevTurns];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        PLAYERS
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol={"X"}
            isActive={activePlayerSymbol === "X"}
          />
          <Player
            initialName="Player 2"
            symbol={"O"}
            isActive={activePlayerSymbol === "O"}
          />
        </ol>
        {winner && <p>You won {winner}</p>}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

function deriveActivePlayerSymbol(gameTurns) {
  let activePlayerSymbol = "X";

  if (gameTurns.length && gameTurns[0].activePlayerSymbol === "X") {
    activePlayerSymbol = "O";
  }

  return activePlayerSymbol;
}

export default App;
