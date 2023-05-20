import React, { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Lottie from "lottie-react";
import lottiFile from "/public/63787-secure-login.json";
import useTitle from "../../hook/useTitle";

const Login = () => {
  useTitle("Login");
  const [error, setError] = useState("");
  const { googleSingIn, githubSingIn, loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    setError("");
    loginUser(email, password)
      .then((result) => {
        const loogedUser = result.user;
        console.log(loogedUser);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handleGoogleSing = () => {
    googleSingIn()
      .then((result) => {
        const loogedUser = result.user;
        console.log(loogedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(error.message);
      });
  };

  return (
    <section className="">
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content w-3/4 flex-col lg:flex-row">
            <div className="text-center h-3/4 w-full lg:text-left">
              <Lottie animationData={lottiFile} loop={true} />;
            </div>
            <div className="card w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body w-full">
                <h1 className="text-5xl font-bold text-center mb-6">Login</h1>
                <form onSubmit={handleLogin}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
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
                      value="Login"
                    />
                  </div>
                </form>
                {/* state={{from: location?.state}} */}
                <p className="font-bold mt-3">
                  Don't have any Account ? Please ...{" "}
                  <Link to="/register" className="text-cyan-600 underline">
                    Register
                  </Link>{" "}
                </p>
                <div className="divider">OR</div>
                <div>
                  <button
                    onClick={handleGoogleSing}
                    className="flex font-bold items-center justify-center gap-4 border border-indigo-600 rounded-md w-full mx-auto py-2 text-center"
                  >
                    <FaGoogle></FaGoogle> Login With Google
                  </button>
                </div>
                <div className="text-red-600 my-4 font-bold">{error}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
