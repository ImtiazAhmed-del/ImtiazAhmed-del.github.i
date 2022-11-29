import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import NavItem from "./NavItem";
function Nav() {
  const [navbar, setNavbar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fixedNavbar = () => {
      if (window.scrollY >= 80) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
    window.addEventListener("scroll", fixedNavbar);
    return () => {
      window.removeEventListener("scroll", fixedNavbar);
    };
  }, []);

  const mobileNav = () => {
    setIsOpen(!isOpen);
    setNavbar(true);
  };
  return (
    <header
      className={`font-poppins text-white fixed z-50 w-full transition duration-400 ease-in  ${
        navbar ? "bg-[crimson] py-5" : "bg-transparent py-8"
      } ${isOpen && "h-screen"}`}
    >
      {/* Nav bar */}
      <nav>
        <div className="container flex justify-between items-center">
          <div className="">
            <a href="#" className="text-4xl font-semibold">
              Imtiaz
              <span className={`${navbar ? "text-white" : "text-[crimson]"}`}>
                Ah.
              </span>
            </a>
          </div>

          <div className="hidden md:inline-block">
            <NavItem navbar={navbar} />
          </div>

          <div className="inline-block md:hidden">
            <button onClick={mobileNav}>
              {isOpen ? (
                <MdClose className="text-3xl font-bold" />
              ) : (
                <FaBars className="text-2xl font-bold" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Navbar Mobile */}
      {isOpen && <NavItem mobile />}
    </header>
  );
}

export default Nav;
