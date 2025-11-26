import React from 'react'
import logo from '../../assets/logo.png';
import vk from '../../assets/vk.png';
import pinterest from '../../assets/pinterest.png';
import tg from '../../assets/tg.png';
import bg from '../../assets/footerbg.png';
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <footer className='bg-[#3B3937]'>
      <div className='container mx-auto px-[20px] flex justify-between gap-[10px]'>
        <div className='box flex items-center justify-between gap-[10px] px-[30px] pb-[50px] pt-[30px] max-w-[660px] w-full '
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <div className='flex flex-col gap-[15px] justify-center'>
            <NavLink to="/"><img src={logo} alt="" /></NavLink>
            <p className='font-[400] text-[13px] text-white'>Фабрика G&G. 2022</p>
            <p className='font-[400] text-[13px] text-white'>© Все права защищены</p>
          </div>
          <div className='flex flex-col gap-[20px] justify-center'>
            <p className='text-white text-[25px] font-[700]'>8 (800) 550-81-79</p>
            <div className='flex flex-col gap-[10px]'>
              <p className='text-white text-[13px] font-[400]'>м. Полежаевская</p>
              <p className='max-w-[245px] w-full text-white text-[13px] font-[400]'>123154, г. Москва, пр-т. Маршала Жукова, д. 52, "Мебельный Центр"</p>
              <p className='text-white text-[13px] font-[400]'>support@sofiadoors.com</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-[15px] mt-[20px]  pb-[50px] text-center max-w-[550px] w-full'>
          <p className='text-white text-[13px] font-[400]'>Межкомнатные двери</p>          <p className='text-white text-[13px] font-[400]'>Межкомнатные двери</p>
          <p className='text-white text-[13px] font-[400]'>Мебель</p>
          <p className='text-white text-[13px] font-[400]'>Стеновые панели «Буазери»</p>
          <p className='text-white text-[13px] font-[400]'>Лестницы</p>
          <p className='text-white text-[13px] font-[400]'>Мебельные фасады</p>
        </div>
        <div className='box flex flex-col gap-[35px] px-[30px] pb-[50px] pt-[50px] max-w-[660px] w-full '
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
            <div className='flex justify-between'>
              <div className='flex flex-col gap-[13px]'>
                <NavLink className="text-white text-[13px] font-[400]" to="Contact">Contact</NavLink>
                <NavLink className="text-white text-[13px] font-[400]" to="State">State</NavLink>
              </div>
              <div className='flex items-center'>
                <div className='w-[50px] h-[50px] rounded-[50%] border-[#505050] border-1 bg-[#3B3937] flex items-center justify-center'><img src={vk} alt="" /></div>
                <div className='w-[50px] h-[50px] rounded-[50%] border-[#505050] border-1 bg-[#3B3937] flex items-center justify-center'><img src={pinterest} alt="" /></div>
                <div className='w-[50px] h-[50px] rounded-[50%] border-[#505050] border-1 bg-[#3B3937] flex items-center justify-center'><img src={tg} alt="" /></div>
              </div>
            </div>
            <p className="text-white text-[13px] font-[400]">Политика конфиденциальности</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer