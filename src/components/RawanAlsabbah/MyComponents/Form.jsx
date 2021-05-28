import React, {useState } from "react";

const Form = () => {
    const [name, setName ] = useState("");
    const [nameError, setNameError] = useState("");

    const handleName = (e) => {
        setName (e.target.value);
        if (e.target.value.length < 3) {
        setNameError("Name must be 3 characters or longer!");
        }
    };

    const handleClick = () => {
        if (name.length < 1) {
            alert('Please Enter Name')
        }
        else {alert('Welcome '+name)}
    }

    return (
        <div>
        <label><h5> Please ,Enter your Name: </h5> </label>
        <input type="text" onChange={handleName} value={name} />
        {nameError ? <p style={{ color: "red" ,fontSize:"12px" ,fontWeight:"bold" }}>{nameError}</p> : ""}
<div>       <input type="submit" value="Click Here!" onClick={handleClick}/></div> 
        </div>   
    )
}

export default Form