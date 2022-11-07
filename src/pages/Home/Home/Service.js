import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
import "./service.css";
const Service = ({ service }) => {
  const { image_url, title, details, price, rating, _id } = service;
  return (
    <div className="card card-container bg-black">
      <PhotoProvider>
        <PhotoView src={image_url}>
          <figure>
            <img className="h-64 w-full" src={image_url} alt="Shoes" />
          </figure>
        </PhotoView>
      </PhotoProvider>

      <div className="card-body">
        <h2 className="text-2xl font-bold text-amber-500">{title}</h2>
        <p className="text-amber-500">{details.slice(0, 100)}...</p>
        <p className="text-amber-500">Price: {price}</p>
        <p className="text-amber-500">Rating: {rating.badge}</p>
        <div className="card-actions items-center justify-end">
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star bg-orange-400"
            />
          </div>

          <Link to={`/details/${_id}`}>
            <button className="btn btn-outline btn-warning">
              Show Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
