import { FaArrowRightLong, FaSun } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
import { useState } from "react";

const CatalogPage = () => {

  const [dark, setDark] = useState(false)


  function changeMode() {
    document.documentElement.classList.toggle("dark")
    setDark(!dark)
  }
  return (
    <div className="dark:bg-[#3B3937]">
      <main>
        <section>
          <div className="container mx-auto px-3 pl-10 pr-7">
            <div className='pt-55 lg:pt-35 flex gap-5'>
              <Link className='text-[13px] sm:text-[15px] text-[#B1B0AF]' to="/">Главная</Link>
              <p className='text-[15px] text-[#B1B0AF]'>-</p>
              <Link className='text-[13px] sm:text-[15px] text-[#B1B0AF]' to="/catalog">Каталог</Link>
            </div>
            <div className="flex items-center justify-between">
              <h1 className="text-[50px] text-[#3B3937] dark:text-white font-semibold sm:text-[64px]">Каталог</h1>
              <div className="pt-5 lg:pt-10">
                <button onClick={changeMode}>
                  {
                    dark ? <FaSun className='text-yellow-400 text-[24px]' /> : <FaMoon className='text-[24px]' />
                  }
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div className="pt-8 flex flex-col items-center gap-10 sm:grid grid-cols-2 lg:flex lg:flex-row">
                <div className="max-w-[450px] w-full h-[300px] shadow-xl dark:shadow-white/50 dark:rounded-[10px] overflow-hidden xl:max-w-[460px] w-full h-[300px]">
                  <div className="bg-[url('/eshik.jpg')] bg-cover">
                    <div className="pt-10 pl-8">
                      <h2 className="text-[25px] text-[#FFFFFF] font-semibold">Межкомнатные <br /> дверы</h2>
                      <div className="pt-30 pb-8 ">
                        <Link to="/catalog/:id" className="text-[15px] text-[#3B3937] flex items-center justify-center bg-[white] w-9 h-9 rounded-[150px]   hover:shadow-[0_8px_24px_silver] hover:transform hover:translate-y-[-2px] duration-200"><FaArrowRightLong /></Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-[450px] w-full h-[300px] shadow-xl dark:shadow-white/50 dark:rounded-[10px] overflow-hidden xl:max-w-[460px] w-full h-[300px]">
                  <div className="bg-[url('/mebel.png')] bg-cover">
                    <div className="pt-10 pl-8">
                      <h2 className="text-[25px] text-[#FFFFFF] font-semibold">Мебель</h2>
                      <div className="pt-[157px] pb-8">
                        <Link to="/catalog/:id" className="text-[15px] text-[#3B3937] flex items-center justify-center bg-[white] w-9 h-9 rounded-[150px]   hover:shadow-[0_8px_24px_silver] hover:transform hover:translate-y-[-2px] duration-200"><FaArrowRightLong /></Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-[450px] w-full h-[300px] shadow-xl dark:shadow-white/50 dark:rounded-[10px] overflow-hidden xl:max-w-[460px] w-full h-[300px]">
                  <div className="bg-[url('/krovat.png')] bg-cover">
                    <div className="pt-10 pl-8">
                      <h2 className="text-[25px] text-[#FFFFFF] font-semibold">Стеновые панели <br /> «Буазери»</h2>
                      <div className="pt-30 pb-8">
                        <Link to="/catalog/:id" className="text-[15px] text-[#3B3937] flex items-center justify-center bg-[white] w-9 h-9 rounded-[150px] hover:shadow-[0_8px_24px_silver] hover:transform hover:translate-y-[-2px] duration-200"><FaArrowRightLong /></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-10 pb-22 md:flex md:flex-row">
                <div className="max-w-[695px] w-full h-[300px] shadow-xl dark:shadow-white/50 dark:rounded-[10px] overflow-hidden xl:max-w-[710px] w-full h-[300px]">
                  <div className="bg-[url('/zina.png')] bg-cover">
                    <div className="pt-10 pl-8">
                      <h2 className="text-[25px] text-[#FFFFFF] font-semibold">Лестницы</h2>
                      <div className="pt-42 pb-8">
                        <Link to="/catalog/:id" className="text-[15px] text-[#3B3937] flex items-center justify-center bg-[white] w-9 h-9 rounded-[150px] hover:shadow-[0_8px_24px_silver] hover:transform hover:translate-y-[-2px] duration-200"><FaArrowRightLong /></Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-[695px] w-full h-[300px] shadow-xl dark:shadow-white/50 dark:rounded-[10px] overflow-hidden xl:max-w-[710px] w-full h-[300px]">
                  <div className="bg-[url('/fasad.jpg')] bg-cover">
                    <div className="pt-10 pl-8">
                      <h2 className="text-[25px] text-[#FFFFFF] font-semibold">Лестници</h2>
                      <div className="pt-42 pb-8">
                        <Link to="/catalog/:id" className="text-[15px] text-[#3B3937] flex items-center justify-center bg-[white] w-9 h-9 rounded-[150px] hover:shadow-[0_8px_24px_silver] hover:transform hover:translate-y-[-2px] duration-200"><FaArrowRightLong  /></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default CatalogPage