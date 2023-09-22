import React from 'react'
import axios from 'axios';

const DeleteButton =(props)=>{
    const {playerId, successCallback} = props;
    const deletePlayer = e =>{
        axios
        .delete(`http://localhost:8000/api/players/`+ playerId)
        .then(res =>{
            successCallback();
        })
    }
    return (
        <button onClick={deletePlayer}>Delete</button>
    )
}
export default DeleteButton;