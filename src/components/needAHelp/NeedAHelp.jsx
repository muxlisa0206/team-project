

function NeedAHelp() {
  return (
    <>
          <section className='py-[60px]'>
              <div className='container mx-auto px-[30px] flex items-center justify-center'>
                  <div className='flex flex-col lg:flex-row w-full'>
                      <div className='max-w-[700px] w-full h-full'>
                          <img className='w-full object-cover h-[300px] sm:h-[500px] lg:h-[800px]' src="/interriorDoorsPhotos/Rectangle 1716.png" alt="" />
                      </div>
                      <div className='bg-[#F3F0EE] w-full p-[10px] sm:p-20 flex flex-col gap-[15px] sm:gap-[50px]'>
                          <h1 className='text-[38px] sm:text-[64px] text-[#3B3937] font-bold sm:leading-20'>Нужна помощь с выбором?</h1>
                          <p className='text-[22px] text-[#3B3937] line-clamp-2'>Наши специалисты с радостью помогут Вам, оставьте свой номер телефона!</p>
                          <form className='flex flex-col gap-[25px]' action="">
                              <div className='flex flex-col gap-2 lg:flex-row gap-5 '>
                                  <div className='w-full'>
                                      <input required className='w-full h-[60px] pl-5 bg-[white]' placeholder='Как вас зовут?' type="text" />
                                  </div>
                                  <div className='w-full'>
                                      <input required className='w-full h-[60px] pl-5 bg-[white]' placeholder='Ваш телефон' type="tel" />
                                  </div>
                              </div>
                              <span><button className='py-5 px-[20px] w-full sm:px-35 bg-[#A9845C] font-bold text-[white] whitespace-nowrap cursor-pointer'>Связаться с нами</button></span>
                          </form>
                      </div>
                  </div>
              </div>
          </section>
    </>
  )
}

export default NeedAHelp;