// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

export default function CatalogInterriorDoors(door) {
    return (
        <>
            <div className='p-5 border border-[#DADADA]'>
                <h3 className='text-[18px]'>{door.model}</h3>
                <p className='text-[18px] font-bold'>{door.price}</p>
                
                    <Swiper pagination={true} modules={[Pagination]} className="mySwiper h-72 flex justify-center">

                        <SwiperSlide><div className='flex justify-center'><img src={door.photos} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div className='flex justify-center'><img src={door.photos} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div className='flex justify-center'><img src={door.photos} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div className='flex justify-center'><img src={door.photos} alt="" /></div></SwiperSlide>

                    </Swiper>

                <h4 className='text-right font-bold text-[#B14101]'>КУПИТЬ</h4>
                
            </div>
        </>
    );
}

