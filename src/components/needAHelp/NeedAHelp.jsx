

function NeedAHelp() {
  return (
    <>
          <section className='py-[60px]'>
              <div className='container mx-auto flex items-center justify-center'>
                  <div className='md:flex w-full'>
                      <div className='max-w-[700px] w-full h-full'>
                          <img className='w-full object-cover h-[800px]' src="/interriorDoorsPhotos/Rectangle 1716.png" alt="" />
                      </div>
                      <div className='bg-[#F3F0EE] w-full p-20 flex flex-col gap-[50px]'>
                          <h1 className='text-[64px] text-[#3B3937] font-bold leading-20'>Нужна помощь с выбором?</h1>
                          <p className='text-[22px] text-[#3B3937]'>Наши специалисты с радостью помогут Вам, оставьте свой номер телефона!</p>
                          <form className='flex flex-col gap-[25px]' action="">
                              <div className='flex gap-5 '>
                                  <div className='w-full'>
                                      <input required className='max-w-80 w-full h-[60px] pl-5 bg-[white]' placeholder='Как вас зовут?' type="text" />
                                  </div>
                                  <div className='w-full'>
                                      <input required className='max-w-80 w-full h-[60px] pl-5 bg-[white]' placeholder='Ваш телефон' type="tel" />
                                  </div>
                              </div>
                              <span><button className='py-5 px-24 sm:px-35 bg-[#A9845C] font-bold text-[white] whitespace-nowrap cursor-pointer'>Связаться с нами</button></span>
                          </form>
                      </div>
                  </div>
              </div>
          </section>
    </>
  )
}

export default NeedAHelp;