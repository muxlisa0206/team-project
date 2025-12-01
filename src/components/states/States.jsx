import React from 'react'
import { NavLink } from 'react-router-dom'

const States = (props) => {
  return (
    <>
        <div className='max-w-[470px] w-full border-1 border-[#DADADA]'>
                <img className='w-full h-[220px] object-cover' src={props.img} alt="" />
                <div className='p-[25px] flex flex-col gap-[20px]'>
                  <p className='text-[#3B3937] w-full text-[25px] font-bold line-clamp-2'>{props.title}</p>
                  <p className='text-[#3B3937] text-[16px] font-[400] max-w-[545px] w-full line-clamp-4'>{props.desc}</p>
                    <div className='flex items-center mt-[20px] justify-between'>
                        <NavLink to='State' className='text-right text-[#B14101] text-[15px] font-bold'>Читать далее</NavLink>
                        <p className='font-[400] text-[12px] text-[#3B3937]'>15 октября 2022</p>
                    </div>
                </div>
        </div>
    </>
  )
}

export default States