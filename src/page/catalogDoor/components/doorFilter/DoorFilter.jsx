import React, { useState } from 'react'

function DoorFilter() {
    const [isStyleOpen, setIsStyleOpen] = useState(false);
    return (
        <div className='max-w-[300px] w-full hidden lg:flex flex-col gap-10'>
            <ul>
                <li className='font-bold text-[15px] text-[#B14101] pb-[5px]'>Межкомнатные двери</li>
                <li className='font-bold text-[15px] text-[#3B3937]'>Мебель</li>
                <li className='font-bold text-[15px] text-[#3B3937]'>Стеновые панели «Буазери»</li>
                <li className='font-bold text-[15px] text-[#3B3937]'>Лестницы</li>
                <li className='font-bold text-[15px] text-[#3B3937]'>Мебельные фасады</li>
            </ul>
            <ul className='flex flex-col gap-2.5'>
                <li className='font-bold '>Ценовой диапазон</li>
                <div className='flex items-center gap-2'>
                    <div className='flex flex-col'>
                        <label className='text-[13px]' htmlFor="price-selected">Выбрано</label>
                        <input id="price-selected" className=" w-full h-10 pl-[15px] border-2 border-[#d5d3d1]" type="number" />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-right text-[13px]' htmlFor="price-clear">очистить</label>
                        <input id="price-clear" className=" w-full h-10 pl-[15px] border-2 border-[#d5d3d1]" type="number" />
                    </div>
                </div>
                <div className='bg-[#F3F0EE] flex justify-center'>
                    <input className='p-[11px] bg-[black] max-w-[226px] w-full ' type="range" />
                </div>
            </ul>
            <ul>
                <li></li>
                <h2 id="accordion-card-heading-1">
                    <button
                        onClick={() => setIsStyleOpen((prev) => !prev)}
                        type="button"
                        className="flex items-center justify-between w-full font-medium rtl:text-right text-body rounded-base shadow-xs hover:text-heading hover:bg-neutral-secondary-medium gap-3 aria-expanded:rounded-b-none aria-expanded:shadow-none"
                        aria-expanded={isStyleOpen}
                        aria-controls="accordion-card-body-1">
                        <span className='font-bold'>Тип дверей</span>
                        <svg
                            data-accordion-icon
                            className={`w-5 h-5 transition-transform ${isStyleOpen ? 'rotate-180' : ''}`}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 15 7-7 7 7" />
                        </svg>
                    </button>
                </h2>
                {isStyleOpen && (
                    <div
                        id="accordion-card-body-1"
                        aria-labelledby="accordion-card-heading-1">
                        <div className="py-3">
                            <span className='flex items-center justify-between'>
                                <label htmlFor="interrior">Межкомнатные</label>
                                <input id="interrior" className='w-5 h-5 accent-[#3B3937]' type="checkbox" />
                            </span>
                            <span className='flex items-center justify-between'>
                                <label htmlFor="hidden">Скрытые</label>
                                <input id="hidden" className='w-5 h-5 accent-[#3B3937]' type="checkbox" />
                            </span>
                        </div>
                    </div>
                )}

            </ul>
            <ul>
                <li></li>
                <h2 id="accordion-card-heading-2">
                    <button
                        onClick={() => setIsStyleOpen((prev) => !prev)}
                        type="button"
                        className="flex items-center justify-between w-full font-medium rtl:text-right text-body rounded-base shadow-xs hover:text-heading hover:bg-neutral-secondary-medium gap-3 aria-expanded:rounded-b-none aria-expanded:shadow-none"
                        aria-expanded={isStyleOpen}
                        aria-controls="accordion-card-body-2">
                        <span>Стиль</span>
                        <svg
                            data-accordion-icon
                            className={`w-5 h-5 transition-transform ${isStyleOpen ? 'rotate-180' : ''}`}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 15 7-7 7 7" />
                        </svg>
                    </button>
                </h2>
                {isStyleOpen && (
                    <div
                        id="accordion-card-body-2"
                        aria-labelledby="accordion-card-heading-2">
                        <div className="py-3">
                            <span className='flex items-center justify-between'>
                                <label htmlFor="scandinavian">Скандинавский</label>
                                <input id="scandinavian" className='w-5 h-5 accent-[#3B3937]' type="checkbox" />
                            </span>
                            <span className='flex items-center justify-between'>
                                <label htmlFor="vintage">Винтаж</label>
                                <input id="vintage" className='w-5 h-5 accent-[#3B3937]' type="checkbox" />
                            </span>
                            <span className='flex items-center justify-between'>
                                <label htmlFor="modern">Современный</label>
                                <input id="modern" className='w-5 h-5 accent-[#3B3937]' type="checkbox" />
                            </span>
                        </div>
                    </div>
                )}

            </ul>
            <ul>
                <li></li>
                <h2 id="accordion-card-heading-3">
                    <button
                        onClick={() => setIsStyleOpen((prev) => !prev)}
                        type="button"
                        className="flex items-center justify-between w-full font-medium rtl:text-right text-body rounded-base shadow-xs hover:text-heading hover:bg-neutral-secondary-medium gap-3 aria-expanded:rounded-b-none aria-expanded:shadow-none"
                        aria-expanded={isStyleOpen}
                        aria-controls="accordion-card-body-3">
                        <span className='font-bold'>Материал</span>
                        <svg
                            data-accordion-icon
                            className={`w-5 h-5 transition-transform ${isStyleOpen ? 'rotate-180' : ''}`}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 15 7-7 7 7" />
                        </svg>
                    </button>
                </h2>
                {isStyleOpen && (
                    <div
                        id="accordion-card-body-3"
                        aria-labelledby="accordion-card-heading-3">
                        <div className="py-3">
                            <span className='flex items-center justify-between'>
                                <label htmlFor="emal">Эмаль</label>
                                <input id="emal" className='w-5 h-5 accent-[#3B3937]' type="checkbox" />
                            </span>
                            <span className='flex items-center justify-between'>
                                <label htmlFor="monochronic">Монохромный Кортекс</label>
                                <input id="monochronic" className='w-5 h-5 accent-[#3B3937]' type="checkbox" />
                            </span>
                            <span className='flex items-center justify-between'>
                                <label htmlFor="silk">Шёлк</label>
                                <input id="silk" className='w-5 h-5 accent-[#3B3937]' type="checkbox" />
                            </span>
                            <span className='flex items-center justify-between'>
                                <label htmlFor="cortex">Кортекс</label>
                                <input id="cortex" className='w-5 h-5 accent-[#3B3937]' type="checkbox" />
                            </span>
                            <span className='flex items-center justify-between'>
                                <label htmlFor="shpon">Шпон</label>
                                <input id="shpon" className='w-5 h-5 accent-[#3B3937]' type="checkbox" />
                            </span>
                        </div>
                    </div>
                )}

            </ul>
            <ul>
                <li></li>
                <h2 id="accordion-card-heading-4">
                    <button
                        onClick={() => setIsStyleOpen((prev) => !prev)}
                        type="button"
                        className="flex items-center justify-between w-full font-medium rtl:text-right text-body rounded-base shadow-xs hover:text-heading hover:bg-neutral-secondary-medium gap-3 aria-expanded:rounded-b-none aria-expanded:shadow-none"
                        aria-expanded={isStyleOpen}
                        aria-controls="accordion-card-body-4">
                        <span className='font-bold'>Покрытие</span>
                        <svg
                            data-accordion-icon
                            className={`w-5 h-5 transition-transform ${isStyleOpen ? 'rotate-180' : ''}`}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 15 7-7 7 7" />
                        </svg>
                    </button>
                </h2>
                {isStyleOpen && (
                    <div
                        id="accordion-card-body-4"
                        aria-labelledby="accordion-card-heading-4">
                        <div className="py-3">
                            <span className='flex items-center justify-between'>
                                <label htmlFor="blured">Матовые</label>
                                <input id="blured" className='w-5 h-5 accent-[#3B3937]' type="checkbox" />
                            </span>
                            <span className='flex items-center justify-between'>
                                <label htmlFor="puretextured">Глянцевые</label>
                                <input id="puretextured" className='w-5 h-5 accent-[#3B3937]' type="checkbox" />
                            </span>
                            <span className='flex items-center justify-between'>
                                <label htmlFor="oncolor">Под покраску</label>
                                <input id="oncolor" className='w-5 h-5 accent-[#3B3937]' type="checkbox" />
                            </span>
                        </div>
                    </div>
                )}

            </ul>
            <ul>
                <li></li>
                <h2 id="accordion-card-heading-5">
                    <button
                        onClick={() => setIsStyleOpen((prev) => !prev)}
                        type="button"
                        className="flex items-center justify-between w-full font-medium rtl:text-right text-body rounded-base shadow-xs hover:text-heading hover:bg-neutral-secondary-medium gap-3 aria-expanded:rounded-b-none aria-expanded:shadow-none"
                        aria-expanded={isStyleOpen}
                        aria-controls="accordion-card-body-5">
                        <span className='font-bold'>Тип конструкции</span>
                        <svg
                            data-accordion-icon
                            className={`w-5 h-5 transition-transform ${isStyleOpen ? 'rotate-180' : ''}`}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 15 7-7 7 7" />
                        </svg>
                    </button>
                </h2>
                {isStyleOpen && (
                    <div
                        id="accordion-card-body-5"
                        aria-labelledby="accordion-card-heading-5">
                        <div className="py-3">
                            <span className='flex items-center justify-between'>
                                <label htmlFor="bordered">Рамочные</label>
                                <input id="bordered" className='w-5 h-5 accent-[#3B3937]' type="checkbox" />
                            </span>
                            <span className='flex items-center justify-between'>
                                <label htmlFor="flenich">Филёнчатые</label>
                                <input id="flenich" className='w-5 h-5 accent-[#3B3937]' type="checkbox" />
                            </span>
                            <span className='flex items-center justify-between'>
                                <label htmlFor="shield">Щитовые</label>
                                <input id="shield" className='w-5 h-5 accent-[#3B3937]' type="checkbox" />
                            </span>
                            <span className='flex items-center justify-between'>
                                <label htmlFor="glazed">Остеклённые</label>
                                <input id="glazed" className='w-5 h-5 accent-[#3B3937]' type="checkbox" />
                            </span>
                            <span className='flex items-center justify-between'>
                                <label htmlFor="deaf">Глухие</label>
                                <input id="deaf" className='w-5 h-5 accent-[#3B3937]' type="checkbox" />
                            </span>
                            <span className='flex items-center justify-between'>
                                <label htmlFor="arched">Арочные</label>
                                <input id="arched" className='w-5 h-5 accent-[#3B3937]' type="checkbox" />
                            </span>
                            <span className='flex items-center justify-between'>
                                <label htmlFor="radius">Радиусные</label>
                                <input id="radius" className='w-5 h-5 accent-[#3B3937]' type="checkbox" />
                            </span>
                            <span className='flex items-center justify-between'>
                                <label htmlFor="automatic">Автоматические</label>
                                <input id="automatic" className='w-5 h-5 accent-[#3B3937]' type="checkbox" />
                            </span>
                            <span className='flex items-center justify-between'>
                                <label htmlFor="antiburglar">Противовзломные</label>
                                <input id="antiburglar" className='w-5 h-5 accent-[#3B3937]' type="checkbox" />
                            </span>
                        </div>
                    </div>
                )}

            </ul>
            <ul>
                <li></li>
                <h2 id="accordion-card-heading-6">
                    <button
                        onClick={() => setIsStyleOpen((prev) => !prev)}
                        type="button"
                        className="flex items-center justify-between w-full font-medium rtl:text-right text-body rounded-base shadow-xs hover:text-heading hover:bg-neutral-secondary-medium gap-3 aria-expanded:rounded-b-none aria-expanded:shadow-none"
                        aria-expanded={isStyleOpen}
                        aria-controls="accordion-card-body-6">
                        <span className='font-bold'>Облицовки</span>
                        <svg
                            data-accordion-icon
                            className={`w-5 h-5 transition-transform ${isStyleOpen ? 'rotate-180' : ''}`}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 15 7-7 7 7" />
                        </svg>
                    </button>
                </h2>
                {isStyleOpen && (
                    <div
                        id="accordion-card-body-6"
                        aria-labelledby="accordion-card-heading-6">
                        <div className="py-3">
                            <span className='flex items-center justify-between'>
                                <label htmlFor="vanil">Ваниль</label>
                                <input id="vanil" className='w-5 h-5 accent-[#3B3937]' type="checkbox" />
                            </span>
                            <span className='flex items-center justify-between'>
                                <label htmlFor="white-maple">Белый Клен</label>
                                <input id="white-maple" className='w-5 h-5 accent-[#3B3937]' type="checkbox" />
                            </span>
                            <span className='flex items-center justify-between'>
                                <label htmlFor="poplar">Тополь</label>
                                <input id="poplar" className='w-5 h-5 accent-[#3B3937]' type="checkbox" />
                            </span>
                            <span className='flex items-center justify-between'>
                                <label htmlFor="white-matte">Белый матовый</label>
                                <input id="white-matte" className='w-5 h-5 accent-[#3B3937]' type="checkbox" />
                            </span>
                        </div>
                    </div>
                )}

            </ul>
            <div className='flex items-center justify-between cursor-pointer'>
                <h4 className='text-[#B1B0AF] font-bold'>Сбросить фильтры</h4>
                <img src="/Vector (2).svg" alt="" />
            </div>
        </div>
    )
}

export default DoorFilter;