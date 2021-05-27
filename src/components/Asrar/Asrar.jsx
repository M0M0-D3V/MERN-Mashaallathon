import style from "./Asrar.module.css"
import Component1 from "./Asrarcomponents/Component1"
import Asrarprofilepic from "./Asrarcomponents/Asrarprofilepic"
import Asrarinfo from "./Asrarcomponents/Asrarinfo"
import AsrarContact from "./Asrarcomponents/AsrarContact"




function Asrar() {
    return (
        <div className={style.container}> 
        <Asrarprofilepic/>
        <Component1 firstName="Asrar" lastName="Alqarni" >
            Information System
            </Component1>
        <Asrarinfo/>
        <AsrarContact/>

        </div>
    )
}

export default Asrar