import React, { useContext } from "react";
import { MyContext } from "../../context/AuthContext";

const ReviewCard = ({ review }) => {
  const { user } = useContext(MyContext);
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
        <h2 className="text-amber-500 text-xl ms-2">{review.message}</h2>
        <p className="text-amber-500">Created: {review.date}</p>
        <p className="text-amber-500 mb-3">Name: {review.serviceName}</p>
        <button className="btn btn-outline btn-warning mr-3">Delete</button>
        <button className="btn btn-outline btn-warning">Update</button>
      </div>
    </div>
  );
};

export default ReviewCard;
