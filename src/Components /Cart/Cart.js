import React from 'react';
import './Cart.css'

const Cart = (props) => { 
    const cart = props.cart;
   
    //const total = cart.reduce((total,prd) => total + prd.price,0);
    let total =0 ; 
    for (let i =0 ; i < cart.length;i++)
    {
        const product = cart[i];
        total =total + product.Price;
    }
    const vat = total/10;
    return (
       
        <div className="cart">
            <h2 ><u>Order Summery</u></h2>
 <br/>
            <h5>Number of course Purchased :{cart.length}</h5>
            <h5>Price:{total}&#36;</h5>
            <h5>Vat:{vat}&#36;</h5>
            <h4>Total price:{total+vat}&#36;</h4>
            <button className="btn btn-success">Check out</button>
        </div>
    );
};

export default Cart;