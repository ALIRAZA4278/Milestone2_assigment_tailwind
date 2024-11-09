import React from 'react';

export default function HomePage() {
  return (
    <div className="relative h-screen px-8 w-full mx-auto font-sans">

 
  
      <video
  autoPlay
  loop
  muted
  className="absolute top-0 left-0 w-full h-full object-cover opacity-80 z-0"
>
  <source src="/file.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

 
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-1"></div>

    
      <div className="relative z-10 flex flex-col justify-center items-center w-full h-full text-white text-center">
        <p className="text-lg md:text-4xl font-semibold uppercase">FREE & ACCESSIBLE</p>
        <h1 className="text-4xl md:text-8xl font-extrabold leading-tight mt-2">EDUCATION FOR ALL</h1>
      </div>

    </div>
  );
}
