"use client";
import { Link } from "react-router-dom";

import { Card, Button } from "flowbite-react";

export default function CardWithDecorativeImage({ allEvents }) {
  let rate = allEvents?.rate;
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
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={allEvents?.imageUrl}
    >
      <div className="flex justify-between">
      <Link to="/movieDetails">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {allEvents?.name}
        </h5>
        </Link>
        <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">{allEvents?.language}</p>
      </div>
      <div className="flex">
        {starArr.map((v,i) =>
          v === 1 ? (
            <svg key={i}
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          ) : (
            <svg key={i}
              className="h-5 w-5 text-gray-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          )
        )}
        <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
          {allEvents?.rate} out of 5
        </p>
      </div>
      {/* 
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p> */}
      <div className="flex gap-1 flex-wrap">
        <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">type:</p>
        {allEvents?.type.split(" ").map((v) => (
          <Button key={v} gradientDuoTone="tealToLime" size="xs">
            {v}
          </Button>
        ))}
      </div>
      <Link to="">
      <Button>
        <p>Book Now</p>
        <svg
          className="-mr-1 ml-2 h-4 w-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>{" "}
      </Button>
      </Link>
    </Card>
  );
}
