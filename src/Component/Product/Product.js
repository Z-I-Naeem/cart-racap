import React from 'react';
import addToCart from '../../cartFunctions';

const Product = ({items}) => {
    // console.log(props);
    // console.log(items);
    const { id, title, price} = items;
    
    return (
        <div>
            <h1>Name:{title}</h1>
            <h3>{price}</h3>    
            <button onClick={() => addToCart(id)}>Purchase</button>
        </div>
    );
};

export default Product;