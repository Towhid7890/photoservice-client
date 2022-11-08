import React, { useContext, useState } from "react";
import { MyContext } from "../../context/AuthContext";
import ReviewCard from "./ReviewCard";

const MyReviews = () => {
  const { user } = useContext(MyContext);
  const [reviews, setReviews] = useState([]);
  const url = `http://localhost:5000/myReviews?email=${user?.email}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => setReviews(data));

  return (
    <div>
      <h2 className="text-center text-amber-500 text-3xl mt-5">
        Explore My Excellent Review
      </h2>
      <div className="w-full mt-10">
        {reviews.map((review) => (
          <ReviewCard review={review} key={review._id}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default MyReviews;
