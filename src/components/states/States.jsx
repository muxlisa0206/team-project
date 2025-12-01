import React from 'react'

const States = (props) => {
  return (
    <>
        <div className='max-w-[700px] w-full border-b-1 border-[#DADADA]'>
                <img className='w-full h-[320px] object-cover' src={props.img} alt="" />
                <div className='py-[20px] flex flex-col gap-[20px]'>
                  <p className='text-[#3B3937] text-[36px] font-bold'>{props.title}</p>
                  <p className='text-[#3B3937] text-[16px] font-[400] max-w-[545px] w-full'>{props.desc}</p>
                    <div className='flex items-center justify-between'>
                        <NavLink to='State' className='text-right text-[#B14101] text-[15px] font-bold'>Читать далее</NavLink>
                        <p className='font-[400] text-[12px] text-[#3B3937]'>15 октября 2022</p>
                    </div>
                </div>
        </div>
    </>
  )
}

export default States