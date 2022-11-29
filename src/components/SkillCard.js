import React from "react";

function SkillCard({ title, perc, percWidth, percWidthRemain }) {
  return (
    <div>
      {/* Skill top title */}
      <div className="flex justify-between items-center mb-1.5">
        <h2 className="text-lg font-medium">{title}</h2>
        <h2 className="text-lg font-medium">{perc}%</h2>
      </div>
      {/* Skill bottom styles bar */}
      <div>
        <div className="flex">
          <div className={`${percWidth} h-1.5 bg-[crimson]`}></div>
          <div className={`${percWidthRemain} h-1.5 bg-[lightgray]`}></div>
        </div>
      </div>
    </div>
  );
}

export default SkillCard;
