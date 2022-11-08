import React, { useContext, useState } from "react";
import { MyContext } from "../../context/AuthContext";

const ReviewCard = ({ review }) => {
  const [reviews, setReviews] = useState(review);
  const { user } = useContext(MyContext);
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
        <button className="btn btn-outline btn-warning">Update</button>
      </div>
    </div>
  );
};

export default ReviewCard;
