'use client';

import { Carousel } from 'flowbite-react';

export default function PauseOnHovering({allMovies}) {

  return (
    <Carousel pauseOnHover indicators={false} slideInterval={500}>
      {
        allMovies.length == 0 ? (
<>ye khali h
</>
        ):(
          allMovies.map((v,i)=>(
            <img
            key={i}
        alt="..."
        src={v.imageUrl}
      />
          ))
        )
      }
    </Carousel>
  )
}
