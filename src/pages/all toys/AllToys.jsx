import React from "react";
import { Link, useLoaderData } from "react-router-dom";
// import ToyModal from "./ToyModal";

const AllToys = () => {
  const toys = useLoaderData();
  console.log(toys);
  return (
    <div>
      <h1>this is all toys page {toys.length}</h1>
      <h1>Table</h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-compact w-full">
            <thead>
              <tr>
                <th></th>
                <th>Seller Name</th>
                <th>Toy Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th></th>
              </tr>
            </thead>
            <tbody>

              {toys.map((toy, i) => (
                <tr key={toy._id}>
                  <th>{i + 1}</th>
                  <td>{toy?.name}</td>
                  <td>{toy.toyName}</td>
                  <td>{toy.category}</td>
                  <td>{toy.price}</td>
                  <td>{toy.quantity}</td>
                  <td>
                    <Link to={`/toy/${toy._id}`}>
                      <button className="btn btn-primary">Details</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
