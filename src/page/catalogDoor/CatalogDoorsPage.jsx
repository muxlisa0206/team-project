import { useState } from 'react'
import { Link } from 'react-router-dom';
import CatalogInterriorDoors from '../../components/catalogDoors/CatalogInterriorDoors';
import NeedAHelp from '../../components/needAHelp/NeedAHelp';
import { ImCancelCircle } from "react-icons/im";
import DoorFilter from './components/doorFilter/DoorFilter';

const doorInfo = [
  {
    id: "1",
    photos: "/interriorDoorsPhotos/door 1.png",
    model: "Sofia Original 50.07",
    price: "24500",
    discount: "0",
  },
  {
    id: "2",
    photos: "/interriorDoorsPhotos/door 2.png",
    model: "VISION Модель 64.43",
    price: "34500",
    discount: "10000",
  },
  {
    id: "3",
    photos: "/interriorDoorsPhotos/door 3.png",
    model: "VISION Модель 64.44",
    price: "24500",
    discount: "0",
  },
  {
    id: "4",
    photos: "/interriorDoorsPhotos/door 4.png",
    model: "SKYLINE Модель 55.21",
    price: "24500",
    discount: "0",
  },
  {
    id: "5",
    photos: "/interriorDoorsPhotos/door 5.png",
    model: "SKYLINE Модель 55.23",
    price: "24500",
    discount: "0",
  },
  {
    id: "6",
    photos: "/interriorDoorsPhotos/door 6.png",
    model: "VISION Модель 64.44",
    price: "24500",
    discount: "0",
  },
  {
    id: "7",
    photos: "/interriorDoorsPhotos/door 7.png",
    model: "CLASSIC Модель 65.44",
    price: "24500",
    discount: "0",
  },
  {
    id: "8",
    photos: "/interriorDoorsPhotos/door 8.png",
    model: "CLASSIC Модель 64.22",
    price: "24500",
    discount: "0",
  },
  {
    id: "9",
    photos: "/interriorDoorsPhotos/door 9.png",
    model: "METAMORFOSA Модель 65.171",
    price: "24500",
    discount: "0",
  },

]

