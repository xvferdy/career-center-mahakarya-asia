"use client";

import Image from "next/image";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {
  Pagination,
  EffectCoverflow,
  Navigation,
  Autoplay,
} from "swiper/modules";

export default function Testimonials({ testimonials }) {
  return (
    <>
      <Swiper
        className="testimonials__container"
        modules={[Pagination, Autoplay, Navigation]}
        spaceBetween={32}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {testimonials.map((testimoni, idx) => (
          <SwiperSlide key={idx}>
            <div className="cardTestimoni">
              <p className="cardTestimoni__testi body-16-reg">
                {testimoni.testi}
              </p>
              <div className="cardTestimoni__author">
                <Image
                  className="cardTestimoni__author-avatar"
                  src={testimoni.avatar}
                  height={48}
                  width={48}
                  alt="avatar"
                />

                <div className="cardTestimoni__author-copy">
                  <p className="cardTestimoni__author-copy-name body-16-bold">
                    {testimoni.name}
                  </p>
                  <p className="cardTestimoni__author-copy-company body-12-bold">
                    {testimoni.company}
                  </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="62"
                  height="62"
                  viewBox="0 0 62 62"
                  fill="none"
                >
                  <path
                    d="M56.1875 31H46.5V23.25C46.5 18.9754 49.9754 15.5 54.25 15.5H55.2188C56.8293 15.5 58.125 14.2043 58.125 12.5938V6.78125C58.125 5.1707 56.8293 3.875 55.2188 3.875H54.25C43.5453 3.875 34.875 12.5453 34.875 23.25V52.3125C34.875 55.5215 37.4785 58.125 40.6875 58.125H56.1875C59.3965 58.125 62 55.5215 62 52.3125V36.8125C62 33.6035 59.3965 31 56.1875 31ZM21.3125 31H11.625V23.25C11.625 18.9754 15.1004 15.5 19.375 15.5H20.3438C21.9543 15.5 23.25 14.2043 23.25 12.5938V6.78125C23.25 5.1707 21.9543 3.875 20.3438 3.875H19.375C8.67031 3.875 0 12.5453 0 23.25V52.3125C0 55.5215 2.60352 58.125 5.8125 58.125H21.3125C24.5215 58.125 27.125 55.5215 27.125 52.3125V36.8125C27.125 33.6035 24.5215 31 21.3125 31Z"
                    fill="#e8e6e1"
                  />
                </svg>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
