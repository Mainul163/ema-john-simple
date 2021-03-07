import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProducatDetails = () => {
    const {productKey} = useParams()
    const product=fakeData.find(pd => pd.key===productKey)
    console.log(product)
    return (
        
        <div>
            <h1>{productKey}Product Details comming soooon</h1>
            <Product showAddToChart={false} product={product}></Product>
        </div>
    );
};

export default ProducatDetails;