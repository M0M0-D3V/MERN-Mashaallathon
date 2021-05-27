import style from "./Abeer.module.css"
import MyPic from "./AbeerComponents/MyPic"
import ProfInfo from "./AbeerComponents/ProfInfo"
import Like from "./AbeerComponents/Like"
import FanWord from "./AbeerComponents/FanWord"


function Abeer() {
    return (
        <div className={style.container}>
        <h1>Abeer Saud</h1>
        <MyPic />
        <ProfInfo />
        <FanWord />
        <Like />
        </div>
    )
}

export default Abeer