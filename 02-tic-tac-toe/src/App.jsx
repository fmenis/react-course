import { useState } from "react";

import GameBoard from "./components/GameBoard.jsx";
import Player from "./components/Player.jsx";
import Log from "./components/Log.jsx";
import GameOver from "./components/GameOver.jsx";

import { WINNING_COMBINATIONS } from "./winning-combinations.js";
import { INITIAL_GAME_BOARD, PLAYERS } from "./constants.js";

function App() {
  // states
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState(PLAYERS);

  // derived things from turns log
  const activePlayerSymbol = deriveActivePlayerSymbol(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winnerPlayerSymbol = deriveWinner(gameBoard, players);

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
            initialName={PLAYERS.X}
            symbol={"X"}
            isActive={activePlayerSymbol === "X"}
            turns={gameTurns}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            initialName={PLAYERS.O}
            symbol={"O"}
            isActive={activePlayerSymbol === "O"}
            turns={gameTurns}
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

export default App;

//-------------------------- HELPERS --------------------------

function deriveWinner(gameBoard, players) {
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

  return winnerPlayerSymbol;
}

function deriveActivePlayerSymbol(gameTurns) {
  let activePlayerSymbol = "X";

  if (gameTurns.length && gameTurns[0].activePlayerSymbol === "X") {
    activePlayerSymbol = "O";
  }

  return activePlayerSymbol;
}

function deriveGameBoard(gameTurns) {
  const gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];

  // populate gameBoard through turn logs
  for (const turn of gameTurns) {
    const { activePlayerSymbol, square } = turn;
    const { row, col } = square;

    gameBoard[row][col] = activePlayerSymbol;
  }

  return gameBoard;
}
