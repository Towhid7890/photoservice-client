import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MyContext } from "../../context/AuthContext";
import useTitle from "../../hooks/useTitle";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";
const Login = () => {
  useTitle("login");
  const [error, setError] = useState("");
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const { userLogin } = useContext(MyContext);
  // handle login
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    form.reset();
    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user?.email,
        };
        // jwt access token get
        fetch("https://fullstack-assignment11-server.vercel.app/jwt", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("picman-token", data.token);
            toast.success("Successfully login");
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  return (
    <div className="text-center mt-16 w-4/5 lg:w-1/2 mx-auto login-container">
      <h1 className="text-2xl lg:text-5xl font-bold text-amber-600">
        Please Login now!
      </h1>
      <form className="py-4" onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-amber-600 text-base">Email</span>
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
            <span className="label-text text-amber-600 text-base">
              Password
            </span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
          />
          <p className="text-red-600">{error}</p>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-accent bg-green-500 text-white text-xl">
            Login
          </button>
        </div>
      </form>
      <div>
        <p className="text-amber-600">
          New in here? <Link to="/register">Register</Link>
        </p>
      </div>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
