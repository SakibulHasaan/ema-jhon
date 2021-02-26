import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total+=product.price;
    }
    total = Number (total.toFixed(2));

    const tax = Number((total/10).toFixed(2));

    let ShippingCost = 0;
    
    if(total>35){
        ShippingCost =0;
    }
    else if(total>15){
        ShippingCost=4.99;
    }
    else if(total>0){
        ShippingCost=12.99;
    }

    const GrandTotal = Number(total+tax+ShippingCost).toFixed(2);
    return (
        <div>
            <h3>Order Summary</h3>
            <h4> Items Added: {cart.length}</h4>
            <p>Product Price: ${total}</p>
            <p>Tax + VAT: ${tax} </p>
            <p>Shipping Cost: ${ShippingCost}</p>
            <p>Total Payable: ${GrandTotal}</p>
        </div>
    );
};

export default Cart;