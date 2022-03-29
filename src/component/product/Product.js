import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './product.css'

const Product = (props) => {

    const { name, img, seller, price, stock } = props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='product'>
            <img src={img} alt="" height='180px' />

            <div className='product-detail'>
                <h4 className='product-name'>{name}</h4>
                <p>By: {seller}</p>
                <h4>${price}</h4>
                <p>only {stock} left in stock - order soon</p>

                <button
                    onClick={() => props.handleAddToCart(props.product)}
                    className='reg-btn'>{element} add to card</button>
            </div>

        </div>
    );
};

export default Product;