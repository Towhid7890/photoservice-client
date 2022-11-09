import React from "react";
import useTitle from "../../../hooks/useTitle";
import Banner from "./Banner";
import Services from "./Services";
import HomeReview from "./HomeReview";
import Extra from "./Extra";

const Home = () => {
  useTitle("home");
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Extra></Extra>
      <HomeReview></HomeReview>
    </div>
  );
};

export default Home;
