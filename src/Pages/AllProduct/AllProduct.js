import React, { useEffect, useState } from 'react';
import AllProductsCard from './AllProductsCard';

const AllProduct = () => {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/tools')
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);
  return (
    <div className="mt-5 p-3 bg-gray-200">
      <h2 className="text-5xl font-bold text-center">All Products</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mx-10 mt-10">
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
