// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link, NavLink } from 'react-router-dom'


import './homePage.css'

import footerbg from '../../assets/footerbg.png';
import herobg from '../../assets/herobg.png'
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import state1 from '../../assets/state1.svg';
import state2 from '../../assets/state2.svg';
import state3 from '../../assets/state3.svg';
import state4 from '../../assets/state4.svg';
import state5 from '../../assets/state5.svg';
import state6 from '../../assets/state6.svg';
import CatalogInterriorDoors from '../../components/catalogDoors/CatalogInterriorDoors';
import NeedAHelp from '../../components/needAHelp/NeedAHelp';
import States from '../../components/states/States';

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
const mebelInfo = [
  {
    id: "1",
    photos: "mebel1.webp",
    model: "Sofia Original 50.07",
    price: "24500",
    discount: "0",
  },
  {
    id: "2",
    photos: "mebel2.webp",
    model: "Sofia Original 50.07",
    price: "24500",
    discount: "0",
  },
  {
    id: "3",
    photos: "mebel3.webp",
    model: "Sofia Original 50.07",
    price: "24500",
    discount: "0",
  },
  {
    id: "4",
    photos: "mebel4.webp",
    model: "Sofia Original 50.07",
    price: "24500",
    discount: "0",
  },
  {
    id: "5",
    photos: "mebel5.png",
    model: "Sofia Original 50.07",
    price: "24500",
    discount: "0",
  },
  {
    id: "6",
    photos: "mebel6.png",
    model: "Sofia Original 50.07",
    price: "24500",
    discount: "0",
  },
]
const devorInfo = [
  {
    id: "1",
    photos: "devor1.webp",
    model: "Sofia Original 50.07",
    price: "24500",
    discount: "0",
  },
  {
    id: "2",
    photos: "devor2.webp",
    model: "Sofia Original 50.07",
    price: "24500",
    discount: "0",
  },
  {
    id: "3",
    photos: "devor3.webp",
    model: "Sofia Original 50.07",
    price: "24500",
    discount: "0",
  },
  {
    id: "4",
    photos: "devor4.webp",
    model: "Sofia Original 50.07",
    price: "24500",
    discount: "0",
  },
  {
    id: "5",
    photos: "devor5.webp",
    model: "Sofia Original 50.07",
    price: "24500",
    discount: "0",
  },
  {
    id: "6",
    photos: "devor6.webp",
    model: "Sofia Original 50.07",
    price: "24500",
    discount: "0",
  },
  {
    id: "7",
    photos: "devor7.webp",
    model: "Sofia Original 50.07",
    price: "24500",
    discount: "0",
  },
  {
    id: "8",
    photos: "devor8.webp",
    model: "Sofia Original 50.07",
    price: "24500",
    discount: "0",
  },
  {
    id: "9",
    photos: "devor9.webp",
    model: "Sofia Original 50.07",
    price: "24500",
    discount: "0",
  },
]
const stairInfo = [
  {
    id: "1",
    photos: "stair1.png",
    model: "Sofia Original 50.07",
    price: "24500",
    discount: "0",
  },
]
const fasadInfo = [
  {
    id: "1",
    photos: "fasad1.jfif",
    model: "Sofia Original 50.07",
    price: "24500",
    discount: "0",
  },
  {
    id: "2",
    photos: "fasad.jpg",
    model: "Sofia Original 50.07",
    price: "24500",
    discount: "0",
  }
]

