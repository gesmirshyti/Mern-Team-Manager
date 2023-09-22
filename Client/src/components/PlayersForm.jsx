import axios from "axios"
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route ,Link} from "react-router-dom";

const PlayersForm =(props)=>{
    const [name,setName]= useState("");
    const [position,setPosition] =useState("");
    const [errors,setErrors] =useState([]);
    const navigate = useNavigate();

    const onSubmitHandler =(e)=>{
        e.preventDefault();
        axios
        .post("http://localhost:8000/players", {name :name,position:position})
        .then((res) => {
            console.log(res);
            navigate("/players/list");
        })
        .catch((err) => {
            const errorResponse = err.response.data.errors;
            const errorArr = [];
            for (const key of Object.keys(errorResponse)) {
            errorArr.push(errorResponse[key].message);
            }
            setErrors(errorArr);
        });  
    }
    return(
        <>
        <form onSubmit={onSubmitHandler}>
        <h3>Add Player Form:</h3>
        {
            errors.map((err,index) =>(
                <p key={index}>{err}</p>
            ))}
            <label>Player Name: </label>
            <input type="text" value={name} onChange={(e) =>setName( e.target.value)}/>
            <hr />
            <label>Player Position: </label>
            <input type="text" value={position} onChange={(e) =>setPosition( e.target.value)}/>
        <hr />
            <button type="submit">Add Player</button>

        </form>
        </>
    )
};

export default PlayersForm;
