import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
// import ToyModal from "./ToyModal";

const AllToys = () => {
  const toys = useLoaderData();
  console.log(toys);
  const [alltoys, setAllToys] = useState(toys);
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const search = form.search.value;
    setSearch(search);
    form.reset();
    fetch(`http://localhost:5000/search/${search}`)
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
      });
  };

  return (
    <div>
      <h1 className="font-bold text-center my-10 text-5xl">All Toys</h1>
      <form onSubmit={handleSearch}>
        <div className="form-control w-full mx-auto max-w-xs">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type here"
              name="search"
              className="input input-bordered w-full max-w-xs"
            />
            <input className="btn-custom" type="submit" value="Search" />
          </div>
        </div>
      </form>
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
              {alltoys.map((toy, i) => (
                <tr key={toy._id}>
                  <th>{i + 1}</th>
                  <td>{toy?.name}</td>
                  <td>{toy.toyName}</td>
                  <td>{toy.category}</td>
                  <td>{toy.price}</td>
                  <td>{toy.quantity}</td>
                  <td>
                    <Link to={`/toy/${toy._id}`}>
                      <button className="btn-custom">Details</button>
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
