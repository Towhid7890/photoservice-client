import React from "react";
import "./extra.css";
const Extra = () => {
  return (
    <div className="hero extra-container mt-5">
      <div className="hero-overlay bg-opacity-65"></div>
      <div className="hero-content text-center text-neutral-content py-10">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Explore PicMan Photography
          </h1>
          <p className="mb-5">
            Here Are Different & Professional for the photography
            service.Photography is the art, application, and practice of
            creating durable images by recording light, either electronically by
            means of an image sensor, or chemically by means of a
            light-sensitive material such as photographic film
          </p>
          <button className="btn btn-accent">Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default Extra;
