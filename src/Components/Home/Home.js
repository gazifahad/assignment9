import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useReviews from "../hooks/useReviews";
import Review from "../Review/Review";

const Home = () => {
  const [reviews, setReviews] = useReviews();

  const nevigate = useNavigate();
  
  const sclicedReviews = reviews.slice(0,3);   


  return (
    <div>
      <div className="container m-8 p-8 grid md:grid-flow-col gap-24 items-center">
        <div className="text-left">
<<<<<<< HEAD
          <h1 className="text-4xl my-5">New Generation<span className="text-yellow-500"> Blood Glucose Meter</span>  </h1>
=======
          <h1 className="text-4xl my-5">Next generation<span className="text-yellow-500"> Blood Glucose Meter</span>  </h1>
>>>>>>> 41a314d85f8b95dac02795ca99832223a8d5f18e
          <p>
            This is one of the best glucose meter in the market. this  Glucometer is one of the most accurate systems and it fulfills ISO 15197:2013.To ensure accurate blood glucose measurement, this meter allows you to double-check the displayed result. Match colour code to assure results accuracy.This meter is easy to use as it doesn’t require any code chip for coding the meter.{" "}
          </p>
          <button className="rounded-full bg-blue-400 px-8 py-2 my-5">
            Buy Now
          </button>
        </div>
        <div className="w-50">
          <img src="../../../blood.jpg" alt="" />
        </div>
      </div>
      <div>
        <h1 className="mb-16">
          <span className="rounded bg-gray-300 px-8 py-2">
<<<<<<< HEAD
            Valuable Customers' review
=======
            Our Customers' review
>>>>>>> 41a314d85f8b95dac02795ca99832223a8d5f18e
          </span>
        </h1>
        <div className="grid md:grid-cols-3 gap-10 p-16">
          {sclicedReviews.map((review) => (
            <Review key={review.id} review={review}></Review>
          ))}
        </div>
        <button onClick={() => nevigate('/reviews')} className="rounded-full bg-blue-300 px-8 py-2 my-5">
<<<<<<< HEAD
          Load All
=======
          Load More
>>>>>>> 41a314d85f8b95dac02795ca99832223a8d5f18e
        </button>
      </div>
    </div>
  );
};

export default Home;
