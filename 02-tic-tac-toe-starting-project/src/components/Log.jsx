export default function Log({ turns }) {
  const displayedLogs = turns.map((turn) => {
    const { activePlayerSymbol, square } = turn;
    const { row, col } = square;

    return (
      <li key={`${row}${col}`}>
        Player: {activePlayerSymbol} selected: {square.row}, {square.col}
      </li>
    );
  });

  return <ol id="log">{displayedLogs}</ol>;
}
