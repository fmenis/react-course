const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }) {
  let gameBoard = initialGameBoard;

  // populate gameBoard through turn logs
  for (const turn of turns) {
    const { activePlayerSymbol, square } = turn;
    const { row, col } = square;

    gameBoard[row][col] = activePlayerSymbol;
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => {
              const isAlreadySet = playerSymbol !== null;
              return (
                <li key={colIndex}>
                  <button
                    onClick={() => onSelectSquare(rowIndex, colIndex)}
                    disabled={isAlreadySet}
                    className={isAlreadySet ? "disabled" : undefined}
                  >
                    {playerSymbol}
                  </button>
                </li>
              );
            })}
          </ol>
        </li>
      ))}
    </ol>
  );
}
