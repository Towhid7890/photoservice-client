import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../context/AuthContext";
import ReviewCard from "./ReviewCard";
import useTitle from "./../../hooks/useTitle";

const MyReviews = () => {
  useTitle("myReviews");
  const { user } = useContext(MyContext);
  const [reviews, setReviews] = useState([]);
  const url = `http://localhost:5000/myReviews?email=${user?.email}`;
  useEffect(() => {
    fetch(url, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("picman-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      });
  }, [reviews]);

  return (
    <div>
      <h2 className="text-center text-amber-500 text-3xl mt-5">
        Explore My Excellent Review
      </h2>
      <div className="w-full mt-10">
        {reviews.length === 0 ? (
          <p className="text-white text-3xl text-center">
            You have No Review !!! Please give some Review
          </p>
        ) : (
          <>
            {reviews.map((review) => (
              <ReviewCard review={review} key={review._id}></ReviewCard>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default MyReviews;
