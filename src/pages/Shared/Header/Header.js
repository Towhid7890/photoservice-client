import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { MyContext } from "../../../context/AuthContext";
import logo from "../../../assets/logo.png";
const Header = () => {
  const { user, logOut } = useContext(MyContext);
  const handleToggle = (e) => {
    if (e.target.checked === true) {
      document.body.style = "background: #0F1729;";
    } else {
      document.body.style = "background: black;";
    }
  };
  // signOut handle
  const handleLogout = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="navbar bg-black text-white ">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-800 rounded-box w-52 duration-700"
          >
            <li>
              <Link to="/" className="text-white text-base ">
                Home
              </Link>
            </li>
            <li>
              <NavLink to="/allServices" className="text-white text-base">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className="text-white text-base">
                Blog
              </NavLink>
            </li>

            {user?.uid ? (
              <>
                <li>
                  <NavLink to="/myReviews" className="text-white normal-case">
                    My Reviews
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/addServices" className="text-white normal-case">
                    Add Service
                  </NavLink>
                </li>

                <div className="avatar tool ">
                  <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={user?.photoURL} />
                  </div>
                </div>
                <NavLink onClick={handleLogout} className="mt-2 normal-case">
                  <button className="btn btn-sm ms-3"> Log Out</button>
                </NavLink>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/login" className=" normal-case">
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/register" className=" normal-case">
                    Sign Up
                  </NavLink>
                </li>
              </>
            )}
            <>
              <input
                type="checkbox"
                onClick={handleToggle}
                className="toggle"
              />
            </>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-2xl">
          <img style={{ height: "40px" }} src={logo} alt="" />
        </Link>
      </div>

      <div className="navbar-end hidden lg:flex">
        <NavLink to="/" className="btn btn-ghost normal-case">
          Home
        </NavLink>
        <NavLink to="/allServices" className="btn btn-ghost normal-case">
          Services
        </NavLink>

        <NavLink to="/blog" className="btn btn-ghost normal-case">
          Blog
        </NavLink>
        {user?.uid ? (
          <>
            <NavLink to="/myReviews" className="btn btn-ghost normal-case">
              My Reviews
            </NavLink>
            <NavLink to="/addServices" className="btn btn-ghost normal-case">
              Add Service
            </NavLink>
            <div className="avatar tool ">
              <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user?.photoURL} />
              </div>
            </div>
            <NavLink
              onClick={handleLogout}
              className="btn btn-ghost normal-case"
            >
              <button className="btn btn-sm ms-3"> Log Out</button>
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/login" className="btn btn-ghost normal-case">
              Login
            </NavLink>
            <NavLink to="/register" className="btn btn-ghost normal-case">
              Sign Up
            </NavLink>
          </>
        )}
        <>
          <input type="checkbox" onClick={handleToggle} className="toggle" />
        </>
      </div>
    </div>
  );
};

export default Header;
