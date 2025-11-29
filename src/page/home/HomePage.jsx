import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { NavLink } from 'react-router-dom'


// import required modules
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';

import './homePage.css'

import footerbg from '../../assets/footerbg.png';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.png';

const HomePage = () => {
  return (
    <div>
      <main>
        <section  className='h-[100vh] m-[20px] mt-[130px] bg-[url(herobg.jpg)]'
       >
         <Swiper
        effect={'flip'}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='flex items-center justify-center relative'>
              <div className='container mx-auto px-[30px] flex flex-col gap-[10px] items-center justify-center max-w-[540px] w-full h-[540px] rounded-[50%]' 
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
            <SwiperSlide className='flex items-center justify-center relative'>
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
            <SwiperSlide className='flex items-center justify-center relative'>
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

        <section>
          <div className='container mx-auto px-[30px] pt-[40px] flex items-center justify-between gap-[20px]'>
              <div className='max-w-[700px] w-full border-b-1 border-[#DADADA]'>
                <img className='w-full h-[320px] object-cover' src={image1} alt="" />
                <div className='py-[20px] flex flex-col gap-[20px]'>
                  <p className='text-[#3B3937] text-[36px] font-bold'>Двери на заказ</p>
                  <p className='text-[#3B3937] text-[16px] font-[400] max-w-[545px] w-full'>На собственной фабрике мы создаем красивые, безопасные и практически вечные двери, межкомнатные перегородки, стеновые панели и другие решения для вашего интерьера.</p>
                  <NavLink to='Contact' className='text-right text-[#B14101] text-[15px] font-bold'>заказать уникальную дверь</NavLink>
                </div>
              </div>
              <div className='max-w-[700px] w-full border-b-1 border-[#DADADA]'>
                <img className='w-full h-[320px] object-cover' src={image2} alt="" />
                <div className='py-[20px] flex flex-col gap-[20px]'>
                  <p className='text-[#3B3937] text-[36px] font-bold'>3D фрезеровка</p>
                  <p className='text-[#3B3937] text-[16px] font-[400] max-w-[545px] w-full'>Изделия, которые создает фрезерный станок, управляемый компьютером, отличаются высочайшим качеством, абсолютной детализацией и идеальной точностью.</p>
                  <NavLink to='Catalog' className='text-right text-[#B14101] text-[15px] font-bold'>выбрать из каталога</NavLink>
                </div>
              </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default HomePage