import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import ContactCard from "./ContactCard";
import SectionHead from "./SectionHead";
function Contact() {
  return (
    <section className="margin mb-14 md:mb-20 lg:mb-28">
      <div className="container">
        {/* Section Title */}
        <SectionHead title="Contact me" desc="get in touch" colorBlack />

        {/* Main section content */}
        <div className="font-poppins mt-10 grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-8 md:gap-y-0">
          {/* Contact left content */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold">Get in Touch</h2>
            <div className="mt-4 space-y-4">
              {/* Contact cards */}
              <ContactCard Icon={FaUser} title="Name" desc="Imtiaz Ahmed" />
              <ContactCard
                Icon={FaMapMarkerAlt}
                title="Address"
                desc="Shewrapara, Mirpur,Dhaka"
              />
              <ContactCard
                Icon={FaEnvelope}
                title="Email"
                desc="pa256518@gmail.com"
              />
            </div>
          </div>

          {/* Contact right content */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold">Message me</h2>

             {/* Contact Form */}

            <form className="flex flex-col gap-4 mt-4">
              <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-y-0 md:gap-x-4">
                <input type="text" placeholder="Name" required />
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Email"
                  required
                />
              </div>
              <input type="text" placeholder="Subject" required />
              <textarea
                rows="10"
                placeholder="Message..."
                className="max-h-[100px]"
                required
              ></textarea>
              <button
                type="submit"
                className="text-[#fff] w-[160px] h-11 outline-none text-lg font-medium rounded-md bg-[crimson] border-2 border-[crimson] transition duration-300 ease-out hover:text-[crimson] hover:bg-transparent"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
