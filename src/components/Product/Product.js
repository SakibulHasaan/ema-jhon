import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {img, name,stock,seller,price} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            
            <div>
                <h3 className='product-name'>{name}</h3>
                <p><small>By: {seller}</small></p>
                <h5>${price}</h5>
                <p><small>Only {stock} left of this product, Order Now</small></p>
                <button className="main-button" onClick={() => props.addToCartHandle(props.product)}> <FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
            </div>
            
        </div>
    );
};

export default Product;