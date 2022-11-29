import React from "react";

function ServiceCard({ Icon, title, desc }) {
  return (
    <article className="flex flex-col justify-center items-center space-y-3 bg-[#222] py-12 px-6 rounded-md cursor-pointer transition duration-300 ease-out group hover:bg-[crimson] hover:scale-105">
      {/* Service top icon */}
      <Icon className="text-5xl text-[crimson] group-hover:text-white" />
      {/* Service bottom icon */}
      <h1 className="text-2xl font-medium">{title}</h1>
      <p className="text-center">{desc}</p>
    </article>
  );
}

export default ServiceCard;
