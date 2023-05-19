import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import title from "../../assets/title.png";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut();
  };
  const navItem = (
    <>
      <li>
        <NavLink
          to={`/`}
          className={({ isActive, isPending }) =>
            isActive ? "bg-stone-500 text-white" : isPending ? "pending" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/alltoys`}
          className={({ isActive, isPending }) =>
            isActive ? "bg-stone-500 text-white" : isPending ? "pending" : ""
          }
        >
          All Toys
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to={`/mytoys`}
            className={({ isActive, isPending }) =>
              isActive ? "bg-stone-500 text-white" : isPending ? "pending" : ""
            }
          >
            My Toys
          </NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink
            to={`/addtoy`}
            className={({ isActive, isPending }) =>
              isActive ? "bg-stone-500 text-white" : isPending ? "pending" : ""
            }
          >
            Add A Toy
          </NavLink>
        </li>
      )}
      <li>
        <NavLink
          to={`/blog`}
          className={({ isActive, isPending }) =>
            isActive ? "bg-stone-500 text-white" : isPending ? "pending" : ""
          }
        >
          Blog
        </NavLink>
      </li>
      {user ? (
        <li>
          <NavLink
            to={`/login`}
            onClick={handleLogout}
            className={({ isActive, isPending }) =>
              isActive ? "bg-stone-500 text-white" : isPending ? "pending" : ""
            }
          >
            LogOut
          </NavLink>
        </li>
      ) : (
        <li>
          <NavLink
            to={`/login`}
            className={({ isActive, isPending }) =>
              isActive ? "bg-stone-500 text-white" : isPending ? "pending" : ""
            }
          >
            Login
          </NavLink>
        </li>
      )}
      {user && (
        <>
          <button
            title={user?.displayName}
            className="btn btn-ghost btn-circle avatar"
          >
            <img className="w-full rounded-full mr-4" src={user?.photoURL} />
          </button>
        </>
      )}
    </>
  );
  return (
    <section className="max-w-full bg-stone-300 h-[90px] my-auto pt-2 font-bold">
      <div className="navbar  max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img src={title} alt="" />
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
