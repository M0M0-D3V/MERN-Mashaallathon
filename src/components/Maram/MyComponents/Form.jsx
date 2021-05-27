import React, { useState } from 'react';

const Form = () => {
    const [input, setInput] = useState('');
    const [quate , setQuate] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const displayQuate = (e) => {
        if(input < 1) {
            alert("You don't have any favorite quate!! :(")
            }
            else{
                alert("Great Quate!!")
                setInput('');
            }
    }

    return (
        <div>
            <form onSubmit={ displayQuate }>
                <div>
                    <h4>Type Your Favorite Quate</h4>
                    <input type="text" onChange={handleChange}/>
                </div>
                <input type="submit" value="Display Quate" />
            </form>
        </div>
    );
}
export default Form;