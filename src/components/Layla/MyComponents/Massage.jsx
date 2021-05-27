import style from './Component1.module.css'
import { useState } from 'react'

function Massage() {
    const [img, setimg] = useState("https://cdn.lifehack.org/wp-content/uploads/2016/12/08230522/best-motivational-quotes-dont-limit-challenges.png")
    const [isClicked, setisClicked]= useState('')
    const handleClick = (e) => {
        console.log(isClicked)
        setisClicked('true')
        alert('Have a nice weekend :)')
    }

    return (
    <div>
        <img
            src={img}
            alt="img"
            className={ isClicked ? style.clicked: style.notclicked }
        />
        <button className={style.btn} onClick={ handleClick }>Massage for you!</button>
    </div>
    )
}

export default Massage