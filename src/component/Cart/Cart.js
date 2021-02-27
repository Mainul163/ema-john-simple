import React from 'react';

const Cart = (props) => {
    const cart=props.cart
    console.log(cart);
    let total=0;
    for(let i=0;i<cart.length;i++){
        const product=cart[i];
        total=total+product.price;
    }
    let shipping=0;
    if(total>30){
        shipping=0;
    }
    else if(total>15){
        shipping=4.99
    }
    else if(total> 0){
        shipping=12.99
    }
    // bar bar toFixed r Number e convert nah koira ekbare korar jonno
    const formalNumber=num =>{
        const pricision=num.toFixed(2);
        return Number(pricision);
    } 
    const tax = (total/10).toFixed(2);
    const grandTotal=((total+shipping+Number(tax)).toFixed(2))
    return (
        <div>
            <h4> Order summery</h4>
            <h5>Iteams orderd: {cart.length}</h5>
            <p>Product Price; {formalNumber(total)}</p>
            <p>Shipping cost: {shipping}</p>
            <p>Tax+vat: {tax}</p>
            <p>Total price: {grandTotal}</p>
        </div>
    );
};

export default Cart;