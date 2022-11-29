import React from "react";

import { FaAngleUp } from "react-icons/fa";
function ScrollUp() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      smooth
      className="fixed bottom-8 right-8 z-50 h-11 w-[42px] bg-[crimson] grid place-items-center text-white cursor-pointer rounded-md transition duration-300 ease-out hover:bg-[#ff0f3f]"
      onClick={scrollToTop}
    >
      <FaAngleUp className="text-2xl" />
    </div>
  );
}

export default ScrollUp;