const HomePage = () => {
  return (
    <div>
      <main>
        <section  className='h-[45vh] md:h-[70vh] lg:h-[100vh] m-[20px] mt-[130px]'
        style={{
              backgroundImage: `url(${herobg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
       >
        <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='flex items-center justify-center'>
              <div className='container mx-auto px-[30px] flex flex-col gap-[10px] items-center justify-center max-w-[300px] md:max-w-[540px] w-full h-[300px] md:h-[540px] rounded-[50%] mt-[50px] lg:mt-[30px] opacity-60' 
              style={{
                backgroundImage: `url(${footerbg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <h1 className='text-[22px] md:text-[50px] text-white font-bold'>Classic Wood Stile</h1>
              <p className='text-[#FFD6A8] text-[18px] md:text-[25px] font-bold'>enterior-exterior</p>
              <p className='text-center w-full text-white text-[15px] md:text-[20px] font-bold'>Приглашает к сотрудничеству архитекторов, дизайнеров и строителей</p>
              <button className='px-[18px] py-[8px] md:px-[25px] md:py-[15px] bg-[#A9845C] shadow-[1px_1px_1px_0px_#00000040] text-white font-bold text-[15px] md:text-[20px] uppercase mt-[30px]'>подробнее</button>
            </div>
            </SwiperSlide>
            <SwiperSlide className='flex items-center justify-center'>
              <div className='container mx-auto px-[30px] flex flex-col gap-[10px] items-center justify-center max-w-[300px] md:max-w-[540px] w-full h-[300px] md:h-[540px] rounded-[50%] mt-[50px] lg:mt-[30px] opacity-60' 
              style={{
                backgroundImage: `url(${footerbg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <h1 className='text-[22px] md:text-[50px] text-white font-bold'>Classic Wood Stile</h1>
              <p className='text-[#FFD6A8] text-[18px] md:text-[25px] font-bold'>enterior-exterior</p>
              <p className='text-center w-full text-white text-[15px] md:text-[20px] font-bold'>Приглашает к сотрудничеству архитекторов, дизайнеров и строителей</p>
              <button className='px-[18px] py-[8px] md:px-[25px] md:py-[15px] bg-[#A9845C] shadow-[1px_1px_1px_0px_#00000040] text-white font-bold text-[15px] md:text-[20px] uppercase mt-[30px]'>подробнее</button>
            </div>
            </SwiperSlide>
            <SwiperSlide className='flex items-center justify-center'>
              <div className='container mx-auto px-[30px] flex flex-col gap-[10px] items-center justify-center max-w-[300px] md:max-w-[540px] w-full h-[300px] md:h-[540px] rounded-[50%] mt-[50px] lg:mt-[30px] opacity-30' 
              style={{
                backgroundImage: `url(${footerbg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <h1 className='text-[22px] md:text-[50px] text-white font-bold'>Classic Wood Stile</h1>
              <p className='text-[#FFD6A8] text-[18px] md:text-[25px] font-bold'>enterior-exterior</p>
              <p className='text-center w-full text-white text-[15px] md:text-[20px] font-bold'>Приглашает к сотрудничеству архитекторов, дизайнеров и строителей</p>
              <button className='px-[18px] py-[8px] md:px-[25px] md:py-[15px] bg-[#A9845C] shadow-[1px_1px_1px_0px_#00000040] text-white font-bold text-[15px] md:text-[20px] uppercase mt-[30px]'>подробнее</button>
            </div>
            </SwiperSlide>
          </Swiper>
        </section>

        <section>
          <div className='container mx-auto px-[30px] pt-[40px] flex flex-col gap-3 lg:flex-row items-center justify-between gap-[20px]'>
              <div className='max-w-[700px] w-full border-b-1 border-[#DADADA]'>
                <img className='w-full h-[320px] object-cover' src={image1} alt="" />
                <div className='py-[20px] flex flex-col gap-[20px]'>
                  <p className='text-[#3B3937] text-[36px] font-bold'>Двери на заказ</p>
                  <p className='text-[#3B3937] text-[16px] font-[400] max-w-[545px] w-full'>На собственной фабрике мы создаем красивые, безопасные и практически вечные двери, межкомнатные перегородки, стеновые панели и другие решения для вашего интерьера.</p>
                  <NavLink to='Contact' className='text-right text-[#B14101] text-[15px] font-bold'>заказать уникальную дверь</NavLink>
                </div>
              </div>
              <div className='max-w-[700px] w-full border-b-1 border-[#DADADA]'>
                <img className='w-full h-[320px] object-cover' src={image2} alt="" />
                <div className='py-[20px] flex flex-col gap-[20px]'>
                  <p className='text-[#3B3937] text-[36px] font-bold'>3D фрезеровка</p>
                  <p className='text-[#3B3937] text-[16px] font-[400] max-w-[545px] w-full'>Изделия, которые создает фрезерный станок, управляемый компьютером, отличаются высочайшим качеством, абсолютной детализацией и идеальной точностью.</p>
                  <NavLink to='Catalog' className='text-right text-[#B14101] text-[15px] font-bold'>выбрать из каталога</NavLink>
                </div>
              </div>
          </div>
        </section>

        <section>
              <div className='container mx-auto px-[30px] pt-[50px]'>
                <h1 className='text-[#3B3937] text-[64px] font-bold'>Витрина товаров</h1>
              <Tabs className='mt-[20px]'>
              <TabList className='flex items-center overflow-x-auto min-w-full whitespace-nowrap no-scrollbar'>
                <Tab className='flex-1 text-[16px] py-[9px] px-[20px] border border-[#DADADA] text-[#3B3937]'>
                  Межкомнатные двери
                </Tab>
                <Tab className='flex-1 text-[16px] py-[9px] px-[20px] border border-[#DADADA] text-[#3B3937]'>
                  Мебель
                </Tab>
                <Tab className='flex-1 text-[16px] py-[9px] px-[20px] border border-[#DADADA] text-[#3B3937] whitespace-nowrap'>
                  Стеновые панели «Буазери»
                </Tab>
                <Tab className='flex-1 text-[16px] py-[9px] px-[20px] border border-[#DADADA] text-[#3B3937]'>
                  Лестницы
                </Tab>
                <Tab className='flex-1 text-[16px] py-[9px] px-[20px] border border-[#DADADA] text-[#3B3937]'>
                  Мебельные фасады
                </Tab>
              </TabList>


                <TabPanel>
                  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[30px] py-[20px]'>
                    {
                        doorInfo.map((el) => (
                        <CatalogInterriorDoors key={el.id} id={el.id} model={el.model} price={el.price} photos={el.photos} />
                        ))
                    }
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[30px] py-[20px]'>
                    {
                    mebelInfo.map((el) => (
                    <CatalogInterriorDoors key={el.id} id={el.id} model={el.model} price={el.price} photos={el.photos} />
                  ))
                }
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[30px] py-[20px]'>
                    {
                  devorInfo.map((el) => (
                    <CatalogInterriorDoors key={el.id} id={el.id} model={el.model} price={el.price} photos={el.photos} />
                  ))
                }
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[30px] py-[20px]'>
                    {
                  stairInfo.map((el) => (
                    <CatalogInterriorDoors key={el.id} id={el.id} model={el.model} price={el.price} photos={el.photos} />
                  ))
                }
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className='grid grid-cols-3 gap-[30px] py-[20px]'>
                    {
                  fasadInfo.map((el) => (
                    <CatalogInterriorDoors key={el.id} id={el.id} model={el.model} price={el.price} photos={el.photos} />
                  ))
                }
                  </div>
                </TabPanel>
              </Tabs>
              </div>
        </section>

        <NeedAHelp/>

        <section>
          <div className='container mx-auto px-[30px]'>
            <h1 className='text-[35px] md:text-[64px] text-[#3B3937] font-[700]'>Новые статьи</h1>
            <div className='flex flex-col gap-3 items-center sm:grid grid-cols-2 lg:grid-cols-3 gap-[30px] py-[20px]'>
                <States img={state1} title='Графичный дизайн и бескомпромиссное качество в коллекции перегородок Grafica' desc='В этой коллекции мы создали многообразие дизайна створок и оснастили межкомнатные перегородки безупречным качеством механизмов. Особенность коллекции — плавность скольжения, комфорт и дизайн.'/>
                <States img={state2} title='Реечная перегородка – это что-то новенькое!' desc='Если перед вами стоит задача зонировать пространство, обратите внимание на ультрасовременное решение – реечные перегородки. С их помощью можно легко и элегантно обыграть интерьер, а наша уникальная разработка поворотного механизма позволит создавать различные сценарии освещения даже в небольших помещениях.'/>
                <States img={state3} title='Декоративная рейка – такая простая и такая функциональная' desc='Еще вчера про эту малютку слышали единицы. Сегодня она – излюбленный аксессуар российских и зарубежных дизайнеров.Ее секрет прост, хоть и имеет магический результат. Хотите высокие потолки и широкие стены? '/>
                <States img={state4} title='Какую выбрать дверь в ванную комнату?' desc='Подход к выбору двери в ванную комнату для многих формируется исключительно с эстетической точки зрения. Да, внешний вид играет важную роль в общей картине всего интерьера. Однако, он не может быть первостепенным в вопросе, где техническая составляющая ценней в данной конструкции. '/>
                <States img={state5} title='Алюминий и стекло: новые способы зонирования пространства' desc='Новые и совершенно уникальные дизайнерские реечные перегородки от 1000 мм до 3000 мм со стеклом в изящном алюминиевом профиле помогут вам создать множество самых разных сценариев освещения и зонирования.'/>
                <States img={state6} title='Как создать настроение Лофт?' desc='Этим летом мы выпустили немало обновлений, чтобы предоставить вам современные и актуальные решения. Сегодня расскажем, как с помощью разработок, оформить пространство в стиле лофт. Дизайнеру на заметку!'/>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default HomePage