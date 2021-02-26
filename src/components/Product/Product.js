import React from 'react';
import './Product.css';

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
            </div>
            
        </div>
    );
};

export default Product;