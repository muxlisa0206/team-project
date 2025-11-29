// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

export default function CatalogInterriorDoors({ model, price, photos }) {
    return (
        <>
            <div className='p-5 border border-[#DADADA]'>
                <h3 className='text-[18px]'>{model}</h3>
                <p className='text-[18px] font-bold'>{price}</p>

                <Swiper pagination={true} modules={[Pagination]} className="mySwiper h-72 flex justify-center">

                    <SwiperSlide><div className='flex justify-center'><img src={photos} alt="" /></div></SwiperSlide>
                    <SwiperSlide><div className='flex justify-center'><img src={photos} alt="" /></div></SwiperSlide>
                    <SwiperSlide><div className='flex justify-center'><img src={photos} alt="" /></div></SwiperSlide>
                    <SwiperSlide><div className='flex justify-center'><img src={photos} alt="" /></div></SwiperSlide>

                </Swiper>

                <h4 className='text-right font-bold text-[#B14101]'>КУПИТЬ</h4>

            </div>
        </>
    );
}

