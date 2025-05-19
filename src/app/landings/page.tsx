"use client";

import { useEffect, useState } from "react";

const Landings = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate the opacity of the text based on scroll position
  // As user scrolls down, the text becomes more transparent
  // const textOpacity = Math.max(0, 1 - scrollPosition / 500);

  return (
    <div className="relative h-[150vh] overflow-x-hidden">
      {/* Background image - fixed position, covers entire viewport */}
      <div
        className="fixed top-0 left-0 w-full h-screen bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('https://picsum.photos/1920/1080')",
        }}
      />

      {/* Overlay - 1.5x height of viewport */}
      <div className="absolute top-0 left-0 w-full h-[150vh] bg-black bg-opacity-60 z-10" />

      {/* Hello text - appears on top of overlay */}
      <div
        className="flex items-center justify-center"
        // style={{ opacity: textOpacity }}
      >
        <h1 className="text-9xl font-bold text-white mix-blend-difference">
          HELLO
        </h1>
      </div>
    </div>
  );
};

export default Landings;
