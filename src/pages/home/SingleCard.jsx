import React from "react";
import { Link } from "react-router-dom";

const SingleCard = ({ data }) => {
  const {_id, photo, rating, price, toyName } = data;
  return (
    <div>
      <div className="card h-96 w-96 bg-indigo-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={photo} alt="Shoes" className="rounded-xl h-60" />
        </figure>
        <div className="card-body items-start text-center">
          <h2 className="card-title">{toyName}</h2>
          <p>Price: ${price}</p>
          <p>Rating: {rating}</p>
          <div className="card-actions">
            <Link to={`/toy/${_id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
