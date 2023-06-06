// import Swiper core and required modules
import { useRef } from 'react';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import QuizCard from '../card/quiz_card';

export default function QuizSlider() {
  const swiperRef = useRef<SwiperRef>(null);
  return (
    <>
      <Swiper
        ref={swiperRef}
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        breakpoints={{
          1440: {
            slidesPerView: 4.5,
          },
          1024: {
            slidesPerView: 3.5,
          },
          768: {
            slidesPerView: 2.25,
          },
          320: {
            slidesPerView: 1.25,
          },
        }}
        grabCursor={true}
        className='h-[13rem]'
      >
        {Array(10)
          .fill(null)
          .map((x) => {
            return (
              <SwiperSlide key={x}>
                <QuizCard
                  label='Mathématiques'
                  file='test.pdf'
                  questions={14}
                  progress={50}
                  progressWidth='180px'
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
      <div className='mt-5 flex items-center space-x-2 text-[1.25rem]'>
        <button
          onClick={() => {
            if (swiperRef.current) {
              swiperRef.current.swiper.slideTo(
                swiperRef.current.swiper.realIndex - 1
              );
            }
          }}
          className='rounded-full bg-white p-3 drop-shadow-md'
        >
          <HiArrowLeft />
        </button>
        <button
          onClick={() => {
            if (swiperRef.current) {
              swiperRef.current.swiper.slideTo(
                swiperRef.current.swiper.realIndex + 1
              );
            }
          }}
          className='rounded-full bg-white p-3 drop-shadow-md'
        >
          <HiArrowRight />
        </button>
      </div>
    </>
  );
}
