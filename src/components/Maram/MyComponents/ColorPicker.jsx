import React, { Component, useState } from 'react';
import reactCSS from 'reactcss';
import { SketchPicker } from 'react-color';
import style from '../Maram.module.css';

//const colorPicker = props => {
//    const [color , setColor] = useState('');


class ColorPicker extends Component {

    state = {
        displayColorPicker: false,
        color: {
        r: '201',
        g: '212',
        b: '51',
        a: '1',
        },
    };


    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };

    handleClose = () => {
        this.setState({ displayColorPicker: false })
    };

    handleChange = (color) => {
        this.setState({ color: color.rgb });
    };

    render() {

    const styles = reactCSS({
        'default': {
            color: {
            width: '34px',
            height: '14px',
            borderRadius: '2px',
            background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
            },
            swatch: {
            padding: '5px',
            background: '#fff',
            borderRadius: '1px',
            boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
            display: 'inline-block',
            cursor: 'pointer',
            },
            popover: {
            position: 'absolute',
            zIndex: '2',
            },
            cover: {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
            },
        },
    });

    return (
        <div className={style.container}>
            <h5>Pick Your Favorite Color..</h5>
            <div style={ styles.swatch } onClick={ this.handleClick }>
            <div style={ styles.color } />
            </div>
            { this.state.displayColorPicker ? <div style={ styles.popover }>
            <div style={ styles.cover } onClick={ this.handleClose }/>
            <SketchPicker color={ this.state.color } onChange={ this.handleChange } />
            </div> : null }
        </div>
        )
    }
}



export default ColorPicker;
