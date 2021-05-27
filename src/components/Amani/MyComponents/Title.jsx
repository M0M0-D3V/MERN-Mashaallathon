import React from 'react';
import style from '../Amani.module.css';

const Title = () => {
    return(
        <div>
            <h3> Amani Taha </h3>
            <img className={style.profilePic} src="https://i.pinimg.com/originals/a4/1b/8f/a41b8f11f7a1be7c4a325325171a0716.jpg" alt="logo"/>
        </div>
    );
}

export default Title;