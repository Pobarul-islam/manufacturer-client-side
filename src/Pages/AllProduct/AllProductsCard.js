import React from 'react';
import { Link } from 'react-router-dom';

const AllProductsCard = ({ allProduct }) => {
    const { name, description, img, MinimumOrder, Available, PerPrice } = allProduct
    return (
      
        <div class="card bg-base-100 shadow-xl">
          <figure>
            <img style={{ height: "8rem" }} src={img} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-black font-bold">{name}</h2>
            <p>Description: {description}</p>
            <p>MinimumOrder: {MinimumOrder}</p>
            <p> Available: {Available}</p>
            <p>PerPrice: {PerPrice}</p>
          <div class="card-actions">
              <Link to="/purchase/:id" class="btn btn-primary">
                Buy Now
              </Link>
            </div>
          </div>
        </div>
     
    );
};

export default AllProductsCard;