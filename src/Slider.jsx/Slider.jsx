import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import logo from '../assets/Anuradha_S.webp';
import logo2 from '../assets/Smitha-lath.png';
import logo3 from '../assets/Deepak_Jain.webp';
import googleLogo from '../assets/devicon_google.svg';

const testimonials = [
  {
    id: 1,
    name: 'Smita Lath',
    age: 53,
    yogaDays: 93,
    rating: 4.5,
    img: logo,
    feedback:
      "Yoga has become a natural part of my life. I've lost 2 kg and am aiming to lose 3 more, confident that I will achieve it with continued effort. The changes in my nutrition have also been significant. Habuild has helped me change my lifestyle, which seem difficult earlier.",
  },
  {
    id: 2,
    name: 'Anuradha S',
    age: 59,
    yogaDays: 307,
    rating: 4.8,
    img: logo2,
    feedback:
      'I used to struggle with breathlessness on hikes, needing to stop halfway, or use a stick for support. This year, after practising yoga for about 300 days continuously, I hiked with ease and comfort. Happy to inform you that continuous Yoga can do wonders! Thank you.',
  },
  {
    id: 3,
    name: 'Deepak Jain',
    age: 47,
    yogaDays: 281,
    rating: 4.7,
    img: logo3,
    feedback:
      'After a month of preparation, I completed the TCS World 10K marathon in 1 hour 18 minutes without any breathlessness. My stamina & strength have greatly improved due to daily yoga practice. After the marathon, my breath and body became normal within a few minutes without any signs of fatigue.',
  },
];

export default function TestimonialSlider() {
  return (
    <div className="w-full flex justify-center py-10">
      <div className="w-[350px] sm:w-[400px] md:w-[460px]">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          className="rounded-2xl"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 min-h-[360px] flex flex-col justify-between">
                {/* Top Section */}
                <div>
                  <div className="flex justify-between items-start mb-3">
                    {/* Left: Profile */}
                    <div className="flex items-center">
                      <img
                        src={t.img}
                        alt={t.name}
                        className="w-16 h-16 rounded-md object-cover mr-3"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-800 text-[16px]">{t.name}</h3>
                        <p className="text-gray-500 text-sm">
                          {t.age} years | {t.yogaDays} Yoga Days
                        </p>
                      </div>
                    </div>

                    {/* Right: Rating */}
                    <div className="flex flex-col items-end">
                      <div className="flex items-center">
                        <span className="text-yellow-500 text-[17px] font-semibold mr-1">
                          {t.rating}
                        </span>
                        <span className="text-yellow-500 text-[17px] font-semibold">★</span>
                      </div>
                      <img src={googleLogo} alt="Google" className="w-5 h-5 mt-1" />
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-200 my-3"></div>

                  {/* Feedback */}
                  <p className="text-gray-900 text-[18px] leading-8 font-semibold">
                    {t.feedback}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
