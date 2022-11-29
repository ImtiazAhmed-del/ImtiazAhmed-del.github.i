import React from "react";

function ContactCard({ Icon, title, desc }) {
  return (
    <div className="flex items-center space-x-10">
      {/* Card Left Icon */}
      <Icon className="text-2xl text-[crimson]" />
      {/* Card right Content */}
      <div>
        <h3 className="font-medium text-xl">{title}</h3>
        <p className="text-[#333] text-justify">{desc}</p>
      </div>
    </div>
  );
}

export default ContactCard;
