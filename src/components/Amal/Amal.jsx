import "./Amal.css";
import Component1 from "./myComponents/Component1"
import Component2 from "./myComponents/Component2"

const Amal = () => {
    return (
        <div className="maincontainer" >
            <div className="thecard">
                <Component1/>
                <Component2/>
            </div>
        </div>
    )
}

export default Amal