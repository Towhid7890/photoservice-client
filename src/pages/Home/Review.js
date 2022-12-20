import React from "react";

const Review = () => {
  return (
    <div className="py-12">
      <h2 className="text-3xl text-center font-bold text-white py-16">
        Show all Of Our Review
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <div className="flex items-center bg-purple-300  shadow-2xl rounded-lg w-3/4 px-3 border  mx-auto">
              <figure>
                <div className="avatar">
                  <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
              </figure>
              <div className="card-body">
                <h2 className="card-title">Jhon Smith</h2>
                <p>This is so good items you can purchase from here</p>
                <p>Date: 24 November,2022</p>
                <div className="card-actions justify-end">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-4"
                      className="mask mask-star-2 bg-green-500"
                    />
                    <input
                      type="radio"
                      name="rating-4"
                      className="mask mask-star-2 bg-green-500"
                    />
                    <input
                      type="radio"
                      name="rating-4"
                      className="mask mask-star-2 bg-green-500"
                    />
                    <input
                      type="radio"
                      name="rating-4"
                      className="mask mask-star-2 bg-green-500"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-4"
                      className="mask mask-star-2 bg-green-500"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <div className="flex items-center bg-purple-300  shadow-2xl rounded-lg w-3/4 px-3 border  mx-auto">
              <figure>
                <div className="avatar">
                  <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
              </figure>
              <div className="card-body">
                <h2 className="card-title">Jhon Smith</h2>
                <p>This is so good items you can purchase from here</p>
                <p>Date: 24 November,2022</p>
                <div className="card-actions justify-end">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-4"
                      className="mask mask-star-2 bg-green-500"
                    />
                    <input
                      type="radio"
                      name="rating-4"
                      className="mask mask-star-2 bg-green-500"
                    />
                    <input
                      type="radio"
                      name="rating-4"
                      className="mask mask-star-2 bg-green-500"
                    />
                    <input
                      type="radio"
                      name="rating-4"
                      className="mask mask-star-2 bg-green-500"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-4"
                      className="mask mask-star-2 bg-green-500"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
        <div className="carousel w-full hidden md:flex">
          <div id="slide3" className="carousel-item relative w-full">
            <div className="flex items-center bg-red-300  shadow-2xl rounded-lg w-3/4 px-3 border  mx-auto">
              <figure>
                <div className="avatar">
                  <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
              </figure>
              <div className="card-body">
                <h2 className="card-title">Thohidul Islam</h2>
                <p>This is so good items you can purchase from here</p>
                <p>Date: 24 November,2022</p>
                <div className="card-actions justify-end">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-4"
                      className="mask mask-star-2 bg-green-500"
                    />
                    <input
                      type="radio"
                      name="rating-4"
                      className="mask mask-star-2 bg-green-500"
                    />
                    <input
                      type="radio"
                      name="rating-4"
                      className="mask mask-star-2 bg-green-500"
                    />
                    <input
                      type="radio"
                      name="rating-4"
                      className="mask mask-star-2 bg-green-500"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-4"
                      className="mask mask-star-2 bg-green-500"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <div className="flex items-center bg-purple-300  shadow-2xl rounded-lg w-3/4 px-3 border  mx-auto">
              <figure>
                <div className="avatar">
                  <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
              </figure>
              <div className="card-body">
                <h2 className="card-title">Jhon Smith</h2>
                <p>This is so good items you can purchase from here</p>
                <p>Date: 24 November,2022</p>
                <div className="card-actions justify-end">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-4"
                      className="mask mask-star-2 bg-green-500"
                    />
                    <input
                      type="radio"
                      name="rating-4"
                      className="mask mask-star-2 bg-green-500"
                    />
                    <input
                      type="radio"
                      name="rating-4"
                      className="mask mask-star-2 bg-green-500"
                    />
                    <input
                      type="radio"
                      name="rating-4"
                      className="mask mask-star-2 bg-green-500"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-4"
                      className="mask mask-star-2 bg-green-500"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
