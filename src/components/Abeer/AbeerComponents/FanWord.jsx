import React, { useState } from  'react';
import style from "../Abeer.module.css"    
    
const FanWord = (props) => {
    const [fan, setFan] = useState("");
    
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    
    const createFan = (e) => {
        e.preventDefault();
        const newFan = { fan };
        console.log("Welcome", newFan);
        setHasBeenSubmitted( true );
    };
    return (
    <form onSubmit={ createFan }>
        {
        hasBeenSubmitted ? 
        <h3 style={{color:'purple'}}>Thank you for your nice words</h3> :
        <h3>Can you tell me a nice words .</h3> 
        }
    <div>
        <input type="text" onChange={ (e) => setFan(e.target.value) } />
    </div>
    </form>
    );
};
    
export default FanWord;