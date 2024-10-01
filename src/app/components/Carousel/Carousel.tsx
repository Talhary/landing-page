'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const Carousel = () => {
    const [swiper, setSwiper] = useState<any>(null);
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const totalSlides = 5;

    const handleSlideChange = (swiper: any) => {
        const currentIndex = swiper.realIndex;
        setActiveIndex(currentIndex);
    };

    return (
        <section id="carousel" className="cq8p6 co2a3 cnqgv">
            <div className="c1xxg cxbax">
                <div className="czd2q c92f3 cmhb9 c1plj">
                    <div className="c5ymx calbx c1r3i cmhb9 ccem0">
                        <h1 className="cps50 cyb9k cdjn8">From rough design files, to powerful products</h1>
                        <p className="text-gray-600 c0atf czz36">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
                    </div>
                </div>

                <Swiper
                    spaceBetween={10} // Adjust this value to control the space between slides
                    centeredSlides
                    loop={true}
                    pagination={{ clickable: true }}
                    onSwiper={(swiperInstance) => setSwiper(swiperInstance)}
                    onSlideChange={handleSlideChange}
                    breakpoints={{
                        640: {
                            slidesPerView: 1, // 1 slide for small devices
                        },
                        768: {
                            slidesPerView: 2.3, // 2.3 slides for medium devices and up
                        },
                    }}
                    className="swiper-container"
                >
                    {/* Carousel Items */}
                    {[...Array(totalSlides)].map((_, index) => (
                        <SwiperSlide
                            key={index}
                            className="swiper-slide"
                            style={{
                                opacity: index === activeIndex ? 1 : 0.5,
                                transition: 'transform 0.3s, opacity 0.3s',
                            }}
                        >
                            <img
                                src={`https://preview.cruip.com/appy/images/carousel-item-0${index + 1}.jpg`}
                                alt={`Carousel item 0${index + 1}`}
                                className="carousel-img"
                                style={{ width: '100%', height: 'full' }}
                            />
                            <div className="mt-2"> {/* Add margin-top here to adjust spacing */}
                                <a className="learn-more text-white bg-teal-500" href="#0">Learn more</a>
                                <a className="creative-services text-white crwpf cbnia bottom-5" href="#0">Creative Services</a>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-between items-center  w-full  p-20 max-md:px-5 pt-0 box-border">
    <button onClick={() => swiper?.slidePrev()} className="flex dark:bg-[#2e2e33] items-center p-5 max-md:p-6 bg-[#38b2a5] dark:bg- text-white border-none rounded-md cursor-pointer transition-colors duration-300 hover:bg-gray-600" aria-label="Previous slide">
        <svg className="w-4 h-4 fill-white" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z"></path>
        </svg>
    </button>
    
    <button onClick={() => swiper?.slideNext()} className="flex dark:bg-[#2e2e33]  items-center p-5 max-md:p-6 bg-[#38b2a5] text-white border-none rounded-md cursor-pointer transition-colors duration-300 hover:bg-gray-600" aria-label="Next slide">
        <svg className="w-4 h-4 fill-white" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z"></path>
        </svg>
    </button>
</div>
        </section>
    );
};

export default Carousel;
