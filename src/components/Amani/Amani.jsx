import React, { useState } from "react";
import Title from './MyComponents/Title.jsx';
import style from './Amani.module.css';
import Form from './MyComponents/Form.jsx';
import Info from './MyComponents/Info.jsx';
import ColorPicker from "./MyComponents/ColorPicker.jsx";


const Amani = () => {
    return (
        <div className={style.container}>
            <Title />
            <Form />
            <ColorPicker />
            <Info />

        </div>
    );
}

export default Amani;