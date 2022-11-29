import React from "react";

function SectionHead({ title, desc, colorBlack }) {
  return (
    <div className="grid place-items-center font-ubuntu">
      {/* Section title */}
      <h2
        className={`font-semibold text-4xl mb-1 ${
          colorBlack ? "text-black" : "text-white"
        }`}
      >
        {title}
      </h2>

      {/* Section before/after style */}
      <div className="flex items-center space-x-2">
        <div
          className={`w-9 h-[3px] mt-1 ${colorBlack ? "bg-black" : "bg-white"}`}
        ></div>
        <p className={`text-[crimson] text-lg font-semibold `}>{desc}</p>
        <div
          className={`w-9 h-[3px] mt-1 ${colorBlack ? "bg-black" : "bg-white"}`}
        ></div>
      </div>
      <div></div>
    </div>
  );
}

export default SectionHead;
