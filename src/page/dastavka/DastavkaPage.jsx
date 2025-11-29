import React, { useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa6';
import { Link } from "react-router-dom";

const DastavkaPage = () => {
  const [dark, setDark] = useState(false)
  
  
    function changeMode() {
      document.documentElement.classList.toggle("dark")
      setDark(!dark)
    }
  return (
    <div className='dark:bg-[#3B3937]'>
      <main>
        <section className='px-2 xl:px-0'>
          <div className="container mx-auto pl-10 pr-7">
            <div className='pt-35 flex gap-5'>
              <Link className='text-[13px] sm:text-[15px] text-[#B1B0AF]' to="/">Главная</Link>
              <p className='text-[15px] text-[#B1B0AF]'>-</p>
              <Link className='text-[13px] sm:text-[15px] text-[#B1B0AF]' to="/catalog">Каталог</Link>
              <p className='text-[15px] text-[#B1B0AF]'>-</p>
              <Link className='text-[13px] sm:text-[15px] text-[#B1B0AF]' to="/">Доставка и оплата</Link>
            </div>
            <div className="flex items-center justify-between">
              <h1 className="text-[50px] text-[#3B3937] dark:text-white font-semibold sm:text-[64px]">Доставка и оплата</h1>
              <div className="pt-5 lg:pt-10">
                <button onClick={changeMode}>
                  {
                    dark ? <FaSun className='text-yellow-400 text-[24px]' /> : <FaMoon className='text-[24px]' />
                  }
                </button>
              </div>
            </div>
            <div className='pt-9'>
              <img className='shadow-xl dark:shadow-white/50 dark:rounded-[10px] overflow-hidden sm:max-w-[820px] w-full h-[450px]' src="./man.jpg" alt="" />
            </div>
            <div className='pl-5'>
              <p className='text-[20px] text-[#3B3937] dark:text-[silver] pt-13'>Срок пошива комплекта –  10-15 рабочих дней. Доставка от 2-х дней, в зависимости от <br /> региона. Мы работаем с Boxberry, СDEK и Почтой России. Стоимость доставки зависит <br /> от региона и рассчитывается индивидуально.</p>
              <p className='text-[22px] text-[#3B3937] dark:text-[silver] pt-10'>Вы можете выбрать несколько способов оплаты:</p>
              <div className='pb-23'>
                <p className='text-[16px] text-[#3B3937] dark:text-[silver] pt-5'>наличными или кредитной картой курьеру (только для курьерской доставки, при условии предоплаты не <br /> менее 30% от суммы заказа);</p>
                <p className='text-[16px] text-[#3B3937] dark:text-[silver] pt-3'>кредитной картой на сайте;.</p>
                <p className='text-[16px] text-[#3B3937] dark:text-[silver] pt-3'>банковским переводом.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default DastavkaPage