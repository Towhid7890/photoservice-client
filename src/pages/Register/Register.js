import React, { useContext, useState } from "react";
import SocialLogin from "./../SocialLogin/SocialLogin";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../../context/AuthContext";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(MyContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;

    // create register section
    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        form.reset();
        updateUserProfile({
          displayName: name,
          photoURL: photoUrl,
        })
          .then(() => {})
          .catch((error) => {
            setError(error.message);
          });
        toast.success("Thanks for Register");
        navigate("/login");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  return (
    <>
      <div className="text-center mt-16 w-4/5 lg:w-1/2 mx-auto login-container">
        <h1 className="text-2xl lg:text-5xl font-bold text-amber-600">
          Please Register !!
        </h1>
        <form className="py-4" onSubmit={handleRegister}>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-amber-600 text-base">
                Full Name
              </span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-amber-600 text-base">
                Your PhotoURL
              </span>
            </label>
            <input
              type="text"
              name="photoUrl"
              placeholder="PhotoURL"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-amber-600 text-base">Email</span>
            </label>
            <input
              type="email"
              required
              placeholder="email"
              name="email"
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
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <span className="label-text text-red-500 text-base">{error}</span>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-accent bg-green-500 text-white text-xl">
              Login
            </button>
          </div>
        </form>
        <div>
          <p className="text-amber-600">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
        <SocialLogin></SocialLogin>
      </div>
    </>
  );
};

export default Register;
