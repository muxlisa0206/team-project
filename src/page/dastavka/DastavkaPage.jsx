import React from 'react'

const DastavkaPage = () => {
  return (
    <div>
      <main>
        <section className='px-2 xl:px-0'>
          <div className="container mx-auto">
            <h1 className="pt-35 text-[40px] text-[#3B3937] font-semibold sm:text-[50px] md:text-[56px] lg:text-[64px]">Доставка и оплата</h1>
            <div className='pt-9'>
              <img className='sm:max-w-[820px] w-full h-[450px]' src="./man.jpg" alt="" />
            </div>
            <div className='pl-5'>
              <p className='text-[20px] text-[#3B3937] pt-13'>Срок пошива комплекта –  10-15 рабочих дней. Доставка от 2-х дней, в зависимости от <br /> региона. Мы работаем с Boxberry, СDEK и Почтой России. Стоимость доставки зависит <br /> от региона и рассчитывается индивидуально.</p>
              <p className='text-[22px] text-[#3B3937] pt-10'>Вы можете выбрать несколько способов оплаты:</p>
              <div className='pb-23'>
                <p className='text-[16px] text-[#3B3937] pt-5'>наличными или кредитной картой курьеру (только для курьерской доставки, при условии предоплаты не <br /> менее 30% от суммы заказа);</p>
                <p className='text-[16px] text-[#3B3937] pt-3'>кредитной картой на сайте;.</p>
                <p className='text-[16px] text-[#3B3937] pt-3'>банковским переводом.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default DastavkaPage