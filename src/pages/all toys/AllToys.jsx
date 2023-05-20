import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../hook/useTitle";
// import ToyModal from "./ToyModal";

const AllToys = () => {
  const toys = useLoaderData();
  console.log(toys);
  const [alltoys, setAllToys] = useState(toys);
  const [search, setSearch] = useState("");
  useTitle('All Toys')

  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const search = form.search.value;
    setSearch(search);
    form.reset();
    fetch(`https://assignment-11-batch-7-server.vercel.app/search/${search}`)
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
      });
  };

  return (
    <section className="max-w-full bg-green-200">
      <div className="max-w-7xl mx-auto py-10">
        <h1 className="font-bold text-center pb-10 text-5xl">All Toys</h1>
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
        <div>
          <div className="overflow-x-auto p-5">
            <table className="table table-compact w-full p-5 bg-green-400">
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
    </section>
  );
};

export default AllToys;
