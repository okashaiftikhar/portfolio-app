import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import profilepic1 from "../../img/profile1.jpg";
import profilepic2 from "../../img/profile2.jpg";
import profilepic3 from "../../img/profile3.jpg";
import profilepic4 from "../../img/profile4.jpg";

const Testimonial = () => {
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
        <span>Clients always get</span>
        <span>Exceptional Work</span>
        <span>from me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      {/* slider */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={client.img} alt="" />
              <span>{client.review}</span>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
