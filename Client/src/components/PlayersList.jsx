import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PlayersList = () => {
    const [players, setPlayers] = useState([]);
  
    useEffect(() => {
      axios.get("http://localhost:8000/players").then((res) => {
        setPlayers(res.data); 
      });
    }, []);

    const deletePlayer = (playerId) => {
        axios
          .delete(`http://localhost:8000/players/${playerId}`)
          .then((res) => {
            if (res.status === 200) {
              // Player deleted successfully
              // Update your frontend state to remove the deleted player
              setPlayers((prevPlayers) =>
                prevPlayers.filter((player) => player._id !== playerId)
              );
            } else {
              console.error("Failed to delete player");
            }
          })
          .catch((err) => {
            console.error("Error deleting player:", err);
          });
      
      };
    return (
    <div>
      <h3>Player List:</h3>
      <ul>
        {players.map((player) => (
          <li key={player._id}>
            {player.name} - {player.position}
            <button onClick={() => deletePlayer(player._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
  };
  
  export default PlayersList;