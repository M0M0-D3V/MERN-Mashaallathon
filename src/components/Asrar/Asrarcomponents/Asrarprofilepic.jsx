import { Component } from "react"
import style from "../Asrar.module.css"

class Asrarprofilepic extends Component {
    state = {
        img: "https://i.pinimg.com/originals/2e/4e/6d/2e4e6d25cfdea5835928362903de50ea.png"
      }
    render(){
    return (
        <div>

        <img className={style.profile}
          src={this.state.img}
          onMouseEnter={() => {
            this.setState({
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA1El2M95mgvFCtFFHc_DEcHVETLNoGQRPzxttqjm7pq0Qj3G348854rh2tMfNH2KwC6E&usqp=CAU"
            })
          }}

          onMouseOut={() => {
            this.setState({
              img: "https://i.pinimg.com/originals/2e/4e/6d/2e4e6d25cfdea5835928362903de50ea.png"
            })
          }}
        />
    

        </div>);
}
}

export default Asrarprofilepic