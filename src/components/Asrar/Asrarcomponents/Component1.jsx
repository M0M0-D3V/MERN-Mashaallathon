import React, { Component } from 'react';
import style from "../Asrar.module.css"

    
class Component1 extends Component {
    render() {
        return (
        <div>
            <h2>
              {this.props.firstName} { this.props.lastName}
            </h2>
            <h5>
            {this.props.children}
            </h5>
        </div>
        
        );
    }
}
    
export default Component1;