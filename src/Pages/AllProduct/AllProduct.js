import React, { useEffect, useState } from 'react';
import AllProductsCard from './AllProductsCard';

const AllProduct = () => {
    const [allProducts, setAllProducts] = useState([])
    useEffect(() => {
        fetch('https://salty-oasis-53034.herokuapp.com/tools')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, [])
    return (
      <div className="mt-5">
        <h2 className="text-5xl font-bold text-center">All Products</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ml-10 gap-y-10 mt-10">
          {allProducts.map((allProduct) => (
            <AllProductsCard
              key={allProduct}
              allProduct={allProduct}
            ></AllProductsCard>
          ))}
        </div>
      </div>
    );
};

export default AllProduct;