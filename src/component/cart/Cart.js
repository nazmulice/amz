import React from 'react';
import './cart.css'

const Cart = (props) => {
    const { cart } = props;
    let total = 0;

    for (const product of cart) {
        console.log(product.price);
        total = total + product.price;
    }
    return (
        <div>
            <h3>Order Summary</h3>
            <h4>Cart length: {props.cart.length}</h4>
            <h3>Total: {total}</h3>
        </div>
    );
};

export default Cart;