function CatalogDoorsPage() {


  const [filter, setFilter] = useState(false);
  function openFilter() {
    setFilter(!filter);
  }
  return (
    <>

      <section className='py-[50px] pt-[120px] px-5'>
        <div className='container mx-auto'>
          <ul className='flex items-center gap-5 py-4 text-[12px] text-[#B1B0AF]'>
            <li>
              <Link to={"/"}>Главная</Link>
            </li>
            <li className='text-[20px]'>-</li>
            <li>
              <Link to={"/catalog"}>Каталог</Link>
            </li>
            <li className='text-[20px]'>-</li>
            <li>Межкомнатные двери</li>
          </ul>







          <h1 className='text-[30px] md:text-[64px] text-[#3B3937] font-bold'>Межкомнатные двери</h1>

          <div className='pt-[60px] lg:flex gap-[70px] items-start'>

            <div className='lg:hidden flex w-full pb-[30px] z-6'>
              <div className='flex w-full items-center p-5 border border-[#DADADA]'>
                <h2 className='text-[20px] whitespace-nowrap  font-bold text-[#3B3937]'>Межкомнатные двери</h2>
              </div>
              <button onClick={openFilter} className='p-5 border border-[#DADADA] flex items-center cursor-pointer'>
                <img src="/interriorDoorsPhotos/Vector (3).svg" alt="" />
              </button>

            </div>
            <div className={`px-[30px] overflow-y-scroll h-screen pb-10 ${filter ? "translate-x-0" : "-translate-x-full"} duration-300 pt-[130px] top-0 left-0 w-full lg:hidden flex flex-col gap-5 fixed bg-[white] z-5`}>

              <div className='flex w-full items-center gap-[30px]'>
                <button onClick={openFilter}><ImCancelCircle className='w-10 h-10' /></button>
                <h2 className='text-[24px]'>Фильтровать</h2>
              </div>

              <ul className='flex w-full flex-col gap-2.5'>
                <div className='flex items-center justify-between'>
                  <li className='font-bold '>Ценовой диапазон</li>
                  <div className='flex items-center justify-end cursor-pointer' onClick={() => setFilter(false)}></div>
                </div>

                <div className='flex items-center w-full gap-2'>
                  <div className='flex flex-col'>
                    <label className='text-[13px]' htmlFor="">Выбрано</label>
                    <input className=" w-full h-10 pl-[15px] border-2 border-[#d5d3d1]" type="number" />
                  </div>
                  <div className='flex flex-col'>
                    <label className='text-right text-[13px]' htmlFor="">очистить</label>
                    <input className=" w-full h-10 pl-[15px] border-2 border-[#d5d3d1]" type="number" />
                  </div>
                </div>
                <div className='bg-[#F3F0EE] max-w-[406px] flex justify-center'>
                  <input className='p-[11px] bg-[black]  w-full ' type="range" />

                </div>
              </ul>
              <hr />
              <ul>
                <li className='font-bold '>Тип дверей</li>

                <div
                  id="accordion-card-body-1"

                  aria-labelledby="accordion-card-heading-1">
                  <div className="py-3 flex gap-[25px]">
                    <span className='flex items-center justify-between gap-2.5'>
                      <input id='interrior' className='w-5 h-5 accent-[#3B3937]' type="checkbox" />
                      <label htmlFor="interrior">Межкомнатные</label>

                    </span>
                    <span className='flex items-center justify-between gap-2.5'>
                      <input id='hidden' className='w-5 h-5 accent-[#3B3937]' type="checkbox" />
                      <label htmlFor="hidden">Скрытые</label>

                    </span>
                  </div>
                </div>


              </ul>
              <hr />
              <ul>
                <li className='font-bold '>Стиль</li>

                <div
                  id="accordion-card-body-2"

                  aria-labelledby="accordion-card-heading-2">
                  <div className="py-3 flex gap-[25px] flex-wrap">
                    <span className='flex items-center justify-between gap-2.5'>
                      <input id='scandinavian' className='w-5 h-5 accent-[#3B3937]' type="checkbox" />
                      <label htmlFor="scandinavian">Скандинавский</label>

                    </span>
                    <span className='flex items-center justify-between gap-2.5'>
                      <input id='vintage' className='w-5 h-5 accent-[#3B3937]' type="checkbox" />
                      <label htmlFor="vintage">Винтаж</label>

                    </span>
                    <span className='flex items-center justify-between gap-2.5'>
                      <input id='modern' className='w-5 h-5 accent-[#3B3937]' type="checkbox" />
                      <label htmlFor="modern">Современный</label>

                    </span>
                  </div>
                </div>


              </ul>
              <hr />
              <ul>
                <li className='font-bold '>Материал</li>

                <div
                  id="accordion-card-body-3"

                  aria-labelledby="accordion-card-heading-3">
                  <div className="py-3 flex gap-[25px] flex-wrap">
                    <span className='flex items-center justify-between gap-2.5'>
                      <input id='emal' className='w-5 h-5 accent-[#3B3937]' type="checkbox" />
                      <label htmlFor="emal">Эмаль</label>

                    </span>
                    <span className='flex items-center justify-between gap-2.5'>
                      <input id='monochronic' className='w-5 h-5 accent-[#3B3937]' type="checkbox" />
                      <label htmlFor="monochronic">Монохромный Кортекс</label>

                    </span>
                    <span className='flex items-center justify-between gap-2.5'>
                      <input id='silk' className='w-5 h-5 accent-[#3B3937]' type="checkbox" />
                      <label htmlFor="silk">Шёлк</label>

                    </span>
                    <span className='flex items-center justify-between gap-2.5'>
                      <input id='cortex' className='w-5 h-5 accent-[#3B3937]' type="checkbox" />
                      <label htmlFor="cortex">Кортекс</label>

                    </span>
                    <span className='flex items-center justify-between gap-2.5'>
                      <input id='shpon' className='w-5 h-5 accent-[#3B3937]' type="checkbox" />
                      <label htmlFor="shpon">Шпон</label>

                    </span>
                  </div>
                </div>


              </ul>
              <hr />
              <ul>
                <li className='font-bold '>Покрытие</li>

                <div
                  id="accordion-card-body-4"

                  aria-labelledby="accordion-card-heading-4">
                  <div className="py-3 flex gap-[25px] flex-wrap">
                    <span className='flex items-center justify-between gap-2.5'>
                      <input id='blured' className='w-5 h-5 accent-[#3B3937]' type="checkbox" />
                      <label htmlFor="blured">Матовые</label>

                    </span>
                    <span className='flex items-center justify-between gap-2.5'>
                      <input id='puretextured' className='w-5 h-5 accent-[#3B3937]' type="checkbox" />
                      <label htmlFor="puretextured">Глянцевые</label>

                    </span>
                    <span className='flex items-center justify-between gap-2.5'>
                      <input id='on color' className='w-5 h-5 accent-[#3B3937]' type="checkbox" />
                      <label htmlFor="on color">Под покраску</label>

                    </span>
                  </div>
                </div>


              </ul>
              <hr />
              <ul>
                <li className='font-bold '>Тип конструкции</li>

                <div
                  id="accordion-card-body-5"

                  aria-labelledby="accordion-card-heading-5">
                  <div className="py-3 flex gap-[25px] flex-wrap">
                    <span className='flex items-center justify-between gap-2.5'>
                      <input id='bordered' className='w-5 h-5 accent-[#3B3937]' type="checkbox" />
                      <label htmlFor="bordered">Рамочные</label>

                    </span>
                    <span className='flex items-center justify-between gap-2.5'>
                      <input id='flenich' className='w-5 h-5 accent-[#3B3937]' type="checkbox" />
                      <label htmlFor="flenich">Филёнчатые</label>

                    </span>
                    <span className='flex items-center justify-between gap-2.5'>
                      <input id='shield' className='w-5 h-5 accent-[#3B3937]' type="checkbox" />
                      <label htmlFor="shield">Щитовые</label>

                    </span>
                    <span className='flex items-center justify-between gap-2.5'>
                      <input id='glazed' className='w-5 h-5 accent-[#3B3937]' type="checkbox" />
                      <label htmlFor="glazed">Остеклённые</label>

                    </span>
                    <span className='flex items-center justify-between gap-2.5'>
                      <input id='deaf' className='w-5 h-5 accent-[#3B3937]' type="checkbox" />
                      <label htmlFor="deaf">Глухие</label>

                    </span>
                    <span className='flex items-center justify-between gap-2.5'>
                      <input id='arched' className='w-5 h-5 accent-[#3B3937]' type="checkbox" />
                      <label htmlFor="arched">Арочные</label>

                    </span>
                    <span className='flex items-center justify-between gap-2.5'>
                      <input id='radius' className='w-5 h-5 accent-[#3B3937]' type="checkbox" />
                      <label htmlFor="radius">Радиусные</label>

                    </span>
                    <span className='flex items-center justify-between gap-2.5'>
                      <input id='automatic' className='w-5 h-5 accent-[#3B3937]' type="checkbox" />
                      <label htmlFor="automatic">Автоматические</label>

                    </span>
                    <span className='flex items-center justify-between gap-2.5'>
                      <input id='antiburglar' className='w-5 h-5 accent-[#3B3937]' type="checkbox" />
                      <label htmlFor="antiburglar">Противовзломные</label>

                    </span>
                  </div>
                </div>


              </ul>
              <hr />
              <ul>
                <li className='font-bold '>Облицовки</li>

                <div
                  id="accordion-card-body-6"

                  aria-labelledby="accordion-card-heading-6">
                  <div className="py-3 flex gap-[25px] flex-wrap">
                    <span className='flex items-center justify-between gap-2.5'>
                      <input id='vanil' className='w-5 h-5 accent-[#3B3937]' type="checkbox" />
                      <label htmlFor="vanil">Ваниль</label>

                    </span>
                    <span className='flex items-center justify-between gap-2.5'>
                      <input id='white-maple' className='w-5 h-5 accent-[#3B3937]' type="checkbox" />
                      <label htmlFor="white-maple">Белый Клен</label>

                    </span>
                    <span className='flex items-center justify-between gap-2.5'>
                      <input id='poplar' className='w-5 h-5 accent-[#3B3937]' type="checkbox" />
                      <label htmlFor="poplar">Тополь</label>

                    </span>
                    <span className='flex items-center justify-between gap-2.5'>
                      <input id='white-matte' className='w-5 h-5 accent-[#3B3937]' type="checkbox" />
                      <label htmlFor="white-matte">Белый матовый</label>

                    </span>
                  </div>
                </div>


              </ul>
              <div className='flex items-center justify-between gap-2.5 cursor-pointer' onClick={() => {/* TODO: implement filter reset logic */ }}>
                <h4 className='text-[#B1B0AF] font-bold'>Сбросить фильтры</h4>
                <img src="/Vector (2).svg" alt="" />
              </div>
            </div>

            <DoorFilter />

            <div>
              <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[30px] pb-[70px]'>
                {
                  doorInfo.map((el) => (
                    <CatalogInterriorDoors key={el.id} id={el.id} model={el.model} price={el.price} photos={el.photos} />
                  ))
                }


              </div>
              <div className='flex items-center justify-center pb-[50px]'>
                <ul className="flex -space-x-px text-sm gap-5">

                  <li>
                    <a className="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-10 h-10 focus:outline-none">1</a>
                  </li>
                  <li>
                    <a className="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-10 h-10 focus:outline-none">2</a>
                  </li>
                  <li>
                    <a aria-current="page" className="flex items-center justify-center text-fg-brand bg-neutral-tertiary-medium box-border border border-default-medium hover:text-fg-brand font-medium text-sm w-10 h-10 focus:outline-none">3</a>
                  </li>
                  <li>
                    <a className="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-10 h-10 focus:outline-none">4</a>
                  </li>
                  <li>
                    <a className="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-10 h-10 focus:outline-none">5</a>
                  </li>

                </ul>
              </div>
              <hr className='border-[#c8c7c6]' />
              <div className='pt-[70px]'>

                <h2 className='text-[36px] font-bold text-[#3B3937] pb-[17px]'>Двери на заказ</h2>
                <p className='text-[16px] text-[#3B3937]'>Двери, представляющие из себя вертикальный прямоугольник, которые стоят в большинстве построенных квартир, представляют собой стандартный образец. Любые другие, отличающиеся по форме и размерам, считаются нестандартными и изготавливаются по заказу. Наша компания предлагает услугу изготовления межкомнатных дверей на заказ с доставкой в Москве и Московской области. Для того чтобы определиться с заказом, необходимо чётко представлять возможности изготовления дверей. <br /><br />
                  Изготавливаются они следующим образом: создаётся каркас из недорогой древесины, который затем обшивается панелями МДФ. Панели ламинируются плёнкой любых оттенков. Шпонированные варианты представляют собой целостный натуральный массив из дерева, покрытый шпоном из МДФ. Классические массивные и глухие модели, и лёгкие модели со стеклом, могут быть изготовлены из натурального дерева. <br /><br />
                  Если Вам необходима модель с эксклюзивным дизайном, можно сделать её по специальному проекту. Независимо тот того, в какой ценовой категории будут находиться выбранные вами изделия, все они выполнены из качественного материала, надёжны и безопасны.</p>
              </div>
            </div>

          </div>




        </div>
      </section >

      <NeedAHelp />

    </>
  )
}

export default CatalogDoorsPage;