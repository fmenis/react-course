import { useState } from "react";

import GameBoard from "./components/GameBoard.jsx";
import Player from "./components/Player.jsx";
import Log from "./components/Log.jsx";
import GameOver from "./components/GameOver.jsx";

import { WINNING_COMBINATIONS } from "./winning-combinations.js";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState({
    X: "Player 1",
    O: "Player 2",
  });

  const activePlayerSymbol = deriveActivePlayerSymbol(gameTurns);

  let gameBoard = [...initialGameBoard.map((array) => [...array])];

  // populate gameBoard through turn logs
  for (const turn of gameTurns) {
    const { activePlayerSymbol, square } = turn;
    const { row, col } = square;

    gameBoard[row][col] = activePlayerSymbol;
  }

  let winnerPlayerSymbol = null;

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
      winnerPlayerSymbol = players[firstSquareSymbol];
    }
  }

  const hasDraw = gameTurns.length === 9 && !winnerPlayerSymbol;

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

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((players) => {
      return {
        ...players,
        [symbol]: newName,
      };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol={"X"}
            isActive={activePlayerSymbol === "X"}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            initialName="Player 2"
            symbol={"O"}
            isActive={activePlayerSymbol === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(winnerPlayerSymbol || hasDraw) && (
          <GameOver
            winnerPlayerSymbol={winnerPlayerSymbol}
            onRestartGame={handleRestart}
          />
        )}
        <GameBoard board={gameBoard} onSelectSquare={handleSelectSquare} />
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
