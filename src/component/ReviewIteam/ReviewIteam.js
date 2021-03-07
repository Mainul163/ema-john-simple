import React from 'react';

const ReviewIteam = (props) => {
    const{name,quantity,key,price}=props.product
    const reviewIteamStyle={
        borderBottom:'1px solid red',
        marginBottom:'5px',
        paddingBottom:'5px'
    }
    return (
        <div style={reviewIteamStyle}>
            <h4 className="product-name"> {name}</h4>
            <p>Quantity: {quantity}</p>
            <p><small>price: {price}</small></p>
            <br/>
            <button className="main-btn" onClick={()=>props.removeProduct(key)}>Remove </button> 
           </div>
    );
};

export default ReviewIteam;