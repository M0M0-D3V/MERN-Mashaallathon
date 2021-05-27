import React, { Component } from 'react';
import style from "../Asrar.module.css"
   
    
class Asrarinfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: "On"
        };
    }

    render() {
        function addcontent() {
            document.getElementById("content").innerHTML=("<b>Education:</b>Bachelor's in Information System <br> <b>Favorite language:</b> Python,Java <br> <b>Hobbies:</b> Online Shopping,<br> Cooking,Watch Movies. " 
            
            );

        };
        return (
        <>
        <div id ="content" className={style.text}>
            
        </div>
        <button className={style.btn} onClick={addcontent}>More Info </button>  
        </>
        
        );
    }
}
    
export default Asrarinfo;