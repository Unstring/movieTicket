'use client';

import { Carousel } from 'flowbite-react';

export default function PauseOnHovering() {
  return (
    <Carousel pauseOnHover indicators={false} slideInterval={500}>
      <img
        alt="..."
        src="./ph1.jpg"
      />
      <img
        alt="..."
        src="./ph2.jpg"
      />
      <img
        alt="..."
        src="./ph3.jpg"
      />
      <img
        alt="..."
        src="./ph4.jpg"
      />
      <img
        alt="..."
        src="./ph5.jpg"
      />
    </Carousel>
  )
}
