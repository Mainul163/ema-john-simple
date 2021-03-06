import React, { useEffect, useState } from 'react';

import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewIteam from '../ReviewIteam/ReviewIteam';
import happyImage from '../../images/giphy.gif'


const Review = () => {
    const [cart,setCart]=useState([])
    const [orderPlaced,setOrderPlaced]=useState(false)
    const handlePlaceOrder=() =>{
         setOrderPlaced(true)
         setCart([])
        processOrder();
    }

    const removeProduct=(productKey) =>{
        const newCart=cart.filter(pd=>pd.key !== productKey)
        setCart(newCart);
        removeFromDatabaseCart(productKey)

    }
    useEffect(() =>{
      const savedCart= getDatabaseCart();
      const productKeys=Object.keys(savedCart);
      const cardProducts= productKeys.map(key =>{ 
          const product= fakeData.find(pd => pd.key === key)
          product.quantity= savedCart[key]
          
          return product
      } )
      setCart(cardProducts);

    },[])
    let thankYou;
    if(orderPlaced){
        thankYou=<img src={happyImage} alt=""/>
    }
    return (
        <div className="twin-container"> 
            <div className="product-container">
            {
                cart.map(pd=> <ReviewIteam   removeProduct={ removeProduct}product={pd} key={pd.key}></ReviewIteam>)
            }

             {thankYou}
            </div>
            
            <div  className="chart-container">
            <Cart cart={cart}>
                <button onClick={handlePlaceOrder} className="main-btn">place order</button>
            </Cart>
            </div>
           
        </div>
    );
};

export default Review;