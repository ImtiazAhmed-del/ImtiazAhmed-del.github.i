import React from "react";

function NavItem({ navbar, mobile }) {
  return (
    <ul
      className={`flex space-x-4 lg:space-x-8 ${
        mobile &&
        "flex-col justify-center items-center space-x-0 space-y-6 mt-28"
      }`}
    >
      <li>
        <a
          href="#"
          className={`menuItem ${
            navbar ? "hover:text-white" : "hover:text-[crimson]"
          } ${mobile && "text-3xl font-medium"}`}
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#about"
          className={`menuItem ${
            navbar ? "hover:text-white" : "hover:text-[crimson]"
          } ${mobile && "text-3xl font-medium"}`}
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#services"
          className={`menuItem ${
            navbar ? "hover:text-white" : "hover:text-[crimson]"
          } ${mobile && "text-3xl font-medium"}`}
        >
          Services
        </a>
      </li>
      <li>
        <a
          href="#skills"
          className={`menuItem ${
            navbar ? "hover:text-white" : "hover:text-[crimson]"
          } ${mobile && "text-3xl font-medium"}`}
        >
          Skills
        </a>
      </li>
      <li>
        <a
          href="#teams"
          className={`menuItem ${
            navbar ? "hover:text-white" : "hover:text-[crimson]"
          } ${mobile && "text-3xl font-medium"}`}
        >
          Team
        </a>
      </li>
      <li>
        <a
          href="#contact"
          className={`menuItem ${
            navbar ? "hover:text-white" : "hover:text-[crimson]"
          } ${mobile && "text-3xl font-medium"}`}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavItem;
