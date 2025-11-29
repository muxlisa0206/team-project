import React, { useState } from 'react'

import logo from '../../assets/logo.svg';
import { NavLink } from 'react-router-dom';
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

import bg from '../../assets/footerbg.png';


function Header() {
  const[menu , setMenu] = useState(false)

  function changeMenu(){
    setMenu(!menu);
  }

  return (
   <>
     <header className='bg-[#3B3937] fixed z-99 w-full top-0'>
      <div className='container mx-auto px-[30px] py-[20px] sm:py-[25px] flex items-center justify-between'>
        <NavLink to="/"><img className='w-[64px] h-[36px] sm:w-[106px] sm:h-[60px]' src={logo} alt="" /></NavLink>
        <ul className='hidden lg:flex items-center gap-[30px]'>
            <li>
              <NavLink className='text-white text-[16px] font-normal' to="Contact">Contact</NavLink>
            </li>
            <li>
              <NavLink className='text-white text-[16px] font-normal' to="State">State</NavLink>
            </li>
            <li>
              <NavLink className='text-white text-[16px] font-normal' to="Dastavka">Dastavka</NavLink>
            </li>
        </ul>
        <div className='hidden lg:flex items-center justify-between gap-[50px]'>
        <p className='text-[#FFD6A8] text-[16px] font-[400px]'>
            support@sofiadoors.com
        </p>
        <p className='text-[#FFD6A8] text-[20px] font-bold'>8 (800) 550-81-79</p>
        </div>
        <NavLink to="Catalog" className='bg-[#A9845C] text-white text-[13px] font-bold shadow-[1px_1px_1px_0px_#00000040] border border-white px-[30px] sm:px-[35px] cursor-pointer py-[5px] sm:py-[15px]'>Catalog</NavLink>
        <button onClick={changeMenu} className='text-[55px] text-white cursor-pointer lg:hidden'>
         {
          menu ? <IoClose /> :  <IoIosMenu />
         }
        </button>
      </div>
    </header>

    <div className={`${menu ? "translate-y-0" : "translate-y-[-100%]"} fixed top-[90px] w-full duration-500`}
    style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
    <div className='flex flex-col gap-[20px] w-full py-[50px] bg-black/60'>
    <ul className='flex flex-col items-center gap-[20px]'>
            <li>
              <NavLink className='text-white text-[25px] font-normal' to="Contact">Contact</NavLink>
            </li>
            <li>
              <NavLink className='text-white text-[25px] font-normal' to="State">State</NavLink>
            </li>
            <li>
              <NavLink className='text-white text-[25px] font-normal' to="Dastavka">Dastavka</NavLink>
            </li>
        </ul>
        <div className='flex items-center flex-col gap-[20px]'>
        <p className='text-[#FFD6A8] text-[30px] font-bold'>8 (800) 550-81-79</p>
        <p className='text-[#FFD6A8] text-[16px] font-[400px]'>
            support@sofiadoors.com
        </p>
      </div>
    </div>
    </div>
   </>
  )
}

export default Header