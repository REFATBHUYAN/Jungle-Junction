import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const PrivateRoute = ({children}) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="w-full relative mx-auto my-20">
        <progress className="progress w-1/5 mx-auto absolute inset-x-0 top-0"></progress>
      </div>
    );
  }
  if (user) {
    return children;
  }
  if(!user){
    Swal.fire({
      icon: 'error',
      title: 'Oops...Not Login Yet!!',
      text: 'Please Login...',
    })
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
  }
  
};

export default PrivateRoute;
