import React from "react";
import Typewriter from "typewriter-effect";
import CV from "../assets/mycv.pdf";
import Me from "../assets/pic1.jpg";
import SectionHead from "./SectionHead";
function About() {
  return (
    <section className="margin">
      <div className="container">
        {/* Section Title */}
        <SectionHead title="About me" desc="who i am" colorBlack />

        {/* Main about section */}
        <div className="flex flex-col space-y-10 md:flex-row md:space-x-10 lg:space-x-28 items-center mt-12">
          {/* About section left */}
          <div className="max-w-[400px] w-full h-[400px]">
            <img src={Me} alt="imtiaz" className="h-full  rounded-md" />
          </div>
          {/* About section right */}
          <div className="flex-1 font-poppins">
            <h2 className="font-semibold text-[25px] flex">
              I'm Imtiaz and i'm a{" "}
              <span className="text-[crimson] ml-2">
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
                    delay: 250,
                  }}
                />
              </span>
            </h2>
            <p className="py-1.5">System Easily Can Be Compromized</p>
            <a
              href={CV}
              download
              className="inline-block bg-[crimson] text-white text-sm font-medium px-8 py-3 rounded-md border-2 border-[crimson] mt-5 transition duration-300 ease-in-out hover:text-[crimson] hover:bg-transparent"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
