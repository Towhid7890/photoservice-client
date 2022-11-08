import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { MyContext } from "../../context/AuthContext";

const ShowDetails = () => {
  const service = useLoaderData();
  const { user } = useContext(MyContext);
  const [reviews, setReviews] = useState([]);
  const url = `http://localhost:5000/reviews?serviceName=${service.title}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => setReviews(data));
  const handleReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    console.log(name);
    const email = user?.email || "unregister";
    const photoURL = form.photoUrl.value;
    const date = form.date.value;
    const message = form.message.value;
    const reviews = {
      service: service._id,
      serviceName: service.title,
      reviewer: name,
      email,
      photoURL,
      date,
      message,
    };
    console.log(reviews);
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          form.reset();
          toast.success("Review done successfully");
        }
      });
  };

  return (
    <div className="bg-black px-5 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="text-center border p-5 lg:text-left">
          <h1 className="text-3xl lg:text-5xl font-bold text-white">
            About <br /> {service.title}
          </h1>

          <img
            className="w-11/12 h-96 py-6 mx-auto"
            src={service.image_url}
            alt=""
          />
          <p className="text-white text-2xl">Price: {service.price}</p>
          <p className="text-white text-2xl">Rating: {service.rating.number}</p>
          <p className="text-white text-2xl">Badge: {service.rating.badge}</p>
          <p className="text-white text-2xl">
            Service taken : {service.total_view}
          </p>
          <p className="py-6 text-amber-500">{service.details}</p>
        </div>
        <div className="">
          <h2 className="text-amber-500 text-center text-3xl font-bold">
            All of Reviews
          </h2>

          <div className="card-body">
            {reviews.length === 0 ? (
              <h2 className="text-amber-500 text-2xl">
                No reviews For this Service
              </h2>
            ) : (
              <>
                {reviews.map((review) => (
                  <div
                    key={review._id}
                    className="card w-full border text-neutral-content"
                  >
                    <div className="p-5 flex space-between">
                      <div className="mr-5">
                        <div className="avatar">
                          <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={`${review.photoURL}`} />
                          </div>
                        </div>{" "}
                        <br />
                        <small>{review.reviewer}</small>
                      </div>

                      <div className="">
                        <p>{service.title}</p>
                        <p>{review.message}</p>
                        <p>
                          <small>Review In : {review.date}</small>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
            {user?.email ? (
              <form onSubmit={handleReview}>
                <div className="form-control">
                  <input
                    name="email"
                    required
                    defaultValue={user?.email}
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-3">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="your name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-3">
                  <input
                    type="text"
                    required
                    name="photoUrl"
                    placeholder="your PhotUrl"
                    className="input input-bordered"
                  />
                </div>
                <div className="mt-3">
                  <input
                    type="date"
                    required
                    name="date"
                    id=""
                    className="input input-bordered"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    required
                    type="text"
                    className="textarea w-full mt-3"
                    placeholder="Write your Review"
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Add Review"
                  />
                </div>
              </form>
            ) : (
              <>
                <p className="text-amber-500">Add To Your Review?</p>
                <Link to="/login" className="text-white">
                  Login First
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
