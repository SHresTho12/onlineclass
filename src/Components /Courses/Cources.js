import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee , faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Cources.css'

const Cources = (props) => {
   
    const {Course,Instructor,Language,Price} = props.cources;
    return (
        <div className="course">
            <div>
            <img src={require('./img1.jpg')} />

            </div>
            <div class="detail">
                <h3 className="Course_name">Course : {Course}</h3>
                <h4>Price : {Price}</h4>
                <h5>Instructor: {Instructor}</h5>
                <h5>Language: {Language}</h5>
                <button onClick={() => {props.handleAddProduct(props.cources)}} className="main_button btn btn-warning"><FontAwesomeIcon icon ={faShoppingCart}/> Enroll in</button>
            </div>
        </div>

    );
};

export default Cources;