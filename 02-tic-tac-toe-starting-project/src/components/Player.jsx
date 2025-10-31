import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditClick() {
    /**
     * Use this way if the current status depending from the old one.
     * with this the state is update instantly
     */
    setIsEditing((editing) => !editing);
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
    <li>
      <span className="player">
        {editablePlayerName}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
