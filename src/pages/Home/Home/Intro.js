import React from "react";
import intro from "../../../assets/intro.jpg";

const Intro = () => {
  return (
    <div>
      <div className="hero bg-white py-28 text-black">
        <div className="hero-content flex-col  lg:flex-row-reverse">
          <img src={intro} className="w-1/2 rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Explore With Picman</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
