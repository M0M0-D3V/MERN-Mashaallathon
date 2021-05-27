import React from 'react';
import style from '../Rana.module.css';

const Title = () => {
    return(
        <div>
            <h3> Rana Alotaibi </h3>
            <img className={style.profilePic} src="https://i1.wp.com/68.media.tumblr.com/9e117fd662ab5f6cd065c95f469ad277/tumblr_ntx03rWOsQ1uwv8j2o4_250.png" alt="logo"/>
        </div>
    );
}

export default Title;