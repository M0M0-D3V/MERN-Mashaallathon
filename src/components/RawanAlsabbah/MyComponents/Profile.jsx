import logo from './rawan-avtar.png';
import style from "../Rawan.module.css"

const Profile = () => {
    return (
        <div>
        <img
         className={style.profile}
          src={logo}
          alt=" profile avatar"
        />
        </div>)
}

export default Profile