import style from './Component1.module.css'
import { useState } from 'react'

function Clickme() {
    const [input, setInput] = useState('')

    const handleChange = (e) => {
        setInput(e.target.value)
    }
    const click = (e) => {
        if(input < 1) {
            alert("No felling is there !")
            }
            else{
                alert("Your felling is comming, Thank you =)")
                setInput('');
            }
    }
    return (
        <div className={style.cc}>
            <form onSubmit={ (e) => e.preventDefault()}>
            <div>
                <label>Tell me your felling </label> 
                <input type="text" onChange={handleChange} />
            </div>
            <button className={style.btn} onClick={ click }>Send yor Felling</button>
        </form>
        </div>
    )
}

export default Clickme