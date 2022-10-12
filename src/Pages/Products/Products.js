import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://salty-oasis-53034.herokuapp.com/tools')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
      <div className="mt-20">
        <h2 className="text-5xl font-bold text-center">Product</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ml-10 gap-y-10 mt-10">
          {products.slice(0, 6).map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </div>
    );
};

export default Products;