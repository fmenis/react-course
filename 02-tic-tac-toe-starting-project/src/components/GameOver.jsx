export default function GameOver({ winnerPlayerSymbol }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winnerPlayerSymbol && <p>{winnerPlayerSymbol} won!</p>}
      {!winnerPlayerSymbol && <p>It's a draw</p>}

      <p>
        <button>Rematch!</button>
      </p>
    </div>
  );
}
