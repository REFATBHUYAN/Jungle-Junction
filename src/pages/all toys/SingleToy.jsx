import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleToy = () => {
  const singleToy = useLoaderData();
  console.log(singleToy);
  const {
    _id,
    price,
    category,
    description,
    email,
    name,
    photo,
    quantity,
    rating,
    toyName,
  } = singleToy;
  return (
    <div>
      <div className="hero min-h-screen bg-green-200">
        <div className="hero-content flex-col gap-10 lg:flex-row">
          <img
            src={photo}
            className="max-w-sm rounded-lg shadow-2xl w-1/2"
          />
          <div className="space-y-2 w-1/2">
            <h1 className="text-5xl font-bold">{toyName}</h1>
            <p className="py-6 font-semibold">Description: {description}</p>
            <p className="py-6 font-semibold">Saller Name: {name}</p>
            <p className="py-6 font-semibold">Saller Email: {email}</p>
            <p className="py-6 font-semibold">Price: ${price}</p>
            <p className="py-6 font-semibold">Rating: {rating}</p>
            <p className="py-6 font-semibold">Available Quantity: {quantity}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleToy;
