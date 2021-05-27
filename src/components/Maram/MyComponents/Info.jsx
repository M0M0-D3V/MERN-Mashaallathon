import React from 'react';
import style from '../Maram.module.css';

const Info = () => {
    return (
        <div className={style.info}>
            <h4>Information</h4>
            <p><span>Education:</span> Bachelor's in Information Technology</p>
            <p><span>Favorite Language:</span> Python, Java</p>
            <p><span>Hobbies:</span> Reading, Watching Movies, Coding, Workout</p>
            <p>Member at Spoiled Coderes Team.</p>
        </div>
    );
}

export default Info;