import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import logo1 from '../assets/media_IndianExpress.webp';
import logo2 from '../assets/media_AmdMirror.webp';
import logo3 from '../assets/media_TOI.webp';

const images = [logo1, logo2, logo3];

export default function ImageSlider() {
  return (
    <div className="relative w-full h-full">
      {/* soft shadows on left/right edges */}
      <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-gray-100 via-transparent to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-gray-100 via-transparent to-transparent z-10 pointer-events-none"></div>

      {/* slider */}
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        className="w-full h-full rounded-2xl overflow-hidden shadow-md"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`slide-${index}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
