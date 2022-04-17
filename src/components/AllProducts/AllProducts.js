import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const AllProducts = ({setCartCount}) => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[]);

    return (
        <div className='container'>
            <h1>Total Products {products.length}</h1>

            <div className="row row-cols-3 product-container">
            {
                products.map(product => <Product key={product.id} product={product} setCartCount={setCartCount}></Product>)
            }
            </div>
        </div>
    );
};

export default AllProducts;