import React from 'react';
import style from '../Maram.module.css';

const Title = () => {
    return(
        <div>
            <h3> Maram Alqahtani </h3>
            <img className={style.profilePic} src="https://i.insider.com/57d6c8d2dd0895cc308b490d?width=1000&format=jpeg&auto=webp" alt="logo"/>
        </div>
    );
}

export default Title;