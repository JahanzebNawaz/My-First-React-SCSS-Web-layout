import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';


const Myapp = (props) => {
    return(
        <section>
            <h2 className="myNew">
                Welcome {props.name}
            </h2>
        </section>
    );
}

// class Myapp extends Component {
//     render(){
//         return(
//             <section >
//                 <h4 className="myNew">Welcome {this.props.name}</h4>
//             </section>
//         );
//     }
// }

export default Myapp;

