import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const CatalogCard = ({title1 , title2 , src}) => {
  return (
      <div className="max-w-[450px] w-full h-[300px] relative shadow-xl dark:shadow-white/50 dark:rounded-[10px] overflow-hidden xl:max-w-[460px] w-full h-[300px]">
          <div className='bg-cover h-full' style={{
            backgroundImage: `url(${src})`
          }}>
              <div className="pt-10 pl-8">
                  <h2 className="text-[25px] relative z-10 text-[#FFFFFF] font-semibold">{title1} <br /> {title2}</h2>
                  <div className="pt-30 pb-8">
                      <Link to="/catalog/:id"
                          className="absolute z-10 bottom-[30px] text-[15px] text-[#3B3937] flex items-center justify-center bg-[white] w-9 h-9 rounded-full transform rotate-[-45deg] hover:rotate-0 hover:shadow-[0_8px_24px_silver] transition-transform duration-300 ease-linear">
                          <FaArrowRightLong />
                      </Link>
                  </div>
              </div>
          </div>
          <div className='absolute top-0 left-0 h-full w-full bg-black/30'>

          </div>
      </div>
  )
}

export default CatalogCard