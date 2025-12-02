import { FaArrowRightLong, FaSun } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
import CatalogCard from "../../components/catalog/CatalogCard";

const CatalogPage = () => {
  return (
    <div className="dark:bg-[#3B3937]">
      <main>
        <section>
          <div className="container mx-auto px-3 pl-10 pr-7">
            <div className='pt-30 sm:pt-36 md:pt-40 lg:pt-45  lg:pt-35 flex gap-5'>
              <Link className='text-[13px] sm:text-[15px] text-[#B1B0AF]' to="/">Главная</Link>
              <p className='text-[15px] text-[#B1B0AF]'>-</p>
              <Link className='text-[13px] sm:text-[15px] text-[#B1B0AF]' to="/catalog">Каталог</Link>
            </div>
            <div className="flex items-center justify-between">
              <h1 className="text-[50px] text-[#3B3937] dark:text-white font-semibold sm:text-[64px]">Каталог</h1>
              <div className="pt-5 lg:pt-10">
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div className="pt-8 flex flex-col items-center gap-10 sm:grid grid-cols-2 lg:flex lg:flex-row">
                <CatalogCard title1={"Межкомнатные"} title2={"двери"} src={"/eshik2.png"} />
                <CatalogCard title1={"Мебель"} title2={""} src={"/mebel.png"} />
                <CatalogCard title1={"Стеновые панели"} title2={"«Буазери»"} src={"/krovat.png"} />
              </div>
              <div className="flex flex-col items-center gap-10 pb-22 md:flex md:flex-row">
                <div className="max-w-[695px] w-full h-[300px] relative shadow-xl dark:shadow-white/50 dark:rounded-[10px] overflow-hidden xl:max-w-[710px] w-full h-[300px]">
                  <div className="bg-[url('/zina.png')] h-full bg-cover">
                    <div className="pt-10 pl-8">
                      <h2 className="relative z-10 text-[25px] text-[#FFFFFF] font-semibold">Лестницы</h2>
                      <div className="pt-42 pb-8">
                        <Link to="/catalog/:id"
                          className="absolute z-10 text-[15px] text-[#3B3937] flex items-center justify-center bg-[white] w-9 h-9 rounded-full transform rotate-[-45deg] hover:rotate-0 hover:shadow-[0_8px_24px_silver] transition-transform duration-300 ease-linear">
                          <FaArrowRightLong />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className='absolute top-0 left-0 h-full w-full bg-black/30'>

                  </div>
                </div>
                <div className="max-w-[695px] w-full h-[300px] relative shadow-xl dark:shadow-white/50 dark:rounded-[10px] overflow-hidden xl:max-w-[710px] w-full h-[300px]">
                  <div className="bg-[url('/stul.png')] h-full bg-cover">
                    <div className="pt-10 pl-8">
                      <h2 className="relative z-10 text-[25px] text-[#FFFFFF] font-semibold">Лестницы</h2>
                      <div className="pt-42 pb-8">
                        <Link to="/catalog/:id"
                          className="absolute z-10 text-[15px] text-[#3B3937] flex items-center justify-center bg-[white] w-9 h-9 rounded-full transform rotate-[-45deg] hover:rotate-0 hover:shadow-[0_8px_24px_silver] transition-transform duration-300 ease-linear">
                          <FaArrowRightLong />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className='absolute top-0 left-0 h-full w-full bg-black/30'>

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