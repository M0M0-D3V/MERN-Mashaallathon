import React, { useState } from  'react';
import ProfilePic from './ProfilePic'

const Form = (props) => {

    const [inputError, setInputError] = useState("");

    const sub = (e) => {
        e.preventDefault();
        alert("Thanks for guessing, I'm 25 years old");

    };

    const click = (e) => {
        e.preventDefault();
        setTimeout(function(){ alert("Hehehehehe i make you wait 5 secs :)"); }, 5000);
    };

    const inputErrorM = (e) => {
        setInputError(e.target.value);
        if (e.target.value.length < 2) {
            setInputError("field must be at least 2 characters");
        }else{
            setInputError("");
        }
    };

    return (
        <>
        <form onSubmit={sub}>
            <label>Guess My Age?<br/>
                <input type="text" onChange={inputErrorM} />
                {inputError ? <p>{inputError}</p> : ""}
            </label>
            <br/>
            
            <button id="button8" type="submit">Submit</button>
            <button id="button8" onClick={click} >Try click it :)</button>
        </form>
        </>
    );
}
export default Form