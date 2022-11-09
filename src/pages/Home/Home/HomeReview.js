import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const HomeReview = () => {
  return (
    <div className="w-11/12 mx-auto mt-10">
      <h2 className="text-3xl text-amber-500 text-center font-bold">
        Purchase
      </h2>
      <h2 className="text-2xl text-amber-500 text-center font-bold">
        My Quality Package
      </h2>
      <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="card bg-black border shadow-xl text-center ">
          <div className="card stats-vertical shadow">
            <div className="stat bg-black text-amber-400">
              <div className="font-bold text-5xl">Basic</div>
              <div className="stat-value">$100</div>
              <div className="stat-desc">1 years/free</div>
            </div>

            <div className="stat bg-black text-amber-500 ">
              <div className="flex items-center justify-center text-lg">
                <FaCheckCircle className="mr-2"></FaCheckCircle>
                <p className="">1 years free service</p>
              </div>
              <div className="flex items-center justify-center text-lg">
                <FaCheckCircle className="mr-2"></FaCheckCircle>
                <p className="">Daily Update content</p>
              </div>
              <div className="flex items-center justify-center text-lg">
                <FaCheckCircle className="mr-2"></FaCheckCircle>
                <p className="">Home delivery system</p>
              </div>
              <div className="flex items-center justify-center text-lg">
                <FaCheckCircle className="mr-2"></FaCheckCircle>
                <p className="">Make service rechargeable</p>
              </div>
              <div className="flex items-center justify-center text-lg">
                <FaCheckCircle className="mr-2"></FaCheckCircle>
                <p className="">1 years free service</p>
              </div>
            </div>

            <div className="pb-10">
              <button className="btn mt-10 text-2xl  btn-outline btn-warning text-white w-11/12">
                Purchase
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-black border shadow-xl text-center ">
          <div className="card stats-vertical shadow">
            <div className="stat bg-black text-amber-400">
              <div className="font-bold text-5xl">Premium</div>
              <div className="stat-value">$300</div>
              <div className="stat-desc">2 years/support</div>
            </div>

            <div className="stat bg-black text-amber-500 ">
              <div className="flex items-center justify-center text-lg">
                <FaCheckCircle className="mr-2"></FaCheckCircle>
                <p className="">1 years free service</p>
              </div>
              <div className="flex items-center justify-center text-lg">
                <FaCheckCircle className="mr-2"></FaCheckCircle>
                <p className="">Daily Update content</p>
              </div>
              <div className="flex items-center justify-center text-lg">
                <FaCheckCircle className="mr-2"></FaCheckCircle>
                <p className="">Home delivery system</p>
              </div>
              <div className="flex items-center justify-center text-lg">
                <FaCheckCircle className="mr-2"></FaCheckCircle>
                <p className="">Make service rechargeable</p>
              </div>
              <div className="flex items-center justify-center text-lg">
                <FaCheckCircle className="mr-2"></FaCheckCircle>
                <p className="">1 years free service</p>
              </div>
            </div>

            <div className="pb-10">
              <button className="btn mt-10 text-2xl  btn-outline btn-warning w-11/12">
                Purchase
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-black border shadow-xl text-center ">
          <div className="card stats-vertical shadow">
            <div className="stat bg-black text-amber-400">
              <div className="font-bold text-5xl">Ultimate</div>
              <div className="stat-value">$500</div>
              <div className="stat-desc">2 years/support</div>
            </div>

            <div className="stat bg-black text-amber-500 ">
              <div className="flex items-center justify-center text-lg">
                <FaCheckCircle className="mr-2"></FaCheckCircle>
                <p className="">1 years free service</p>
              </div>
              <div className="flex items-center justify-center text-lg">
                <FaCheckCircle className="mr-2"></FaCheckCircle>
                <p className="">Daily Update content</p>
              </div>
              <div className="flex items-center justify-center text-lg">
                <FaCheckCircle className="mr-2"></FaCheckCircle>
                <p className="">Home delivery system</p>
              </div>
              <div className="flex items-center justify-center text-lg">
                <FaCheckCircle className="mr-2"></FaCheckCircle>
                <p className="">Make service rechargeable</p>
              </div>
              <div className="flex items-center justify-center text-lg">
                <FaCheckCircle className="mr-2"></FaCheckCircle>
                <p className="">1 years free service</p>
              </div>
            </div>

            <div className="pb-10">
              <button className="btn mt-10 text-2xl  btn-outline btn-warning w-11/12">
                Purchase
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeReview;
