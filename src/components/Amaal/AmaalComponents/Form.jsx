import { useState } from 'react'
import style from './Component1.module.css'

function Form() {
    const [img, setimg] = useState("")
    const [isClicked, setisClicked]= useState('')
    const handleClick = (e) => {
        console.log(isClicked)
        setisClicked('true')
        
    }

    return (
    <div>
        <h1 className={ isClicked ? style.clicked: style.notclicked }>Coding</h1>
        <img
                    
                                        src="data:image/jpeg;base64,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"
                                        alt="Game"
                                        height="100"
                                        width="150"
                                    
            className={ isClicked ? style.clicked: style.notclicked }
        />
        <button onClick={ handleClick }>></button>
    </div>
    )
}

export default Form

// <form onSubmit={ (e) => e.preventDefault()}>
//             <div>
//             <div id="game"><h1>Coding</h1>
//                 <img
                    
//                     src="data:image/jpeg;base64,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"
//                     alt="Game"
//                     height="250"
//                     width="250"
//                 /></div>
//             </div>
            
//         </form>