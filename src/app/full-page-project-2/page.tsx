"use client";

import { useEffect, useState } from "react";

export default function RubiksCube() {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    // Auto-start animation after a delay
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="rubiks-cube" className="grid place-items-center">
      <h1 className="text-[8rem] -mb-10">THE PIXEL</h1>
      <div className="m-48 transform transform-3d rotate-x-[-25deg] rotate-y-[-25deg] w-72 h-72">
        {/* middle level */}
        <div className="middle-lvl transform-3d -rotate-y-180">
          <div className="absolute h-24 w-24 border-2 rounded bg-yellow-500 translate-z-36"></div>
          <div className="absolute h-24 w-24 border-2 rounded bg-yellow-500 translate-x-24 translate-z-36 grid place-items-center text-[2.5rem] font-semibold tracking-wide">
            to
          </div>
          <div className="absolute h-24 w-24 border-2 rounded bg-yellow-500 translate-x-48 translate-z-36"></div>
          <div className="absolute h-24 w-24 border-2 rounded bg-blue-500 -translate-z-36"></div>
          <div className="absolute h-24 w-24 border-2 rounded bg-blue-500 translate-x-24 -translate-z-36"></div>
          <div className="absolute h-24 w-24 border-2 rounded bg-blue-500 translate-x-48 -translate-z-36"></div>
          <div className="absolute h-24 w-24 border-2 rounded bg-green-500 -translate-x-12 rotate-y-90"></div>
          <div className="absolute h-24 w-24 border-2 rounded bg-green-500 -translate-x-12 translate-z-24 rotate-y-90"></div>
          <div className="absolute h-24 w-24 border-2 rounded bg-green-500 -translate-x-12 -translate-z-24 rotate-y-90"></div>
          <div className="absolute h-24 w-24 border-2 rounded bg-red-500 translate-x-60 rotate-y-90"></div>
          <div className="absolute h-24 w-24 border-2 rounded bg-red-500 translate-x-60 translate-z-24 rotate-y-90"></div>
          <div className="absolute h-24 w-24 border-2 rounded bg-red-500 translate-x-60 -translate-z-24 rotate-y-90"></div>
          <div className="absolute h-24 w-24 border-2 rounded bg-orange-500 -translate-y-12 rotate-x-90"></div>
          <div className="absolute h-24 w-24 border-2 rounded bg-orange-500 translate-x-48 -translate-y-12 rotate-x-90"></div>
          <div className="absolute h-24 w-24 border-2 rounded bg-orange-500 -translate-y-12 -translate-z-24 rotate-x-90"></div>
          <div className="absolute h-24 w-24 border-2 rounded bg-orange-500 translate-x-24 -translate-y-12 -translate-z-24 rotate-x-90"></div>
          <div className="absolute h-24 w-24 border-2 rounded bg-orange-500 translate-x-48 -translate-y-12 -translate-z-24 rotate-x-90"></div>
          <div className="absolute h-24 w-24 border-2 rounded bg-orange-500 -translate-y-12 translate-z-24 rotate-x-90"></div>
          <div className="absolute h-24 w-24 border-2 rounded bg-orange-500 translate-x-24 -translate-y-12 translate-z-24 rotate-x-90"></div>
          <div className="absolute h-24 w-24 border-2 rounded bg-orange-500 translate-x-48 -translate-y-12 translate-z-24 rotate-x-90"></div>
        </div>
        {/* bottom level */}
        <div className="bottom-lvl transform-3d translate-y-24 rotate-y-90">
          <div className="absolute h-24 w-24 border-2 rounded bg-yellow-500 translate-z-36"></div>
          <div className="absolute h-24 w-24 border-2 rounded bg-yellow-500 translate-x-24 translate-z-36"></div>
          <div className="absolute h-24 w-24 border-2 rounded bg-yellow-500 translate-x-48 translate-z-36"></div>
          <div className="absolute h-24 w-24 border-2 rounded bg-blue-500 -translate-z-36"></div>
          <div className="absolute h-24 w-24 border-2 rounded bg-blue-500 translate-x-24 -translate-z-36"></div>
          <div className="absolute h-24 w-24 border-2 rounded bg-blue-500 translate-x-48 -translate-z-36"></div>
          <div className="absolute h-24 w-24 border-2 rounded bg-green-500 -translate-x-12 rotate-y-90"></div>
          <div className="absolute h-24 w-24 border-2 rounded bg-green-500 -translate-x-12 translate-z-24 rotate-y-90"></div>
          <div className="absolute h-24 w-24 border-2 rounded bg-green-500 -translate-x-12 -translate-z-24 rotate-y-90"></div>
          <div className="absolute h-24 w-24 border-2 rounded bg-red-500 translate-x-60 rotate-y-90"></div>
          <div className="absolute h-24 w-24 border-2 rounded bg-red-500 translate-x-60 translate-z-24 rotate-y-90"></div>
          <div className="absolute h-24 w-24 border-2 rounded bg-red-500 translate-x-60 -translate-z-24 rotate-y-90"></div>
          <div className="absolute h-24 w-24 border-2 rounded bg-orange-500 -translate-y-12 rotate-x-90"></div>
          <div className="absolute h-24 w-24 border-2 rounded bg-orange-500 translate-x-48 -translate-y-12 rotate-x-90"></div>
          <div className="absolute h-24 w-24 border-2 rounded bg-orange-500 -translate-y-12 -translate-z-24 rotate-x-90"></div>
          <div className="absolute h-24 w-24 border-2 rounded bg-orange-500 translate-x-24 -translate-y-12 -translate-z-24 rotate-x-90"></div>
          <div className="absolute h-24 w-24 border-2 rounded bg-orange-500 translate-x-48 -translate-y-12 -translate-z-24 rotate-x-90"></div>
          <div className="absolute h-24 w-24 border-2 rounded bg-orange-500 -translate-y-12 translate-z-24 rotate-x-90"></div>
          <div className="absolute h-24 w-24 border-2 rounded bg-orange-500 translate-x-24 -translate-y-12 translate-z-24 rotate-x-90"></div>
          <div className="absolute h-24 w-24 border-2 rounded bg-orange-500 translate-x-48 -translate-y-12 translate-z-24 rotate-x-90"></div>
        </div>
        {/* top level */}
        <div className="top-lvl transform-3d -translate-y-24 -rotate-y-90">
          <div className="absolute h-24 w-24 border-2 rounded bg-yellow-500 translate-z-36 grid items-center justify-end text-[2.5rem] font-semibold tracking-widest">
            WE
          </div>
          <div className="absolute h-24 w-24 border-2 rounded bg-yellow-500 translate-x-24 translate-z-36 grid place-items-center text-[2.5rem] font-semibold tracking-wider">
            LCO
          </div>
          <div className="absolute h-24 w-24 border-2 rounded bg-yellow-500 translate-x-48 translate-z-36 grid items-center text-[2.5rem] font-semibold tracking-widest">
            ME
          </div>
          <div className="absolute h-24 w-24 border-2 rounded bg-blue-500 -translate-z-36"></div>
          <div className="absolute h-24 w-24 border-2 rounded bg-blue-500 translate-x-24 -translate-z-36"></div>
          <div className="absolute h-24 w-24 border-2 rounded bg-blue-500 translate-x-48 -translate-z-36"></div>
          <div className="absolute h-24 w-24 border-2 rounded bg-green-500 -translate-x-12 rotate-y-90"></div>
          <div className="absolute h-24 w-24 border-2 rounded bg-green-500 -translate-x-12 translate-z-24 rotate-y-90"></div>
          <div className="absolute h-24 w-24 border-2 rounded bg-green-500 -translate-x-12 -translate-z-24 rotate-y-90"></div>
          <div className="absolute h-24 w-24 border-2 rounded bg-red-500 translate-x-60 rotate-y-90"></div>
          <div className="absolute h-24 w-24 border-2 rounded bg-red-500 translate-x-60 translate-z-24 rotate-y-90"></div>
          <div className="absolute h-24 w-24 border-2 rounded bg-red-500 translate-x-60 -translate-z-24 rotate-y-90"></div>
          <div className="absolute h-24 w-24 border-2 rounded bg-orange-500 -translate-y-12 rotate-x-90"></div>
          <div className="absolute h-24 w-24 border-2 rounded bg-orange-500 translate-x-24 -translate-y-12 rotate-x-90"></div>
          <div className="absolute h-24 w-24 border-2 rounded bg-orange-500 translate-x-48 -translate-y-12 rotate-x-90"></div>
          <div className="absolute h-24 w-24 border-2 rounded bg-orange-500 -translate-y-12 -translate-z-24 rotate-x-90"></div>
          <div className="absolute h-24 w-24 border-2 rounded bg-orange-500 translate-x-24 -translate-y-12 -translate-z-24 rotate-x-90"></div>
          <div className="absolute h-24 w-24 border-2 rounded bg-orange-500 translate-x-48 -translate-y-12 -translate-z-24 rotate-x-90"></div>
          <div className="absolute h-24 w-24 border-2 rounded bg-orange-500 -translate-y-12 translate-z-24 rotate-x-90"></div>
          <div className="absolute h-24 w-24 border-2 rounded bg-orange-500 translate-x-24 -translate-y-12 translate-z-24 rotate-x-90"></div>
          <div className="absolute h-24 w-24 border-2 rounded bg-orange-500 translate-x-48 -translate-y-12 translate-z-24 rotate-x-90"></div>
        </div>
      </div>
      <h1 className="text-[8rem] -mt-56">PLAYGROUND</h1>
    </div>
  );
}
