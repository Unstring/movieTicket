"use client";
import { Link } from "react-router-dom";

import { Card, Button } from "flowbite-react";

export default function ECommerceCard({ movieData }) {
  let rate = movieData?.rate;
  let starArr = [];
  for (let i = 0; i < 5; i++) {
    if (rate > i) {
      starArr.push(1);
    } else {
      starArr.push(0);
    }
  }
  return (
    <Card
      imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
      imgSrc={movieData?.imageUrl}
    >
      <div className="flex justify-between">
        <Link to="/movieDetails">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {movieData?.name}
          </h5>
        </Link>
        <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
          {movieData?.language}
        </p>
      </div>

      <div className=" flex items-center">
        {starArr.map((v,i) =>
          v === 1 ? (
            <svg
              key={i}
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          ) : (
            <svg
              key={i}
              className="h-5 w-5 text-gray-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          )
        )}
        <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
          <p>{movieData?.rate}</p>
        </span>
      </div>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
      <div className="flex gap-1 flex-wrap">
        <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
          type:
        </p>
        {movieData?.type.split(" ").map((v) => (
          <Button key={v} gradientDuoTone="tealToLime" size="xs">
            {v}
          </Button>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          ₹ 400
        </span>
        <Link
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          to="/ticketbooking"
        >
          <p>Book Now</p>
        </Link>
      </div>
    </Card>
  );
}
