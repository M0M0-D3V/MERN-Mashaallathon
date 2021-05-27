import React,{useState} from "react";
import style from './Samaher.module.css'
    
const Form = (props) => {
    const [uni, setUsername] = useState("");
    const [unierror, setunierror] = useState("");
  
 const [img, setimg] = useState("https://www.niallkeenan.ie/wp-content/uploads/2020/11/you-are-unique-1.jpg")
 const [isClicked, setisClicked]= useState('')

const handleClick = (e) => {
    setUsername(e.target.value);
}

const click = (e) => {
    if(uni < 1) {
        setunierror("Impossible that you are an indistinguishable person?");
    }
    else{
        setisClicked('true')
    }
}


const bye = (e) => {
    alert('Good Bye')
}


return (
        <>
            <form onSubmit={ (e) => e.preventDefault()}>
            <label style={{color:'grey'}}>What are you distinguished for?</label>
            <br/>
              <input type="text" onChange={ handleClick } 
                value={uni} />
                { unierror ? <p style={{color:'red'}}>{ unierror }</p> : ''}
                <img
            src={img}
            className={ isClicked ? style.put: style.noneput }
        />

          <button id="button8" type="submit" onClick={ click } >Submit</button>
            <button id="button8"  type="submit" onClick={bye} >Good Bye</button>
        </form>
        </>
    );
}
export default Form