import style from './Component1.module.css'
import { useState } from 'react'

function Component3() {
 
    const [dream, setdream] = useState("");
    const [titleError, setTitleError] = useState("");

    const createUser = (e) => {
        console.log(e);
        e.preventDefault();
        const newUser = { dream};
        console.log("Welcome", newUser);
     };
    const handleTitle = (e) => {
        setdream(e.target.value);
        if(e.target.value.length < 1) {
            setTitleError(" is required!");
        } else if(e.target.value.length < 3) {
            setTitleError("must be at least 5 characters.!");
        }
    };
    const [isClicked, setisClicked]= useState('')
    const handleClick = (e) => {
        console.log(isClicked)
        setisClicked('true')
        alert('Thank you for submitting your dream ')
    }
    return (
        <div >
           <div >
                <form onSubmit={ createUser }>
                   {
                       
                       <h1>Tell me your Dream</h1> 
                   }
                   <label>Dream:</label>
                   <input  type="text" onChange={ handleTitle} value={dream}/>
                    {titleError ?<p style={{color:'red'}}>{ titleError }</p> :"" }
                  
                   <div>
                   <button onClick={ handleClick }>Send Dream</button>
                   
                   </div>
               </form>
               <p>Dream :{dream}</p>
            
               
           </div>
       </div>
       
   )
}

export default Component3