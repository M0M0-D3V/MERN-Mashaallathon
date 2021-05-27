import React, { useState } from  'react';

const Form = () => {
    const handleClick = (e) => {
        alert('Smile, You Look Stunning Today')
    }
    const [input, setInput] = useState('')

    const handleChange = (e) => {
        console.log("hello")
        setInput(e.target.value)
        if (e.target.value ==='no'){
            alert('whaaat!! I hope you feel better ')
        }
    }
    
    return (
        <>
        <form>
            <label>Are you feeling good today</label>
            <br/>
            <input type="text" placeholder="Yes or No" onChange={handleChange}/>
            {input? alert(' Very Good '): ''}
            <button id="button8" type="submit">Submit</button>
            <button id="button8" onClick={ handleClick }>Click Me</button>
        </form>
        </>
    );
}
export default Form