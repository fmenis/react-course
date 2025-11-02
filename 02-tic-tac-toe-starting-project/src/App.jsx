import { useState } from "react";

import GameBoard from "./components/GameBoard.jsx";
import Player from "./components/Player.jsx";
import Log from "./components/Log.jsx";

function App() {
  const turns = [];
  const [gameTurns, setGameTurns] = useState(turns);

  let activePlayerSymbol = "X";
  if (gameTurns.length && gameTurns[0].activePlayerSymbol === "X") {
    activePlayerSymbol = "O";
  }

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const isAlreadySet = gameTurns.some(
        (turn) => turn.square.row === rowIndex && turn.square.col === colIndex
      );

      if (isAlreadySet) {
        console.log("Action not allowed");
        return prevTurns;
      }

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
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
