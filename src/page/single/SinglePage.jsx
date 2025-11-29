import React from 'react'
import { Link } from 'react-router-dom'
import NeedAHelp from '../../components/needAHelp/NeedAHelp'

function SinglePage() {
  return (
    <>
      <div className='container mx-auto px-10 mt-30 mb-80'>
        <div>
          <Link className='text-[#B1B0AF] duration-200 hover:text-[black] text-[14px]' to={"/"}>Главная -</Link>
          <Link className='text-[#B1B0AF] duration-200 hover:text-[black] text-[14px]' to={"/Catalog/:catalogId"}> Каталог -</Link>
          <Link className='text-[#B1B0AF] duration-200 hover:text-[black] text-[14px]' to={""}> Межкомнатные двери</Link>
        </div>
        <div className='flex items-start gap-45'>
          <div className='pt-5 max-w-[510px] h-[540px] w-full'>
            <div className='cursor-pointer'>
              <img src="/single/1_1.png" alt="" />
            </div>
            <div className='flex items-center justify-between gap-2 pt-3'>
              <div className='w-full cursor-pointer'>
                <img className='w-full h-[90px]' src="../Public/single/1_2.png" alt="" />
              </div>
              <div className='w-full cursor-pointer'>
                <img className='w-full h-[90px]' src="../Public/single/1_4.png" alt="" />
              </div>
              <div className='w-full cursor-pointer'>
                <img className='w-full h-[90px]' src="../Public/single/1_4.png" alt="" />
              </div>
              <div className='w-full cursor-pointer'>
                <img className='w-full h-[90px]' src="../Public/single/1_5.png" alt="" />
              </div>
            </div>
          </div>
          <div>
            <p className='text-[#B1B0AF] text-[14px] pt-3'>Артикул 2535-4773</p>
            <h1 className='font-bold text-[36px] pt-2 tracking-[-2%] leading-[120%]'>Межкомнатная дверь Sofia Original <br /> Дуб темный, шпон 04.01</h1>
            <div className='pt-[23px]'>
              <p className='text-[18px] font-medium'>Кортекс</p>
              <div className='flex items-center gap-2 pt-2'>
                <div className='bg-[#DADADA]/20 cursor-pointer hover:border-gray-500 border border-gray-300 rounded-[50%] w-8 h-8'>

                </div>
                <div className='bg-[#DADADA]/20 cursor-pointer hover:border-gray-500 border border-gray-300 rounded-[50%] w-8 h-8'>

                </div>
                <div className='bg-[#DADADA]/20 cursor-pointer hover:border-gray-500 border border-gray-300 rounded-[50%] w-8 h-8'>

                </div>
                <div className='bg-[#DADADA]/20 cursor-pointer hover:border-gray-500 border border-gray-300 rounded-[50%] w-8 h-8'>

                </div>
                <div className='bg-[#DADADA]/20 cursor-pointer hover:border-gray-500 border border-gray-300 rounded-[50%] w-8 h-8'>

                </div>
                <div className='bg-[#DADADA]/20 cursor-pointer hover:border-gray-500 border border-gray-300 rounded-[50%] w-8 h-8'>

                </div>
                <div className='bg-[#DADADA]/20 cursor-pointer hover:border-gray-500 border border-gray-300 rounded-[50%] w-8 h-8'>

                </div>
              </div>

            </div>
            <div className='pt-[23px]'>
              <p className='font-medium text-[18px]'>Коробка</p>
              <div className='flex items-center gap-1 pt-2'>
                <div className='border group duration-200 border-gray-300 text-[15px] rounded duration-150  hover:border-gray-500 hover:border-[1px] cursor-pointer max-w-[185px] w-full py-3 px-2 flex items-center justify-center'>
                  <p className='group-hover:font-medium duration-200 text-[15px]'>Короб моноблок ЭКТ</p>
                </div>
                <div className='border group duration-200 border-gray-300 text-[15px] rounded duration-150  hover:border-gray-500 hover:border-[1px] cursor-pointer max-w-[185px] w-full py-3 px-2 flex items-center justify-center'>
                  <p className='group-hover:font-medium duration-200 text-[15px]'>Короб ЭКТ</p>
                </div>
                <div className='border group duration-200 border-gray-300 text-[15px] rounded duration-150  hover:border-gray-500 hover:border-[1px] cursor-pointer max-w-[205px] w-full py-3 px-2 flex items-center justify-center'>
                  <p className='group-hover:font-medium duration-200 text-[15px]'>Скрытый короб Invisible;</p>
                </div>
              </div>
            </div>
            <div className='flex items-center gap-10 border-b pb-10 border-gray-300'>
              <h1 className='text-[64px] font-medium'>48 720 ₽</h1>
              <div className='flex items-center max-w-[255px] w-full gap-2'>
                <button className='flex duration-200 items-center group hover:border-none hover:bg-[#A9845C] justify-between gap-2 max-w-[100px] border border-gray-300 py-[7px] px-2 cursor-pointer rounded w-full'>
                  <span className='text-[20px] group-hover:text-[white] font-medium'>-</span>
                  <span className='text-[20px] group-hover:text-[white] font-medium'>2</span>
                  <span className='text-[20px] group-hover:text-[white] font-medium'>+</span>
                </button>
                <button className='flex duration-200 items-center group justify-center gap-2 max-w-[150px] border border-gray-300 py-[8.5px] px-2 hover:bg-[#A9845C] hover:border-none cursor-pointer rounded w-full'>
                  <span className='text-[18px] font-medium group-hover:text-[white]'>Купить</span>
                </button>
              </div>
            </div>
            <div className='pt-[50px] border-b border-gray-300 pb-[50px]'>
              <p className='text-[24px] font-medium'>Описание</p>
              <p className='pt-1'>Коллекция ORIGINAL – одна из самых первых в ассортименте, она была создана еще в 2005 году. Наша миссия – это служение гармонии и красоте: время идет, и представления о стандартах меняются, поэтому в 2011 мы попросили итальянского архитектора и дизайнера Франко Поли обновить дизайн линейки. Двери коллекции ORIGINAL гармонично дополнят любой интерьер в современном исполнении.</p>
            </div>
            <div className='pt-[50px] max-w-[700px] w-full'>
              <p className='font-medium text-[24px]'>Характеристики</p>
              <div className='flex p-2 border-b border-gray-300 pb-[10px]'>
                <div className='flex items-center justify-between w-full'>
                  <p className='text-[18px] font-medium'>Ширина створки</p>
                  <p className='text-[18px]'>600, 700, 800, 900 мм.</p>
                </div>
              </div>
              <div className='flex p-2 border-b border-gray-300 pb-[10px]'>
                <div className='flex items-center justify-between w-full'>
                  <p className='text-[18px] font-medium'>Высота створки</p>
                  <p className='text-[18px]'>2000, 2100 мм.</p>
                </div>
              </div>
              <div className='flex p-2 border-b border-gray-300 pb-[10px]'>
                <div className='flex items-center justify-between w-full'>
                  <p className='text-[18px] font-medium'>Двухстворчатость</p>
                  <p className='text-[18px]'>все модели коллекции</p>
                </div>
              </div>
              <div className='flex p-2 border-b border-gray-300 pb-[10px]'>
                <div className='flex items-center justify-between w-full'>
                  <p className='text-[18px] font-medium'>Неравнопольность</p>
                  <p className='text-[18px]'>все модели коллекции</p>
                </div>
              </div>
              <div className='flex p-2 border-b border-gray-300 pb-[10px]'>
                <div className='flex items-center justify-between w-full'>
                  <p className='text-[18px] font-medium'>Подходящие системы</p>
                  <p className='text-[18px]'>Сompack, Magic, Пенал, Mystery, Рото, <br /> Купе, Книжка, Внутри проема;.</p>
                </div>
              </div>
              <div className='flex p-2 border-b border-gray-300 pb-[10px]'>
                <div className='flex items-center justify-between w-full'>
                  <p className='text-[18px] font-medium'>Монтаж и сторонность</p>
                  <p className='text-[18px]'>универсальная сторонность.</p>
                </div>
              </div>
              <div className='flex p-2 border-b border-gray-300 pb-[10px]'>
                <div className='flex items-center justify-between w-full'>
                  <p className='text-[18px] font-medium'>Зарезка под петли и замок</p>
                  <p className='text-[18px]'>заводская</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <NeedAHelp/>
      </div>
    </>
  )
}

export default SinglePage