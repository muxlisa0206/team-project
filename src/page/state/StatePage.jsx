
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

// Import Swiper styles
import "./StatePage.css";

export default function StatePage() {
  return (
    <main className="mx-auto w-full max-w-[1060px] bg-white text-[#262626]">

      <section className="max-w-[1200px] mx-auto px-4 pt-10 mt-[50px]">
        <div className='mt-[50px] flex gap-5 my-[35px]'>
          <Link className='text-[13px] sm:text-[15px] text-[#B1B0AF]' to="/">Главная</Link>
          <p className='text-[15px] text-[#B1B0AF]'>-</p>
          <Link className='text-[13px] sm:text-[15px] text-[#B1B0AF]' to="/catalog">Каталог</Link>
          <p className='text-[15px] text-[#B1B0AF]'>-</p>
          <Link className='text-[13px] sm:text-[15px] text-[#B1B0AF]' to="/catalogDoor">Межкомнатные двери</Link>
        </div>
        <h1 className="font-[PermianSerifTypeface] mt-[47px] font-bold text-[64px] leading-[100%] tracking-[-1%] mb-[70px]">
          H1. Длинный заголовок типовой страницы, чтобы настроить интерлиньяж
        </h1>

        <img
          src="/state.assets/Rectangle 1660.png"
          alt="image"
          className="max-w-[1060px] w-full h-auto rounded-md mb-12"
        />
      </section>

      <section className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-[50px] font-700 font-bold leading-snug mb-4">
          H2. Многострочный заголовок, длина которого иногда бывает так некстати        </h2>

        <p className="text-[20px] leading-relaxed mb-4">
          Эта страница создана для демонстрации блоков и элементов, которые
          используются на сайте, и служит руководством для всех, кто работает над ним.
        </p>

        <p className="text-[20px] leading-relaxed mb-8">
          Дизайнеры и технологи отрабатывают здесь стили, чтобы добиться приемлемых результатов в  различных сочетаниях блоков и элементов. Контент-менеджеры и редакторы используют  страницу в качестве справочника по верстке типовых страниц. Здесь же рассказывается о некоторых общих правилах оформления контента.
        </p>

        <p className="text-[16px] leading-relaxed mb-12">
          Эта страница создана для демонстрации блоков и элементов, которые используются на сайте,  и служит руководством для всех, кто работает над ним. Дизайнеры и технологи отрабатывают здесь стили, чтобы добиться приемлемых результатов в  различных сочетаниях блоков и элементов. Контент-менеджеры и редакторы используют  страницу в качестве справочника по верстке типовых страниц. Здесь же рассказывается о некоторых общих правилах оформления контента.
        </p>

        <img
          src="/state.assets/Rectangle 1660 (1).png"
          alt="image"
          className="max-w-[1060px] w-full h-auto rounded-md mb-12"
        />
      </section>

      <section className="max-w-[1200px] mx-auto px-4">
        <h3 className="text-[36px] font-bold leading-snug mb-4">
          H3. Делаем заголовки нарочито длинными, чтобы убедиться в правильном интерлиньяже
        </h3>

        <p className="text-[16px] leading-relaxed mb-10">
          Текст состоит из некоторого <span className="text-[#B14101]">количества предложений.</span> Одно предложение, даже очень распространённое, сложное, текстом назвать нельзя, поскольку текст можно расчленить на самостоятельные предложения, а части предложения сочетаются по законам синтаксиса сложного предложения, но не текста.
        </p>
      </section>

      <section className="max-w-[1200px] mx-auto px-4">
        <h4 className="text-[18px] font-semibold leading-snug mb-4">
          H4. Текст состоит из некоторого количества предложений. Одно предложение, даже очень распространённое, сложное, текстом назвать нельзя, поскольку текст можно расчленить на самостоятельные предложения.
        </h4>
        <p className="text-[16px] leading-relaxed mb-6">
          Современная строительная техника - это новые возможности для строительных и ремонтных организаций. Сегодня, когда изменяются масштабы строительства.
        </p>

        <ul className="list-disc marker:text-[#B14101] pl-5 text-[16px] leading-relaxed mb-12">
          <li>ol-ul. Для эффективной деятельности многих видов бизнеса требуется качественное решение логистических задач, и без коммерческого автотранспорта решить их невозможно. </li>
          <li>Лизинг коммерческого автотранспорта предоставит новые возможности для строительных, дорожных, транспортных организаций. </li>
          <li>Благодаря финансовой аренде Вы можете обновить или пополнить парк грузового и пассажирского автотранспорта своего предприятия, не изымая средства из оборота, и при этом использовать налоговые, амортизационные и балансовые льготы.</li>
        </ul>
      </section>

      <section className="relative max-w-[1200px] mx-auto px-4">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
          }}
          spaceBetween={20}
          slidesPerView={1}
          className="custom-swiper"
        >
          <SwiperSlide>
            <img
              src="/state.assets/Rectangle 1661.png"
              alt="image"
              className="w-full h-auto"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="/state.assets/Rectangle 1660.png"
              alt="image"
              className="w-full h-auto"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="/state.assets/Rectangle 1660 (1).png"
              alt="image"
              className="w-full h-auto"
            />
          </SwiperSlide>
        </Swiper>

        <div className="custom-pagination flex justify-center gap-2 mt-4"></div>

        <button className="custom-prev slide-btn">
          ←
        </button>

        <button className="custom-next slide-btn">
          →
        </button>
      </section>


      <section className="max-w-[1200px] mx-auto px-4 mt-[70px]">
        <h5 className="text-[18px] font-semibold leading-snug mb-4">
          H5. <span className="text-[#B14101]">Текст состоит</span> из некоторого количества предложений. Одно предложение, даже очень распространённое, сложное, текстом назвать нельзя, поскольку текст можно расчленить на самостоятельные предложения, а части предложения сочетаются по законам синтаксиса сложного предложения, но не текста.
        </h5>
        <ol className="list-decimal marker:text-[#B14101] pl-5 text-[16px] leading-relaxed mb-12">
          <li>ol-ul. Современная строительная техника - это новые возможности для строительных и ремонтных организаций. </li>
          <li>Сегодня, когда изменяются масштабы строительства, повышаются требования к его качеству, экономичности и срокам, усложняются объекты и методы работ, от строительной организации требуется большая эффективность в использовании имеющихся производственных мощностей.</li>
        </ol>
        <p className="text-[16px] leading-relaxed mb-6">
          Текст состоит из некоторого количества предложений. Одно предложение, даже очень распространённое, сложное, текстом назвать нельзя, поскольку текст можно расчленить на самостоятельные предложения, а части предложения сочетаются по законам синтаксиса сложного предложения, но не текста.
        </p>
      </section>

      <section className="mt-[70px]">
        <div className="w-full max-w-6xl mx-auto px-4 py-16">

          <h1 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900 mb-6">
            Делаем заголовки нарочито длинными, чтобы убедиться в правильном интерлиньяже
          </h1>
          <p className="text-[16px] leading-relaxed mb-6">
            Текст состоит из некоторого количества предложений. Одно предложение, даже очень распространённое, сложное, текстом назвать нельзя, поскольку текст можно расчленить на самостоятельные предложения, а части предложения сочетаются по законам синтаксиса сложного предложения, но не текста.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">

            <div className="border rounded-xl !bg-[#F3F0EE] !flex !justify-between p-6 bg-white shadow-sm hover:shadow-md transition">
              <div>
                <h3 className="text-lg font-semibold mb-2">Услуги и сервисы</h3>
                <p className="text-sm text-gray-500 mb-4">PDF · 190 kb</p>
              </div>

              <button className="flex items-center gap-2 text-orange-600 font-semibold hover:underline">
                <span className="text-xl"><img src="state.assets/download_outline_16.png" alt="download" /></span> СКАЧАТЬ
              </button>
            </div>

            <div className="border rounded-xl !bg-[#F3F0EE] !flex !justify-between p-6 bg-white shadow-sm hover:shadow-md transition">
              <div>
                <h3 className="text-lg font-semibold mb-2">Правила безопасности</h3>
                <p className="text-sm text-gray-500 mb-4">PDF · 190 kb</p>
              </div>

              <button className="flex items-center gap-2 text-orange-600 font-semibold hover:underline">
                <span className="text-xl"><img src="state.assets/download_outline_16.png" alt="download" /></span> СКАЧАТЬ
              </button>
            </div>
          </div>

          <p className="text-[16px] leading-relaxed mb-6">
            Текст состоит из некоторого количества предложений. Одно предложение, даже очень распространённое, сложное, текстом назвать нельзя, поскольку текст можно расчленить на самостоятельные предложения, а части предложения сочетаются по законам синтаксиса сложного предложения, но не текста. Текст состоит из некоторого количества предложений. Одно предложение, даже очень распространённое, сложное, текстом назвать нельзя, поскольку текст можно расчленить на самостоятельные предложения.
          </p>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-4 mt-[70px]">
        <div className="testimonial-card">

          <p className="testimonial-text">
            Текст состоит из некоторого количества предложений. Одно предложение, даже очень распространённое, сложное, текстом назвать нельзя, поскольку текст можно расчленить на самостоятельные предложения.
          </p>

          <div className="avatar-section">
            <img src="/state.assets/Rectangle 1651.png" className="avatar-img" />
            <div>
              <div className="avatar-name">Анастасия</div>
              <div className="avatar-role">Специалист по вопросам</div>
            </div>
          </div>

          <img src="/state.assets/''.png" className="quote-icon" />

          <div className="testimonial-bottom-line"></div>
        </div>

        <div className="mt-[70px]">
          <h3 className="font-gilroy font-medium not-italic text-[22px] leading-[1.4] tracking-normal text-[#3B3937] [leading-trim:none]">
            Текст состоит из некоторого количества предложений. Одно предложение, даже очень распространённое, сложное, текстом назвать нельзя, поскольку текст можно расчленить на самостоятельные предложения, а части предложения сочетаются по законам синтаксиса сложного предложения, но не текста.
          </h3>
          <p className="mt-[30px] mb-[120px] font-gilroy font-normal not-italic text-[16px] leading-[1.3] tracking-normal text-[#3B3937] [leading-trim:none]">
            Текст состоит из некоторого количества предложений. Одно предложение, даже очень распространённое, сложное, текстом назвать нельзя, поскольку текст можно расчленить на самостоятельные предложения, а части предложения сочетаются по законам синтаксиса сложного предложения, но не текста.
          </p>
        </div>

      </section>

    </main>
  );
}

