import React from 'react'
import logo from '../../assets/logo.svg';
import vk from '../../assets/vk.png';
import pinterest from '../../assets/pinterest.png';
import tg from '../../assets/tg.png';
import bg from '../../assets/footerbg.png';
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <footer
    style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className=' bg-black/50'>
        <div className='container mx-auto px-[10px] py-[50px] flex flex-col items-center text-center sm:text-left sm:flex-row flex-wrap justify-between gap-[50px]'>
          <div className='flex flex-col gap-[15px]'>
            <NavLink to="/"><img src={logo} alt="" /></NavLink>
            <div className='flex flex-col gap-[8px]'>
              <p className='text-white text-[13px] font-[400]'>Фабрика G&G. 2022</p>
              <p className='text-white text-[13px] font-[400]'>© Все права защищены</p>
            </div>
         </div>
         <div className='flex flex-col gap-[25px]'>
          <h1 className='text-white text-[25px] font-bold'>8 (800) 550-81-79</h1>
          <div className='flex flex-col gap-[15px]'>
            <p className='text-white text-[13px] font-[400]'>м. Полежаевская</p>
            <p className='text-white text-[13px] font-[400] max-w-[245px] w-full'>123154, г. Москва, пр-т. Маршала Жукова, д. 52, "Мебельный Центр"</p>
            <p className='text-white text-[13px] font-[400]'>support@sofiadoors.com</p>
          </div>
         </div>
         <div className='flex flex-col gap-[15px]'>
          <p className='text-white text-[13px] font-[400]'>Межкомнатные двери</p>
          <p className='text-white text-[13px] font-[400]'>Мебель</p>
          <p className='text-white text-[13px] font-[400]'>Стеновые панели «Буазери»</p>
          <p className='text-white text-[13px] font-[400]'>Лестницы</p>
          <p className='text-white text-[13px] font-[400]'>Мебельные фасады</p>
         </div>
         <div className='flex flex-col gap-[20px] lg:flex-row items-start justify-between'>
              <div className='flex flex-col gap-[15px]'>
                <NavLink to='Dastavka' className='text-white text-[13px] font-[400]'>Dastavka</NavLink>
                <NavLink to='State' className='text-white text-[13px] font-[400]'>State</NavLink>
                <NavLink to='News' className='text-white text-[13px] font-[400]'>News</NavLink>
                <NavLink to='Contact' className='text-white text-[13px] font-[400]'>Contact</NavLink>
                <p className='text-white text-[13px] font-[400]'>Политика конфиденциальности</p>
              </div>
              <div className='flex items-center'>
                <div className='border-1 bg-[#3B3937] border-[#505050] w-[40px] h-[40px] rounded-[50%] flex justify-center items-center'><img className='w-[30px] h-[30px]' src={vk} alt="" /></div>
                <div className='border-1 bg-[#3B3937] border-[#505050] w-[40px] h-[40px] rounded-[50%] flex justify-center items-center ml-[-10px]'><img className='w-[30px] h-[30px]' src={pinterest} alt="" /></div>
                <div className='border-1 bg-[#3B3937] border-[#505050] w-[40px] h-[40px] rounded-[50%] flex justify-center items-center ml-[-10px]'><img className='w-[30px] h-[30px]' src={tg} alt="" /></div>
              </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer