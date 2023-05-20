import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Update from "./Update";

const MyToy = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [selectedOption, setSelectedOption] = useState("dese");

  useEffect(() => {
    fetch(
      `https://assignment-11-batch-7-server.vercel.app/alltoys?email=${user?.email}&sort=${selectedOption}`
    )
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [user, selectedOption]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-11-batch-7-server.vercel.app/toys/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const remaining = toys.filter((toy) => toy._id != _id);
            setToys(remaining);
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          });
      }
    });
  };
 

  return (
    <section className="max-w-full mx-auto bg-green-200">
      <div className="max-w-7xl mx-auto pb-10">
        <h1 className="font-bold text-center py-10 text-5xl">My Toys</h1>
        <div>
          <div className="flex items-center space-x-2 my-2">
            <label htmlFor="sort" className="text-gray-700">
              Sort by Price:
            </label>
            <select
              id="sort"
              name="sort"
              className="rounded border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              // value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option Value={"dese"}>Low to High</option>
              <option value={"asen"}>High to Low</option>
            </select>
          </div>
        </div>
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
                    <td className="space-x-2">
                      <Link to={`/update/${toy._id}`}>
                        <button className="btn-custom">Update</button>
                      </Link>
                      <button
                        onClick={() => handleDelete(toy._id)}
                        className="btn btn-error"
                      >
                        X
                      </button>
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

export default MyToy;
