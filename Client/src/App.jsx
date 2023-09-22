// import { useState } from 'react'
import './App.css'
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route ,Link} from "react-router-dom";
import PlayersForm from './components/PlayersForm';
import PlayersList from './components/PlayersList';
import PlayerStatus from './components/PlayerStatus';
import Game2 from './components/Game2';

function App() {

  return (
    <>
<BrowserRouter>
<div>
      <nav>
        <Link to="/players/list">Manage Players   </Link>
        <Link to="/players/game/1">    Manage Players Status</Link>
      </nav>
      </div>
      <hr />
      <div>
      <Link to="/players/list">List    </Link>
        <Link to="/players/addPlayer">Add Player</Link>
      </div>
      <Routes>
        <Route path="/players/addPlayer" element={<PlayersForm />} />
        <Route path="/players/list" element={<PlayersList />} />
        <Route path="/players/game/1" element={<PlayerStatus />} />
        <Route path="/players/game/2" element={<Game2 />} />
      </Routes>
    </BrowserRouter>
    
  {/* <BrowserRouter>
  <Route
            exact
            path="/players/addplayers"
            element={<PlayerForm />}
          ></Route>
  </BrowserRouter> */}
    </>
  )
}

export default App
