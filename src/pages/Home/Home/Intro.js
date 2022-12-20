import React, { useState } from "react";
import intro from "../../../assets/intro.jpg";

const Intro = () => {
  const [time, setTime] = useState(59);
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
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
              <div className="flex flex-col">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 15 }}></span>
                </span>
                days
              </div>
              <div className="flex flex-col">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 10 }}></span>
                </span>
                hours
              </div>
              <div className="flex flex-col">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 24 }}></span>
                </span>
                min
              </div>
              <div className="flex flex-col">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": time }}></span>
                </span>
                sec
              </div>
            </div>
            <button className="btn btn-primary mt-5">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
