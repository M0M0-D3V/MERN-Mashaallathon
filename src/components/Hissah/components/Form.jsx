import { useState } from 'react'

const Form = () => {
    const [input, setInput] = useState('')
    const [inputError, setInputError] = useState("");

    const sayHello = () => {
        if(input < 1) {
            alert("Common, don't be shy. My name is Hissah. What's your name?")
            setInputError("the name must be 3 characters or longer!");
        }
        // else if(input < 3){
        //     alert("Common, that shouldn't be your name")
        //     setInputError("the name must be 3 characters or longer!!");
        // }
        else{
            alert(`Hello, ${input}`)
            setInput('');
        }
    }

    return (
        <>
        <form onSubmit={ (e) => e.preventDefault()}>
            <label>what is your name?</label>
            <br/>
            <input type="text" onChange={(e) => setInput(e.target.value)}></input>
            {inputError ? <p style={{ color: "red" }}>{inputError}</p> : ""}
            {!inputError ? <p style={{ color: "red" }}>{inputError}</p> : ""}
            <button id="button8" onClick={ sayHello } type="submit">Submit</button>
            <button id="button8">click here</button>
        </form>
        </>
    );
}
export default Form