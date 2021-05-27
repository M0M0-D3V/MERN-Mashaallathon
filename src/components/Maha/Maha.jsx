import style from "./Maha.module.css"
import Component1 from "./MahaComponents/component1"
import Component2 from "./MahaComponents/component2"
import Component3 from "./MahaComponents/component3"

function Maha() {
    return (
        <div className={style.container}>
        <h1>Maha </h1>
        <Component1 />
        <Component2 />
        <Component3 />
        </div>
    )
}

export default Maha