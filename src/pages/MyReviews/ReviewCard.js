import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../context/AuthContext";

const ReviewCard = ({ review }) => {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState(review);
  const { user } = useContext(MyContext);
  // this is for update method
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const date = form.date.value;
    const message = form.message.value;
    const serviceName = form.serviceName.value;
    const reviews = {
      serviceName,
      date,
      message,
    };
    const url = `http://localhost:5000/myReviews/${review._id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((response) => response.json())
      .then((data) => {
        e.target.reset();
        navigate("/myReviews");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  // this is for delete method
  const handleDelete = (userId) => {
    const agree = window.confirm("Are you sure you want to delete");
    if (agree) {
      fetch(`http://localhost:5000/myReviews/${review._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted successfully");
            const remaining = reviews.filter((us) => us._id !== userId);
            setReviews(remaining);
          }
        });
    }
  };
  return (
    <div className="mx-auto flex flex-col lg:flex-row w-4/5 bg-black border p-5 mb-3 items-center rounded-md">
      <div className="w-1/5">
        <div className="avatar">
          <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ">
            <img src={`${user?.photoURL}`} />
          </div>
        </div>
        <div className="text-amber-500">{user?.displayName}</div>
      </div>
      <div>
        <h2 className="text-amber-500 text-xl ms-2">{reviews.message}</h2>
        <p className="text-amber-500">Created: {reviews.date}</p>
        <p className="text-amber-500 mb-3">Name: {reviews.serviceName}</p>
        <button
          className="btn btn-outline btn-warning mr-3"
          onClick={() => handleDelete(reviews._id)}
        >
          Delete
        </button>
        {/* The button to open modal */}
        <label htmlFor="my-modal" className="btn btn-outline btn-warning">
          Update
        </label>

        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box bg-black">
            <form onSubmit={handleUpdate}>
              <div className="form-control mt-3">
                <input
                  type="text"
                  name="serviceName"
                  required
                  placeholder="your Service name"
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
                  value="Update Review"
                />
              </div>
            </form>
            <div className="modal-action">
              <label htmlFor="my-modal" className="btn">
                X
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
