import style from "../Norah.module.css";
import React, { useState } from "react";

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [favFood, setFavFood] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [firstNameError, setFirstNameError] = useState("");
    const [favFoodError, setFavFoodError] = useState("");

    const newInfo = (e) => {
        console.log(e);
        e.preventDefault();
        const newInfo = { firstName,favFood};
        console.log("Welcome", newInfo);
        setFirstName("");
        setFavFood("");
        setHasBeenSubmitted(true);
    };

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 1) {
            setFirstNameError("name is required!");
        } else if (e.target.value.length < 2) {
            setFirstNameError("name must be at least 2 characters");
        }
    };

    const handleFavFood = (e) => {
        setFavFood(e.target.value);
        if (e.target.value.length < 1) {
            setFavFoodError("Favorite food is required!");
        } else if (e.target.value.length < 3) {
            setFavFoodError("Favorite food must be at least 3 characters");
        }
    };

    return (
    <>
        <form onSubmit={newInfo}>
        {hasBeenSubmitted ? (
            <h4>Thank you for submitting the form!</h4>
        ) : (
            <h4>please submit the form.</h4>
        )}          
        <div className={style.form}>
            <label>First Name: </label>
            <input type="text" onChange={handleFirstName} value={firstName} />
            {firstNameError ? <p style={{ color: "red" }}>{firstNameError}</p> : ""}
        </div>
        <div>
            <label>Favorite Food: </label>
            <input type="text" onChange={handleFavFood}   value={favFood} />
            {favFoodError ? <p style={{ color: "red" }}>{favFoodError}</p> : ""}
        </div>       
                    
        <input type="submit" class="button" value="Submit Info" />
        {/* <button className={style.button} onClick={ click }>Submit</button>        */}
        </form>
        {/* <h4>Your Form data</h4>
        <p>your Name: {firstName}</p>
        <p>your favorite food: {favFood}</p> */}
    </>
    );
};

export default Form;