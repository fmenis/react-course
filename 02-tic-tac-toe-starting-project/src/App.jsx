import { useState } from "react";

import GameBoard from "./components/GameBoard";
import Player from "./components/Player";

function App() {
  const initialPlayer = "X";
  const [activePlayer, setActivePlayer] = useState(initialPlayer);

  function handleSelectSquare() {
    setActivePlayer((currActivePlayer) =>
      currActivePlayer === "X" ? "O" : "X"
    );
  }

  return (
    <main>
      <div id="game-container">
        PLAYERS
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol={"X"}
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol={"O"}
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlayerSymbol={activePlayer}
        />
      </div>
      LOG
    </main>
  );
}

export default App;
