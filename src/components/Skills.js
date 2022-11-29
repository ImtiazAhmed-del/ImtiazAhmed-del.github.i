import React from "react";
import SectionHead from "./SectionHead";
import SkillCard from "./SkillCard";

function Skills() {
  return (
    <section className="margin">
      <div className="container">
        {/* Section title */}
        <SectionHead title="My skills" desc="what i know" colorBlack />

        {/* Main Skills content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-x-10 lg:gap-x-20 font-poppins mt-12 md:items-center">
          {/* Skils left content */}
          <div>
            <h2 className="text-xl font-semibold mb-3">
              My creative skills & experiences.
            </h2>
            <p className="text-justify">
              Know how and when to say no. Don't share protected personal
              information with strangers.
            </p>
            <button className="bg-[crimson] text-white text-lg font-medium py-2 px-4 mt-5 rounded-md border-2 border-[crimson] transition duration-300 ease-out hover:text-[crimson] hover:bg-transparent">
              Read more
            </button>
          </div>
          {/* Skills right content */}
          <div className="flex flex-col space-y-4">
            {/* Skills Card */}
            <SkillCard
              title="HTML & CSS"
              perc="90"
              percWidth="w-[90%]"
              percWidthRemain="w-[10%]"
            />

            <SkillCard
              title="JavaScript"
              perc="80"
              percWidth="w-[80%]"
              percWidthRemain="w-[20%]"
            />

            <SkillCard
              title="React"
              perc="70"
              percWidth="w-[70%]"
              percWidthRemain="w-[30%]"
            />

            <SkillCard
              title="Tailwind Css"
              perc="80"
              percWidth="w-[80%]"
              percWidthRemain="w-[20%]"
            />

            <SkillCard
              title="C"
              perc="80"
              percWidth="w-[80%]"
              percWidthRemain="w-[20%]"
            />

            <SkillCard
              title="Python"
              perc="70"
              percWidth="w-[70%]"
              percWidthRemain="w-[30%]"
            />

            <SkillCard
              title="Pentesting"
              perc="60"
              percWidth="w-[60%]"
              percWidthRemain="w-[40%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
