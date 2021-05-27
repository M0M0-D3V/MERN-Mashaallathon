import React, { Component, useState } from "react";
import Title from './MyComponents/Title.jsx';
import style from './Maram.module.css';
import Form from './MyComponents/Form.jsx';
import Info from './MyComponents/Info.jsx';
import ColorPicker from "./MyComponents/ColorPicker.jsx";

class Maram extends Component{
    // const [Color , setColor] = useState('');
    // const updateColor = ( newColor ) => {
    //     setColor(Color);
    // }

    render() {
        return(
            <div className={style.container}>
                <Title />
                <Form />
                <ColorPicker/>
                <Info />

            </div>
        );
    }
}

export default Maram;