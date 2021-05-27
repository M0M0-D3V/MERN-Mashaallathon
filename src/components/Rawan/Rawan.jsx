
import React from 'react';
import './components/style.css';
import ProfilePic from './components/ProfilePic'
import Info from './components/Info'
import Form from './components/Form'
import Footer from './components/Footer'

const Rawan = (props) => {
    const name= props.name
    const pic= props.pic
    const education= props.education
    const language= props.language
    const unique= props.unique
    return(
        <div id= "main">
            <div id="style">
            <ProfilePic name= {name} pic= {pic}/>
            </div>
            <div id="empty"></div>
            <Info 
            name= {name} 
            pic= {pic}
            education= {education}
            language= {language}
            unique= {unique}
            />
            <div id="divider"></div>
            <Form />
            <Footer />
        </div>
    )
}
export default Rawan;

import React, { useState } from "react";
import Profile from "./MyComponents/Profile.jsx"
import Info from "./MyComponents/Info.jsx"
import style from "./Rawan.module.css"
import Form from "./MyComponents/Form.jsx"

const Rawan = () => {

    return (
    <div className={ style.card }>
        <Profile />
        <Info />
        <Form />
    
    </div>
    )
}

export default Rawan

