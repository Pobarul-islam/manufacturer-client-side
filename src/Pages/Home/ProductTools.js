import React from 'react';

const ProductTools = ({ tool }) => {
  const { img, description, name } = tool;
  console.log(tool);
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="w-20" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProductTools;
