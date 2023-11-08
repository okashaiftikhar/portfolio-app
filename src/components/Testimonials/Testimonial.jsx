import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import necessary modules for Swiper
import { Pagination } from "swiper/modules";
import "swiper/css/pagination"; // Import Swiper pagination styles
import profilepic1 from "../../img/profile1.jpg";
import profilepic2 from "../../img/profile2.jpg";
import profilepic3 from "../../img/profile3.jpg";
import profilepic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  // Array of client data
  const clients = [
    {
      img: profilepic1,
      review:
        "lorem ispum dolor sit amet consectetur adipisicing elit. Quod itaque aperiam quos eaque quasi quas exercitationem",
    },
    {
      img: profilepic2,
      review:
        "lorem ispum dolor sit amet consectetur adipisicing elit. Quod itaque aperiam quos eaque quasi quas exercitationem",
    },
    {
      img: profilepic3,
      review:
        "lorem ispum dolor sit amet consectetur adipisicing elit. Quod itaque aperiam quos eaque quasi quas exercitationem",
    },
    {
      img: profilepic4,
      review:
        "lorem ispum dolor sit amet consectetur adipisicing elit. Quod itaque aperiam quos eaque quasi quas exercitationem",
    },
  ];

  return (
    <div className="t-wrapper">
      <div className="t-heading">
        {/* Heading for the testimonials section */}
        <span>Clients always get</span>
        <span>Exceptional Work</span>
        <span>from me...</span>
        {/* Background blur elements */}
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      {/* Swiper component for the testimonials */}
      <Swiper
        modules={[Pagination]} // Include the Pagination module
        slidesPerView={1} // Number of slides per view
        pagination={{ clickable: true }} // Make pagination clickable
      >
        {/* Mapping through the clients array to create Swiper slides */}
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              {/* Display client's image */}
              <img src={client.img} alt="" />
              {/* Display client's review */}
              <span>{client.review}</span>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
