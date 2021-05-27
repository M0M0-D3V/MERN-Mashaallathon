import style from './Component1.module.css'
import { useState } from 'react'
import Pic from "../contact.jpg"


function Component3() {
    const [isClicked, setisClicked]= useState('')
    const handleClick = (e) => {
        console.log(isClicked)
        setisClicked('true')
    }

    return (
    <div>
        <img
            src={Pic}
            alt="img"
            className={ isClicked ? style.clicked: style.notclicked }
        />
        <button onClick={ handleClick }>contact with me</button>
    </div>
    )
}

export default Component3