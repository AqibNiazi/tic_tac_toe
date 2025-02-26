import React, { useState } from "react";

const Player = ({ initialName, symbol, isActive, onChangeName }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  const handleEditing = () => {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  };
  const handleChange = (e) => {
    setPlayerName(e.target.value);
  };
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            value={playerName}
            onChange={handleChange}
            required
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditing}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
