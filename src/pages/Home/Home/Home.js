import React from "react";
import useTitle from "../../../hooks/useTitle";
import Banner from "./Banner";
import Services from "./Services";

const Home = () => {
  useTitle("home");
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
    </div>
  );
};

export default Home;
