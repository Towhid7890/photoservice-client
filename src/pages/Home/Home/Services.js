import React, { useEffect, useState } from "react";
import Service from "./Service";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div>
        <h1 className="text-4xl text-center mt-10 font-bold text-white">
          All Of Out Services
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto gap-10 mt-10 pb-10">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
      <div className="text-center pb-10">
        <Link className="" to="/allServices">
          <button className="btn btn-outline btn-warning">
            Show All Services
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;