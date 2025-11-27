import React from 'react'

import logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className='bg-[#3B3937] fixed z-10 w-full top-0'>
      <div className='container mx-auto px-[30px] py-[25px] flex items-center justify-between'>
        <NavLink to="/"><img src={logo} alt="" /></NavLink>
        <ul className='flex items-center gap-[30px]'>
            <li>
              <NavLink className='text-white text-[16px] font-normal' to="Contact">Contact</NavLink>
            </li>
            <li>
              <NavLink className='text-white text-[16px] font-normal' to="State">State</NavLink>
            </li>
            <li>
              <NavLink className='text-white text-[16px] font-normal' to="Dastavka"><Dastavka></Dastavka></NavLink>
            </li>
        </ul>
        <p className='text-[#FFD6A8] text-[16px] font-[400px]'>
            support@sofiadoors.com
          </p>
          <p className='text-[#FFD6A8] text-[20px] font-bold'>8 (800) 550-81-79</p>
        <NavLink to="Catalog" className='bg-[#FFD6A8] text-white text-[13px] font-bold shadow-[1px_1px_1px_0px_#00000040] border border-white px-[35px] cursor-pointer py-[15px]'>Catalog</NavLink>
      </div>
    </header>
  )
}

export default Header