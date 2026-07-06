import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  turns,
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
    const name = changeEvent.target.value;

    setPlayerName(name);
  }

  const editablePlayerName =
    isEditing && turns.length === 0 ? (
      <input
        type="text"
        required
        placeholder={playerName}
        autoFocus
        onChange={handleChange}
      />
    ) : (
      <span className="player-name">{playerName}</span>
    );

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button
        onClick={handleEditClick}
        className={turns.length ? "hidden" : undefined}
      >
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
