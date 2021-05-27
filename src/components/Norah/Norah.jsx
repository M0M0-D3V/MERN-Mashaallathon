import style from "./Norah.module.css"
import AboutMe from "./NorComponents/AboutMe.jsx"
import Form from "./NorComponents/Form.jsx"
import Profile from "./NorComponents/Profile.jsx"
function Norah() {
    return (
        <div className={style.container}>
            <Profile/>
            <AboutMe/>
            <Form/>
        </div>
    );
}

export default Norah;