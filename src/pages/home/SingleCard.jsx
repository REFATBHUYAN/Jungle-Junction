import React from "react";
import { Link } from "react-router-dom";

const SingleCard = ({ data }) => {
  const {_id, photo, rating, price, toyName } = data;
  return (
    <div>
      <div className="card w-full bg-stone-400 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={photo} alt="Shoes" className="rounded-xl h-60" />
        </figure>
        <div className="card-body items-start text-center">
          <h2 className="card-title font-bold text-2xl">{toyName}</h2>
          <p className="text-xl font-semibold">Price: ${price}</p>
          <p className="text-xl font-semibold">Rating: {rating}</p>
          <div className="card-actions">
            <Link to={`/toy/${_id}`}>
              <button className="btn-custom">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
