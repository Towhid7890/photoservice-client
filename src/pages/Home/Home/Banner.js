import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="hero min-h-screen banner-section">
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Capture Love, Joy & Everything With Us
          </h1>
          <p className="mb-5">
            Find the best photography services and explore with photography
            world with my awesome services
          </p>
          <button className="btn btn-secondary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
