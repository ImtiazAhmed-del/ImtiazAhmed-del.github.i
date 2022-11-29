import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Pic1 from "../assets/pic1.jpg";
import Pic3 from "../assets/pic2.jpg";
import Pic2 from "../assets/pic3.jpg";
import SectionHead from "./SectionHead";
import TeamCard from "./TeamCard";
function Team() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <section className="margin bg-black pt-20 pb-16">
      <div className="container">
        {/* Section title */}
        <SectionHead title="My team" desc="who with me" />

        {/* Main team content */}
        <div className="text-white font-poppins mt-10 px-4 md:px-0">
          {/* Team Carousel */}
          <Slider {...settings}>
            <div>
              <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-4 lg:grid-cols-3">
                <TeamCard
                  image={Pic1}
                  name="Mahin Ahmed"
                  desc="If You Want You Can"
                />
                <TeamCard
                  image={Pic2}
                  name="Shreya Das"
                  desc="Nerd Today Boss Tomorrow"
                />
                <TeamCard
                  image={Pic3}
                  name="Syed Asif Rahman"
                  desc="2 step back,then think"
                />
              </div>
            </div>

            <div>
              <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-4 lg:grid-cols-3">
                {/* Team carousel card */}
                <TeamCard
                  image={Pic3}
                  name="Syed Asif Rahman"
                  desc="2 step back,then think"
                />
                <TeamCard
                  image={Pic1}
                  name="Mahin Ahmed"
                  desc="If You Want You Can"
                />
                <TeamCard
                  image={Pic2}
                  name="Shreya Das"
                  desc="Nerd Today Boss Tomorrow"
                />
              </div>
            </div>
            <div>
              <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-4 lg:grid-cols-3">
                <TeamCard
                  image={Pic2}
                  name="Shreya Das"
                  desc="Nerd Today Boss Tomorrow"
                />
                <TeamCard
                  image={Pic3}
                  name="Syed Asif Rahman"
                  desc="2 step back,then think"
                />
                <TeamCard
                  image={Pic1}
                  name="Mahin Ahmed"
                  desc="If You Want You Can"
                />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Team;
