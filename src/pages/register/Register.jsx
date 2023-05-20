import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Lottie from "lottie-react";
import lottiFile from '/public/63787-secure-login.json';

const Register = () => {
  const [error, setError] = useState("");
  const { createUser, updateUser, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.from?.pathname || "/";

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);
    setError("");
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        form.reset();
        userPhotoUpdate(createdUser, name, photo);
        logOut();
        navigate("/login");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const userPhotoUpdate = (user, name, photo) => {
    updateUser(user, name, photo)
      .then(() => {})
      .catch((error) => setError(error.message));
  };
  return (
    <>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content w-3/4 flex-col lg:flex-row">
            <div className="text-center h-3/4 w-full lg:text-left">
              <Lottie className="bg-blue-200" animationData={lottiFile} loop={true} />;
            </div>
            <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
              <div className="card-body w-full">
                <h1 className="text-5xl font-bold text-center mb-6">
                  Register
                </h1>
                <form onSubmit={handleRegister}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">PhotoURL</span>
                    </label>
                    <input
                      type="text"
                      name="photo"
                      placeholder="PhotoURL"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control mt-6">
                    <input
                      className="btn btn-primary"
                      type="submit"
                      value="Register"
                    />
                  </div>
                </form>
                {/* state={{from: location?.state}} */}
                <p className="font-bold mt-3">
                  Don't have any Account ? Please ...{" "}
                  <Link to="/login" className="text-cyan-600 underline">
                    Login
                  </Link>
                </p>
                <div className="text-red-600 my-4 font-bold">{error}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
