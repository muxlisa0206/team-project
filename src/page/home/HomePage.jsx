import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Zoom, Navigation, Pagination } from 'swiper/modules';

import footerbg from '../../assets/footerbg.png';

const HomePage = () => {
  return (
    <div>
      <main>
        <section  className='h-[100vh] m-[20px] mt-[130px] bg-[url(herobg.jpg)]'
       >
         <Swiper
            style={{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff',
            }}
            zoom={true}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[Zoom, Navigation, Pagination]}
            className="mySwiper h-full flex items-center justify-center"
          >
             <SwiperSlide className='flex items-center justify-center'>
              <div className='container mx-auto px-[30px] flex flex-col gap-[10px] items-center justify-center max-w-[540px] w-full h-[540px] rounded-[50%] opacity-50' 
              style={{
                backgroundImage: `url(${footerbg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <h1 className='text-[50px] text-white font-bold'>Classic Wood Stile</h1>
              <p className='text-[#FFD6A8] text-[35px] font-bold'>enterior-exterior</p>
              <p className='text-center w-full text-white text-[20px] font-bold'>Приглашает к сотрудничеству архитекторов, дизайнеров и строителей</p>
              <button className='px-[25px] py-[15px] bg-[#A9845C] shadow-[1px_1px_1px_0px_#00000040] text-white font-bold text-[20px] uppercase mt-[30px]'>подробнее</button>
            </div>
            </SwiperSlide>
             <SwiperSlide className='flex items-center justify-center'>
              <div className='container mx-auto px-[30px] flex flex-col gap-[10px] items-center justify-center max-w-[540px] w-full h-[540px] rounded-[50%] opacity-50' 
              style={{
                backgroundImage: `url(${footerbg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <h1 className='text-[50px] text-white font-bold'>Classic Wood Stile</h1>
              <p className='text-[#FFD6A8] text-[35px] font-bold'>enterior-exterior</p>
              <p className='text-center w-full text-white text-[20px] font-bold'>Приглашает к сотрудничеству архитекторов, дизайнеров и строителей</p>
              <button className='px-[25px] py-[15px] bg-[#A9845C] shadow-[1px_1px_1px_0px_#00000040] text-white font-bold text-[20px] uppercase mt-[30px]'>подробнее</button>
            </div>
            </SwiperSlide>
             <SwiperSlide className='flex items-center justify-center'>
              <div className='container mx-auto px-[30px] flex flex-col gap-[10px] items-center justify-center max-w-[540px] w-full h-[540px] rounded-[50%] opacity-50' 
              style={{
                backgroundImage: `url(${footerbg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <h1 className='text-[50px] text-white font-bold'>Classic Wood Stile</h1>
              <p className='text-[#FFD6A8] text-[35px] font-bold'>enterior-exterior</p>
              <p className='text-center w-full text-white text-[20px] font-bold'>Приглашает к сотрудничеству архитекторов, дизайнеров и строителей</p>
              <button className='px-[25px] py-[15px] bg-[#A9845C] shadow-[1px_1px_1px_0px_#00000040] text-white font-bold text-[20px] uppercase mt-[30px]'>подробнее</button>
            </div>
            </SwiperSlide>
          </Swiper>
        </section>
      </main>
    </div>
  )
}

export default HomePage