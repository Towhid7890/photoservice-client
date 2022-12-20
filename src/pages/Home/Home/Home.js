import React from "react";
import useTitle from "../../../hooks/useTitle";
import Banner from "./Banner";
import Services from "./Services";
import HomeReview from "./HomeReview";
import Extra from "./Extra";
import Intro from "./Intro";
import Faq from "../Faq/Faq";
import Review from "../Review";

const Home = () => {
  useTitle("home");
  return (
    <div>
      <Banner></Banner>
      <Intro></Intro>
      <Services></Services>
      <Extra></Extra>
      <HomeReview></HomeReview>
      <Faq></Faq>
      <Review></Review>
    </div>
  );
};

export default Home;
