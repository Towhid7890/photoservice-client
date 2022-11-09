import React from "react";
import useTitle from "../../../hooks/useTitle";
import Banner from "./Banner";
import Services from "./Services";
import HomeReview from "./HomeReview";

const Home = () => {
  useTitle("home");
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <HomeReview></HomeReview>
    </div>
  );
};

export default Home;
