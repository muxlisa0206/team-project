// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

export default function CatalogInterriorDoors({ id, model, price, photos }) {
    return (
        <>
            <div className='p-5 border border-[#DADADA] rounded'>
                <h3 className='text-[18px]'>{model}</h3>
                <p className='text-[18px] font-bold pb-2'>{price}</p>

                <Link to={"/CatalogDoors/Single"}>
                    <Swiper pagination={true} modules={[Pagination]} className="mySwiper h-72 flex justify-center">

                        <SwiperSlide><div className='flex justify-center'><img src={photos} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div className='flex justify-center'><img src={photos} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div className='flex justify-center'><img src={photos} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div className='flex justify-center'><img src={photos} alt="" /></div></SwiperSlide>

                    </Swiper>
                </Link>

                <Link to={`/CatalogDoors/${id}`} className='flex p-2 justify-end font-bold text-[#B14101]'>КУПИТЬ</Link>

            </div>
        </>
    );
}

