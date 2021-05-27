import React from 'react';
import style from '../Amani.module.css';

const Info = () => {
    return (
        <div className={style.info}>
            <h4>Information</h4>
            <p><span>Date of Birth:</span>11 March 1996</p>
            <p><span>Education:</span> Bachelor's in Information Technology</p>
            <p><span>Games:</span> Aracde, Puzzles, Race</p>
            <p><span>Hobbies:</span>  Travel, Volunteer Work , Swimming</p>
            <p>Member at Spoiled Coderes Team.</p>
        </div>
    );
}

export default Info;