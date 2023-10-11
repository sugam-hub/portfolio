import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    avatar: AVTR1,
    name: "David Warner",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repellat cumque voluptates unde a architecto, alias, incidunt nihil molestiae commodi cum corrupti enim numquam voluptatibus, nulla magnam sed assumenda quasi?",
  },
  {
    id: 2,
    avatar: AVTR2,
    name: "David Warner",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repellat cumque voluptates unde a architecto, alias, incidunt nihil molestiae commodi cum corrupti enim numquam voluptatibus, nulla magnam sed assumenda quasi?",
  },
  {
    id: 3,
    avatar: AVTR3,
    name: "David Warner",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repellat cumque voluptates unde a architecto, alias, incidunt nihil molestiae commodi cum corrupti enim numquam voluptatibus, nulla magnam sed assumenda quasi?",
  },
  {
    id: 4,
    avatar: AVTR4,
    name: "David Warner",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repellat cumque voluptates unde a architecto, alias, incidunt nihil molestiae commodi cum corrupti enim numquam voluptatibus, nulla magnam sed assumenda quasi?",
  },
];

const Testimonials = () => {
  return (
    <>
      <section id="testimonials">
        <h5>Review from clients</h5>
        <h2>Testimonials</h2>

        <Swiper
          className="container testimonials__container"
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {data.map(({ avatar, name, review, id }) => {
            return (
              <SwiperSlide key={id} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt={name} />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};

export default Testimonials;
