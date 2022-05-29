import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const navigate = useNavigate();
    const { _id, name, img, description, MinimumOrder
        , Available, PerPrice } = product;
    const handleOrder = () => {
        navigate(`/purchase/${_id}`)
    }
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl w-20" />
            </figure>
            <div class="card-body items-center text-center">
                <p>Product id {_id}</p>
                <h2 class="card-title">Name: {name}</h2>
                <p>Description: {description}</p>
                <p>MinimumOrder: {MinimumOrder}</p>
                <p>Available: {Available}</p>
                <p>PerPrice: {PerPrice}</p>
                <div class="card-actions">
                    <button onClick={() => handleOrder()} class="btn btn-primary">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;