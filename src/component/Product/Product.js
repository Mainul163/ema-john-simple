import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee , faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import'./product.css'
const Product = (props) => {
    console.log(props.product)
    const {name,img,seller,price,stock}=props.product;
    return (
        <div className="product">
           <div>
              <img src={img} alt=""/>
           </div>

           <div>
             <h4 className="product-name">{name}</h4>
             <p><small>By:{seller}</small></p>
             
             <p>${price}</p>
             <p><small>Only {stock} left in stock</small></p>
             <button className="main-btn" onClick={()=>props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> add to chart</button>
           </div>
           
        </div>
    );
};

export default Product;