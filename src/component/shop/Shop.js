import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProduct] = useState([])
    const [cart, setCard] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const handleAddToCart = (product) => {

        const newCard = [...cart, product];
        setCard(newCard);
    }
    return (
        <div className='shop-con'>
            <div className='product-con'>

                {
                    products.map(product => <Product
                        key={product.key}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    >
                    </Product>)
                }
            </div>

            <div className='cart-con'>
                <Cart cart={cart}></Cart>

            </div>

        </div>
    );
};

export default Shop;