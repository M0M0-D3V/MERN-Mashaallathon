import React, { useState } from 'react';
import style from "../Abeer.module.css"
    
    
const Like = props => {
    const [like, setLike] = useState(0);
 
    const handleClick = () => {
        setLike(like + 1);
    }
 
    return (
        <div  >
           
            <button className={style.btun } onClick={ handleClick }> Like Me { like }  </button>
        </div>
    );
}
    
export default Like;
