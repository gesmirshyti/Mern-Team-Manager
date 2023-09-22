import React, { useState } from "react";
import axios from "axios";
import PlayersForm from "../components/PlayersForm";
import PlayersList from "../components/PlayersList";

const Main = (props) => {
  const [players, setPlayers] = useState([]);
  const [updated, setUpdated] = useState(false);

  return (
    <>
      <PlayersForm
        players={players}
        setPlayers={setPlayers}
        setUpdated={setUpdated}
        updated={updated}
      />
      <hr />
      <PlayersList
        players={players}
        setPlayers={setPlayers}
        setUpdated={setUpdated}
        updated={updated}
      />
    </>
  );
};
export default Main;
