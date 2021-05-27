import "../Amal.css"
import React, { useState } from  'react';
function Component2() {

    const[msg,setMsg]=useState("")
    const showmsg=()=>{
        let items=["The only time you fail is when you fall down and stay down.","Whenever you find yourself doubting how far you can go, just remember how far you have come","Always remember ( The best revenge is massive success)", "The struggle you are in today is developing the strength you need tomorrow"]
        let item = items[Math.floor(Math.random() * items.length)];
        setMsg(item)
    }
    return (
      <div className="theback">
        <h3 className="msg">I want to give you a simple message</h3>
        <h3 className="msg">so please click the Button</h3>
        <button className="btn" onClick={showmsg}> Click Me</button>
        <p className="msg">{msg}</p>
      </div>
    );
  }
  
  export default Component2;
  