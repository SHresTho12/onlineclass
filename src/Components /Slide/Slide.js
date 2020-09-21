import React, { useState } from 'react';
import data from '../../Fakedata/data.json'
import Cources from '../Courses/Cources';
import Cart from '../Cart/Cart';
import './Slide.css'
 
const Slide = () => {
    const [cart,setCart] = useState([]);
    function handle(course) {

        const newcart = [...cart, course];
        
        setCart(newcart);
    }
 
    return (
        <div className="slide">
            <div className="course_detail">
               { data.map(cs=>{
                    return <Cources handleAddProduct={handle} cources={cs}></Cources>
                })

                }
            </div>
            <div className="cart_container">
           <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Slide;