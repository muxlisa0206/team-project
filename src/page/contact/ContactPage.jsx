import React from 'react'

const ContactPage = () => {
  return (
    <>
      <main className='pt-30 py-[90px]'>
        <section>
          <div className="container mx-auto">
            <ul className='flex  gap-5'>
              <li>
                <a className='text-[#B1B0AF] text-[12px] ' href="/">Главная</a>
              </li>

              <li>
                -
              </li>

              <li>
                <a className='text-[#B1B0AF] text-[12px] ' href="">Каталог</a>
              </li>

              <li>
                -
              </li>

              <li>
                <a className='text-[#B1B0AF] text-[12px] ' href="">Межкомнатные двери</a>
              </li>
            </ul>

            <div className="grid grid-cols-2 items-center px-5 mt-10">


              <div className="">
                <h1 className='text-[#3B3937] text-6xl font-bold pl-5 '>
                  Контакты
                </h1>

                <div className=" bg-[#F3F0EE] p-16 mt-8 max-w-[510px] w-full">
                  <p className=' text-[13px]'>
                    Адрес:
                  </p>
                  <h3 className='text-[#3B3937] text-[18px] font-medium '>
                    м. Полежаевская
                  </h3>

                  <h2 className='text-[#3B3937] text-[18px] font-medium '>
                    123154, г. Москва, пр-т. Маршала Жукова, <br />
                    д. 52, "Мебельный Центр"
                  </h2>
                  <br />

                  <p className=' text-[13px] text-[#3B3937]'>
                    Режим работы:
                  </p>
                  <h2 className='text-[#3B3937] text-[18px] font-medium'>
                    ВТ - СБ 10:00 - 19:00    ВС, ПН - Выходные
                  </h2>
                  <br />


                  <p className=' text-[13px]'>
                    Телефон
                  </p>
                  <h1 className='text-[#B14101] font-bold  '>
                    8 (900) 000-00-00
                    <span className='mx-3'></span>
                    8 (900) 000-00-00
                  </h1>
                  <br />

                  <p className=' text-[13px] text-[#3B3937]'>
                    Почта и социальные сети
                  </p>

                  <h1 className='text-[#B14101] font-bold  '>
                    support@sofiadoors.com
                  </h1>



                  <div className="flex items-center mt-9">
                    <img className="z-30 -ml-0" src="contactImg/contact-wk.png" alt="" />
                    <img className="z-20 -ml-2" src="contactImg/contact-p.png" alt="" />
                    <img className="z-10 -ml-2" src="contactImg/contact-tg.png" alt="" />
                  </div>



                </div>
              </div>


                <div className="w-full max-w-[700px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2523.4478036367773!2d69.26924483256072!3d41.2239042649056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae61bf92c68405%3A0x13b3bd3727f6fbc7!2sAlfa%20Mebel!5e0!3m2!1sru!2s!4v1764180948111!5m2!1sru!2s"
                    className="w-full h-[600px] border-0"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
             

            </div>
          </div>
        </section>
        <section className='bg-[#F3F0EE] mt-20 py-[90px] pt-10'>
          <div className="container mx-auto grid grid-cols-2 items-center">
            
            <div className="p-10">
              <h1 className='text-[#3B3937] text-6xl font-bold'>
                Связаться <br />
                 с нами
              </h1>

              <p className='text-[#3B3937] text-2xl font-medium mt-6'>
                Наши специалисты с радостью <br />
                 помогут Вам, оставьте свой <br />
                  номер телефона!
              </p>
            </div>


            <div className=" ">
              <div className="flex gap-5">
                <input className='p-5 max-w-[290px] w-full    bg-white outline-none' type="text" placeholder='Как вас зовут?' />
                <input className='p-5 max-w-[290px] w-full   bg-white outline-none' type="tel" placeholder='Ваш телефон' />


              </div>
              <div className="mt-5">
                <textarea
                  className="p-5 bg-white outline-none max-w-[600px] w-full h-[160px] resize-none"
                  placeholder="Ваш комментарий"
                />
              </div>

              <button className='bg-[#A9845C] p-4 rounded-[5px] mt-[40px] text-white cursor-pointer'>
                отправить сообщение
              </button>
            </div>


            


           



          </div>
        </section>
      </main>
    </>
  )
}

export default ContactPage