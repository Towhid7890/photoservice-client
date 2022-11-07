import React from "react";
import "./service.css";
const Service = ({ service }) => {
  const { image_url, title, details } = service;
  return (
    <div className="card card-container bg-black">
      <figure>
        <img className="h-64 w-full" src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="text-2xl font-bold text-amber-500">{title}</h2>
        <p className="text-amber-500">{details.slice(0, 100)}...</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default Service;
