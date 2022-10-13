import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const navigate = useNavigate();
    const { _id, name, img, description, MinimumOrder
        , Available, PerPrice } = product;


    return (
      <div className="card bg-base-100 shadow-xl">
        <figure className=" pt-10">
          <img style={{ height: "8rem" }} src={img} alt="Shoes" />
        </figure>
        <div className="card-body items-center text-center text-stone-500">
          <h2 className="card-title font-bold  text-stone-500">
            <span className="font-bold">Name: </span>{name}
          </h2>
          <p>
            <span className="font-bold">Description: </span> {description}
          </p>
          <p>
            <span className="font-bold">MinimumOrder: </span> {MinimumOrder}
          </p>
          <p>
            <span className="font-bold"> Available: </span>
            {Available}
          </p>
          <p>
            <span className="font-bold"> PerPrice: </span> {PerPrice}
          </p>
          <div className="card-actions">
            <Link
              to={`/purchase/${_id}`}
              className="btn bg-blue-600 border-none rounded-full px-10"
            >
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Product;

{/* <Link to={`/purchase/${_id}`} className="btn bg-blue-900 rounded-full px-10">
  Buy Now
</Link>; */}