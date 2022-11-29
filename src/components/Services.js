import React from "react";
import { FaChartLine, FaCode, FaPaintBrush } from "react-icons/fa";
import SectionHead from "./SectionHead";
import ServiceCard from "./ServiceCard";
function Services() {
  return (
    <section className="margin bg-black pt-20 pb-16">
      <div className="container">
        {/* Section title */}
        <SectionHead title="My services" desc="what i provide" />

        {/* Main Services content */}
        <div className="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-x-8 mt-14 font-poppins">
          {/* Services Card */}
          <ServiceCard
            Icon={FaPaintBrush}
            title="Web Design"
            desc="Making ideas come alive on the internet."
          />
          <ServiceCard
            Icon={FaChartLine}
            title="Programming"
            desc="First, solve the problem. Then, write the code."
          />
          <ServiceCard
            Icon={FaCode}
            title="Web Security"
            desc="Think before you click."
          />
        </div>
      </div>
    </section>
  );
}

export default Services;
