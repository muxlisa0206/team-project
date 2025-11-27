import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CatalogPage = () => {
  return (
    <div>
      <main>
        <section>
          <div className="container mx-auto px-3">
            <div className='pt-35 flex gap-5'>
              <Link className='text-[13px] sm:text-[15px] text-[#B1B0AF]' to="/">Главная</Link>
              <p className='text-[15px] text-[#B1B0AF]'>-</p>
              <Link className='text-[13px] sm:text-[15px] text-[#B1B0AF]' to="/catalog">Каталог</Link>
            </div>
            <h1 className="text-[50px] text-[#3B3937] font-semibold sm:text-[64px]">Каталог</h1>
            <div className="flex flex-col gap-10">
              <div className="pt-8 flex flex-col items-center gap-10 sm:grid grid-cols-2 lg:flex lg:flex-row">
                <div className="max-w-[380px] w-full h-[300px]">
                  <div className="bg-[url('/eshik.jpg')] bg-cover">
                    <div className="pt-10 pl-8">
                      <h2 className="text-[25px] text-[#FFFFFF] font-semibold">Межкомнатные <br /> дверы</h2>
                      <div className="pt-30 pb-8">
                        <h2 className="text-[15px] text-[#3B3937] flex items-center justify-center bg-[white] w-9 h-9 rounded-[150px]"><FaArrowRightLong /></h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-[380px] w-full h-[300px]">
                  <div className="bg-[url('/mebel.png')] bg-cover">
                    <div className="pt-10 pl-8">
                      <h2 className="text-[25px] text-[#FFFFFF] font-semibold">Мебель</h2>
                      <div className="pt-[157px] pb-8">
                        <h2 className="text-[15px] text-[#3B3937] flex items-center justify-center bg-[white] w-9 h-9 rounded-[150px]"><FaArrowRightLong /></h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-[380px] w-full h-[300px]">
                  <div className="bg-[url('/krovat.png')] bg-cover">
                    <div className="pt-10 pl-8">
                      <h2 className="text-[25px] text-[#FFFFFF] font-semibold">Стеновые панели <br /> «Буазери»</h2>
                      <div className="pt-30 pb-8">
                        <h2 className="text-[15px] text-[#3B3937] flex items-center justify-center bg-[white] w-9 h-9 rounded-[150px]"><FaArrowRightLong /></h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-10 pb-22 md:flex md:flex-row">
                <div className="max-w-[590px] w-full h-[300px]">
                  <div className="bg-[url('/zina.png')] bg-cover">
                    <div className="pt-10 pl-8">
                      <h2 className="text-[25px] text-[#FFFFFF] font-semibold">Лестницы</h2>
                      <div className="pt-42 pb-8">
                        <h2 className="text-[15px] text-[#3B3937] flex items-center justify-center bg-[white] w-9 h-9 rounded-[150px]"><FaArrowRightLong /></h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-[590px] w-full h-[300px]">
                  <div className="bg-[url('/fasad.jpg')] bg-cover">
                    <div className="pt-10 pl-8">
                      <h2 className="text-[25px] text-[#FFFFFF] font-semibold">Лестници</h2>
                      <div className="pt-42 pb-8">
                        <h2 className="text-[15px] text-[#3B3937] flex items-center justify-center bg-[white] w-9 h-9 rounded-[150px]"><FaArrowRightLong /></h2>
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