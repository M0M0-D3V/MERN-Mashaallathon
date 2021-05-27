
import style from "../Asrar.module.css"
import { useState } from 'react'

function AsrarContact() {
    const [input, setInput] = useState('')

    const handleChange = (e) => {
        setInput(e.target.value)
    }
    const click = (e) => {
        if(input < 1) {
            alert("Share with me at least one  hobbies :(")
            }
            else{
                alert("I like your hobbies!!")
                setInput('');
            }
    }
    return (
        <div>
             <form onSubmit={ (e) => e.preventDefault()}>
            <input  className={style.inp} type="text"  placeholder="share your hobbies with me" onChange={handleChange}/>
            <button className={style.btn2} onClick={ click }>Submit</button>

        </form>

        </div>
    )
}

export default AsrarContact