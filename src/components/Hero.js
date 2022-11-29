import React from "react";
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <div className="hero">
      {/* Hero content */}
      <div className="container text-white">
        <h3 className="text-2xl">Hello, my name is</h3>
        <h1 className="text-5xl md:text-7xl font-semibold -ml-1 py-2">
          Imtiaz Ahmed
        </h1>
        <h2 className="text-3xl md:text-4xl my-1 flex">
          And I'm a{" "}
          <span className="text-[crimson] ml-4 font-medium">
            <Typewriter
              options={{
                strings: [
                  "Developer",
                  "Designer",
                  "Programmer",
                  "Pentester",
                  "Explorer",
                ],
                autoStart: true,
                loop: true,
                delay: 250
              }}
            />
          </span>{" "}
        </h2>
        <button className="bg-[crimson] text-2xl py-3 px-9 mt-5 font-normal rounded-md border-2 border-[crimson] transition duration-300 ease-in-out hover:bg-transparent hover:text-[crimson]">
          Hire me
        </button>
      </div>
    </div>
  );
}

export default Hero;
