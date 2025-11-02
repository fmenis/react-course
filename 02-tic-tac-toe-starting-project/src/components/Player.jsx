import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditClick() {
    /**
     * Use this way if the current status depending from the old one.
     * with this the state is update instantly
     */
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(changeEvent) {
    setPlayerName(changeEvent.target.value);
  }

  const editablePlayerName = isEditing ? (
    <input type="text" required value={playerName} onChange={handleChange} />
  ) : (
    <span className="player-name">{playerName}</span>
  );

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
