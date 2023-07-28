'use client'
import React, { useRef, useState } from 'react';
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
    <div className="xs:hidden md:block">
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        pagination={{
            clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="bg-gray-400 h-[23rem]"
        >
            <SwiperSlide>
                <Image src="/0768eade-7bd6-4b2f-adff-8e52da697824.png" alt="" fill sizes="100vw"/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/1f04070f-5b18-4ffb-98af-0cf998ff1e7f.png" alt="" fill sizes="100vw"/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/0768eade-7bd6-4b2f-adff-8e52da697824.png" alt="" fill sizes="100vw"/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/1f04070f-5b18-4ffb-98af-0cf998ff1e7f.png" alt="" fill sizes="100vw"/>
            </SwiperSlide>
        </Swiper>
    </div>
    <div className="md:hidden">
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        pagination={{
            clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="bg-gray-400 h-[18rem]"
        >
            <SwiperSlide>
                <Image src="/download.png" alt="" fill sizes="100vw"/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/images (1).png" alt="" fill sizes="100vw"/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/download.png" alt="" fill sizes="100vw"/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/images (1).png" alt="" fill sizes="100vw"/>
            </SwiperSlide>
        </Swiper>
    </div>
    </>
  );
}