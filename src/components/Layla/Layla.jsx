import style from "./Layla.module.css"
import Picprofile from "./MyComponents/Picprofile"
import Infornation from "./MyComponents/Information"
import Clickme from "./MyComponents/Clickme"
import Massage from "./MyComponents/Massage"

function Layla() {
    return (
        <div className={style.container}>
        <Picprofile />
        <Infornation />
        <Clickme />
        <Massage />
        </div>
    )
}

export default Layla