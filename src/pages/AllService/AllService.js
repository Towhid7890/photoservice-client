import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import Service from "../Home/Home/Service";

const AllService = () => {
  useTitle("all-service");
  const services = useLoaderData();
  return (
    <div>
      <div className="py-5 text-center">
        <h2 className="text-center text-4xl text-amber-500">
          Explore all of my services, <br /> Choose your best one
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-10 w-11/12 mx-auto">
        {services.map((service) => (
          <Service service={service} key={service._id}></Service>
        ))}
      </div>
    </div>
  );
};

export default AllService;
