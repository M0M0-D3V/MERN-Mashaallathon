import { useState } from 'react'

function Component2() {
    const [input, setInput] = useState('')

    const handleChange = (e) => {
        setInput(e.target.value)
    }
    const click = (e) => {
        if(input < 2) {
            alert("name should has at least 2 charectr ")
            }
            else{
                alert("welcome my pleasure to communicate with you")
                setInput('');
            }
    }
    return (
        <div>
            <form onSubmit={ (e) => e.preventDefault()}>
            
            <div>
                <label>Please write your name </label> 
                <input type="text" onChange={handleChange} id = "name" />
            </div>
            <button type="submit"  onClick={ click }>Submit </button>
            
        </form>
        </div>
    )
}

export default Component2