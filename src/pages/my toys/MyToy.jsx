import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Update from "./Update";

const MyToy = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/toys?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [user]);
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
        fetch(`http://localhost:5000/toys/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const remaining = toys.filter(toy => toy._id != _id);
            setToys(remaining);
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          });
      }
    });
  };
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
                  <td className="space-x-2">
                    <Link to={`/update/${toy._id}`}>
                      <button className="btn btn-primary">Update</button>
                    </Link>
                    <button
                      onClick={() => handleDelete(toy._id)}
                      className="btn btn-primary"
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
  );
};

export default MyToy;
